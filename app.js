/*
Created by: Glenn Neiger
Date: 04/16/2019 
Use: 
Simple tool for downloading from API where they are either rate limited or restricted for getting 
a certain number of records in each call. Update the numbers below as needed to setup the following: 
1. total - this is the total number of items you want to download
2. numberRecordsPerCall - is the number of records per call that you can download
3. currentOffset - is the start and current offset that is used and updated per each call
4. fileCount starts at 1 is used to name the file names for example outputData-1.json...outputData-20.json 
5. Search this file for two instances of 'fs.writeFile(' and update the path where you desire the output files to be placed. 

Prior to running the first time do the followingreq in the folder of this project to install the dependencies. This only needs to be done once: 

npm install

To run this program on the command line requires npm to be installed which includes node js. 
To run on command line go to the folder and type:

node app.js

*/
var request = require("request");
var fs = require('fs');

var fileCount = 1;
var numberRecordsPerCall = 10;
var total = 40; // <== replace total number data items
var fixedOffset = 0;
var currentOffset = 1;



function getOffsetData(startAtOffset) {

    
    // replace with the var options from postman code for node js for request. 
    // update the startAtOffset to be the value from the prameter above 'startAtOffset)     

    request(options, function (error, response, body) {
        if (error) throw new Error(error);


        fs.writeFile('[REPLACE WITH YOUR FILE PATH]/outputData-' + fileCount + '.json', body, function (err) {
            if (err) throw err;
            console.log('Saved!');
            fileCount++;
        });
    });
}

function getData() {

    // add var options from postman (code for node js for request)

     request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(total + ", " + fixedOffset + ", " + numberRecordsPerCall);
        //console.log(body);
        fs.writeFile('[REPLACE WITH YOUR FILE PATH]/outputData-' + fileCount + '.json', body, function (err) {
            if (err) throw err;
            console.log('Saved!');
            fileCount++;
        });

    });
}

var getChunkData = function (timerId) {
    //var randomTimerVal = randomIntFromInterval(2000,2500);
    //console.log("random timer val: " + randomTimerVal);
    if (total > 0) {
        currentOffset = currentOffset + numberRecordsPerCall;
        if (currentOffset < total) {
            console.log("total: " + total + " currentOffset: " + currentOffset);
            getOffsetData(currentOffset.toString());
        } else {
            clearTimeout(timerId);
            console.log("timer stopped. Files all downloaded.")
        }
    }

};




// adjust the timer is in milliseconds 
// 1000 = 1 second
// 1500 = 1.5 seconds
function processDataLoop() {
    const timerId = setInterval(
        () => getChunkData(timerId),
        1500
    );
}

getData();
processDataLoop();