const express = require('express');
const bodyParser = require('body-parser')
const userRouter = require('./routes/users.route');

//create application object
const app = express();

/// parse application/json
app.use(bodyParser.json())

//mount user router with app
app.use("/api/users", userRouter)


//routers
app.get('/', (req, res) => {
    res.json({
        page: 'Home'
    })
})


app.listen(3000, () => {
    console.log('express server is running ')
})