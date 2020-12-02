const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { type: String},
    email: { type : String, lowercase: true},
    age : { type : Number, default: 0}
},{timestamps: true});