//fs
const fs  = require('fs');

function block(message){
    console.log(message)
}

const filePath = './src/assets/info.txt';

const options = {
    encoding: 'UTF-8'
}

block('start')

fs.readFile(filePath, options, (err, data) => {
    if (err) throw err;
    console.log(data)
})

block('end')