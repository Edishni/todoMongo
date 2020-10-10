const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    id:Number,
    title:String,
    todo:String,
    date:String,
    time:String,
    completed : Boolean
});


module.exports = mongoose.model('tasklist', taskSchema);
