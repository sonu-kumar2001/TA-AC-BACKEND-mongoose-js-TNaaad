const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema( {
    name: String,
    email: {type:String,lowercase:true},
    age: {type: Number,default:0},
    favorite: [String],
    marks: [Number],
    password: {type:String, minlength: 5, maxlength: 15},
    createdAt: {type:Date,default:new Date()}
},{timestamps:true});

let User = mongoose.model('User',userSchema);

module.exports = User;