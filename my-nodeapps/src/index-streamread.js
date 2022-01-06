//Streaming mode
const fs = require('fs');
const path = require('path');
const { log } = console;

const fileName = path.join(__dirname, 'assets/info.txt');
const config = {
    encoding: 'UTF-8'
}
//create Stream
const inputStream = fs.createReadStream(fileName, config);

//you have to attach listeners
//data event is emitted by os for each chunk of data

let data = ''
inputStream.on('data', (chunk) => {
    log(`Received ${chunk.length} bytes of data.`)
    data += chunk;
})

//end event is called , no more chunk of data is availble.
inputStream.on('end', () => {
    log('There will be no more data to read!');
    log(data);
})

//error event: for error handling
inputStream.on('error', err => {
    log(`Some thing went wrong! ${err}`)
});
