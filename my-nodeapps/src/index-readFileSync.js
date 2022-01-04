const fs = require('fs')

function block(message) {
    console.log(message)
}

const filePath = './src/assets/info.txt';
const options = {
    encoding: 'UTF-8'
}
block('start')
const data = fs.readFileSync(filePath, options)
console.log(data)
block('end')