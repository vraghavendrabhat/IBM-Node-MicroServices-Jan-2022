const http = require('http');


const server = http.createServer((req, res) => {
    //process request and send response
    res.write('Hello!');
    res.end();
    //response events
    res.on('close',()=>{
        console.log('response closed')
    })
    res.on('finish',()=>{
        console.log('response finshed')
    })

})

//start the server
server.listen(3000, () => {
    console.log('Server is Running!!!');
})

//this event will be fired when a request recived to server
server.on('request',(req,res)=>{
    console.log(`Server received Request on ${new Date()}`)
})
