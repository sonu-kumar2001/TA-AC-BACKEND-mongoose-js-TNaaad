const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    title: {type:String,required: true},
    description: {type: String, minlength: 50, maxlength: 120},
    tags: [String],
    cretaedAt: {type: Date, default: new Date()},
    likes: {type:Number, default: 0},
    email: {type: String, lowercase: true},
    age: { type: Number, default: 0},
    password: {type: String, min: 5},
},{timestamps:true});

let User = mongoose.model('User',userSchema);
module.exports = User;

let addressSchema = new Schema({
    village: String,
    city: {type: String,required: true},
    state: {type: String,required: true},
    pin: Number,
    user: Schema.Types.ObjectId

},{timestamps: true});

let Address = mongoose.model('Address',addressSchema);

module.exports = Address;