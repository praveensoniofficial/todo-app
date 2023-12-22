var mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    name: String,
    isCompleted: Boolean
});

module.exports = mongoose.model('todo', TodoSchema)