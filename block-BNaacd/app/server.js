const express = require('express');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sample",{useNewUrlParser: true ,useUnifiedTopology: true },
(err)=> {
    console.log(err ? err : "connected to the database");
});

const app = express();

app.listen(3000,()=> {
    console.log('server is running on port 3000');
})

