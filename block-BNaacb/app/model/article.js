const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title : String,
    createdAt: Number,
    details: {
        author: String,
        tags: [String]
    }
});