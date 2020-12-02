const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {type:String,required: true},
    description: {type: String, minlength: 50, maxlength: 120},
    tags: [String],
    cretaedAt: {type: Date, default: new Date()},
    likes: {type:Number, default: 0},
},{timestamps:true});

let Article = mongoose.model('Article',articleSchema);

module.exports = Article;

