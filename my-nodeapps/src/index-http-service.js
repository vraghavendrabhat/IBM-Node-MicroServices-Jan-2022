const http = require('http');
const { findAll } = require('./services/user.service')

const server = http.createServer(async (req, res) => {
    //response headers : content-type
    //response headers
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'customheader': 'customerheadervalue'
    })
    try {
        const users = await findAll();
        // res.write(JSON.stringify(users))
        res.end(JSON.stringify(users))
    }
    catch (err) {
        res.end(JSON.stringify({ err: err }))
    }

})

//start the server
server.listen(3000, () => {
    console.log('Server is Running!!!');
})

//this event will be fired when a request recived to server
server.on('request', (req, res) => {
    console.log(`Server received Request on ${new Date()}`)
})
