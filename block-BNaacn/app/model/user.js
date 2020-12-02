const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String,required: true},
    email: {type: String, lowercase: true},
    age: { type: Number, default: 0},
    password: {type: String, min: 5},
    createdAt: {type:Date,default: new Date()}
},{timestamps: true});

let User = mongoose.model('User',userSchema);

module.exports = User;

