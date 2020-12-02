const express = require('express');
const mongoose = require('mongoose');
// connecting to database
mongoose.connect("mongodb://localhost/sample",(err)=> 
{
    console.log(err ? err: "connected top database");
})
// creating an instance
const app = express();
// server is listening on port 4k
app.listen(4000, ()=> {
    console.log('server is running on port 4000');
})