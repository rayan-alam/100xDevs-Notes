const mongoose = require("mongoose");
const {Schema} = mongoose;

// mongodb+srv://admin-100xDev:OGx8UVzqL5hVIO1w@cluster0.i0euznc.mongodb.net/
mongoose.connect("mongodb+srv://admin-100xDev:OGx8UVzqL5hVIO1w@cluster0.i0euznc.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
};  