var mongoose = require('../connect/mongoose');
var Schema = mongoose.Schema,
    ObjectId = mongoose.ObjectId;

var post = new Schema({
    id: {type:ObjectId, index: {unique:true}},
    title: {type: String, default: ''},
    createDate: {type: Date, default: Date.now},
    author: {type: String, default: 'Regina Galieva'},
    summary: {type: String},
    prev_pic: {type: String},
    text: {type: String},
    buff: Buffer
});

module.exports = mongoose.model('Post', post);