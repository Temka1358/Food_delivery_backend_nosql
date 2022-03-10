const express = require('express')


const app = new express()

app.get('/', (req, res)=>{
    res.send("admin route")
})


module.exports = app;