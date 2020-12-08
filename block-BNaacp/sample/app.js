// requiring packages
let express = require('express');
let mongosse = require('mongoose');
let logger = require('morgan');
let User = require('./models/user');

// connecting to database 
mongosse.connect("mongodb://localhost/sample",{ useNewUrlParser: true ,useUnifiedTopology: true }, (err)=> {
    console.log(err ? err : "connected to database");
});

// creating an instance
let app = express();

// middlewares
app.use(logger('dev'));
app.use(express.json());

//routes
app.post('/users', (req,res,next)=> {
    User.create(req.body,(err,user)=> {
        if(err) return next(err);
        res.json(user);
    })
});

app.get('/users',(req,res) => {
    User.findOne({name: "sonu" },(err,user)=> {
        if(err) return next(err);
        res.json(user);
    });
});

app.put('/users/:name',(req, res, next)=> {
    let name  = req.params.name;
    console.log(name);
    console.log(req.body)
     User.findOneAndUpdate({name}, req.body, {new: true}, (err, updatedUser)=> {
        if(err) return next(err);
        res.json(updatedUser);
    })
})
/*
app.put('/users/:id',(req,res,next)=> {
    var id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{new:true},(err,updatedUser)=> {
        if(err) return next(err);
        res.json(updatedUser);
    })
})
*/
app.delete("/users/:id",(req,res,next)=> {
    var id = req.params.id;
    User.findByIdAndDelete(id,(err,deletedUser)=> {
        if(err) return next(err);
        res.send(`${deletedUser.name} is deleted from database`);
    })
})
// handling error
app.use((req,res)=> {
    res.status(404).send('page not found');
});

app.use((err,req,res,next)=> {
    next(err);
})

// listening server
app.listen(3000, ()=> {
    console.log("server is running on port 3000");
})