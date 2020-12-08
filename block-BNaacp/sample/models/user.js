let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String ,require: true},
    email: {type: String},
    sports: [{type: String}]
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);