const express = require('express');
const { findAll } = require('../services/user.service')

const userRouter = express.Router();

userRouter.get('/list', async (req, res) => {
    try {
        const users = await findAll();
        res.json(users);
    }
    catch (err) {
        res.json({ err: err });
    }
})

userRouter.get('/list/:id', async (req, res) => {
    try {
        const users = await findAll();
        res.json(users);
    }
    catch (err) {
        res.json({ err: err });
    }
})

userRouter.post('/', async (req, res) => {
    const payload = req.body;
    console.log(payload)
    res.json({ message: 'created' })
})

module.exports = userRouter;

