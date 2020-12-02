const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {type:String,required: true},
    description: {type: String,minlength: 50, maxlength: 100}
},{timestamps:true});

let Article = mongoose.model('Article',articleSchema);

module.exports = Article;