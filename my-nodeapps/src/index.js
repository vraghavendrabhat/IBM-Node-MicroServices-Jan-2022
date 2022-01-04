const fs = require('fs');
const path = require('path');

console.log(__dirname)
console.log(__filename)
// const filePath = './src/assets/infowrite.txt';
const filePath = path.join(__dirname,'assets/infowrite.txt')
const options = {
    encoding: 'utf-8'
}
const data = 'Hello,How are you';

fs.writeFile(filePath, data, options, err => {
  if (err) throw err;
  console.log(`data has been written into ${filePath}`)
})