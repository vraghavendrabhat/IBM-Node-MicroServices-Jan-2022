const express = require('express');
const { chunk } = require('lodash');
const { findAll } = require('./services/user.service')

//create application object
const app = express();

//routers
app.get('/', (req, res) => {
    res.json({
        page: 'Home'
    })
})
app.get('/api/users', async (req, res) => {
    try {
        const users = await findAll();
        res.json(users);
    }
    catch (err) {
        res.json({ err: err });
    }
})

app.post('/api/users', async (req, res) => {

    req.on('data', chunk => {
        console.log(chunk)
    })
    res.status(201).json({ message: 'created' })
})

app.delete('/hello',(req,res)=>{
    res.end('Hello Express -DELET');
})
app.put('/hello',(req,res)=>{
    res.end('Hello Express -PUT');
})


app.listen(3000, () => {
    console.log('express server is running ')
})