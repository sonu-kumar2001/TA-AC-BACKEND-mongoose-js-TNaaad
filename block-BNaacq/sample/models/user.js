const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type: String},
    email: {type: String},
    age: {type: Number, default: 0}
},{timestamps: true});

module.exports = mongoose.model('User',userSchema);