const dotenv = require('dotenv').config();
const express = require('express')
const apiRoutes  = require('./routes/api')
const adminRoutes = require('./routes/admin')
const connection = require('./database')


const app = new express()
const port = 3000;


app.use(express.json())
app.use(express.static('public'))

app.use('/api', apiRoutes)
app.use('/', adminRoutes)
app.all('*', (req, res, next)=>{
    res.status(404).json({
        success: false,
        message: `Can't find ${req.orginalUrl} on this server!`
    })
})


app.listen(port, ()=>{
    console.log("server is running at port: " + port)
})