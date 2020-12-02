const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    nmae: String,
    email: {type:String, lowercase:true},
    age: {type:Number,default:0},
    favoritres: [String],
    marks: [Number]
},{timestamps:true});


let addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId
},{timestamps:true});