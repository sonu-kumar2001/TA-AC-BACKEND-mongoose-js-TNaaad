const mongoose = require('mongoose');
const { schema } = require('./article');

const Schema = mongoose.Schema;

let commentSchema = new Schema({
    content: {type: string,maxlength:400},
    author: Schema.Types.ObjectId,
    article: {type: string},
},{timestamps:true});

module.exports = mongoose.model('Comment',commentSchema);