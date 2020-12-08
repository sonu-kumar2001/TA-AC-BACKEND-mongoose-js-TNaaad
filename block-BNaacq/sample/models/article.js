const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let articleSchema = new Schema({
    title : {type: String,require : true},
    description: {type: String,maxlength: 280},
    tags: [{type: String}],
    likes: {type: Number},
    author: Schema.Types.ObjectId,
    comments: [{type:String}],
},{timestamps:true});

module.exports = mongoose.model('Article',articleSchema);