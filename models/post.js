var mongoose = require('../connect/mongoose');
var Schema = mongoose.Schema,
    ObjectId = mongoose.ObjectId;

var post = new Schema({
    id: {type:ObjectId, index: {unique:true}},
    title: {type: String, default: ''},
    date: {type: Date, default: Date.now},
    author: {type: String, default: 'Regina Galieva'},
    summary: {type: String},
    prev_pic: {},

    buff: Buffer
});

module.exports = mongoose.model('Post', post);