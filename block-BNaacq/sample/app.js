const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const Article = require('./models/article');

mongoose.connect("mongodb://localhost/sample2",(err)=> {
    console.log(err ? err : "connected to database");
});

const app = express();

app.use(logger('dev'));



app.listen(3000,()=> {
    console.log('server is running on port 3000');
})

