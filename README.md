# apitool

# Use 
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
