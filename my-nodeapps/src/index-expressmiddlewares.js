const express = require('express');
const { chunk } = require('lodash');
const { findAll } = require('./services/user.service')
const bodyParser = require('body-parser')


//create application object
const app = express();

/// parse application/json
app.use(bodyParser.json())


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
    const payload = req.body;
    console.log(payload)
    res.json({ message: 'created' })
})

app.delete('/hello', (req, res) => {
    res.end('Hello Express -DELET');
})
app.put('/hello', (req, res) => {
    res.end('Hello Express -PUT');
})


app.listen(3000, () => {
    console.log('express server is running ')
})