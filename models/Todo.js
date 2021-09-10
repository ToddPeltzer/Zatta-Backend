const mongoose = require('../db/connection.js')

const todoSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
        },
    complete: {
        type: Boolean,
        default: false
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    },
    { timestamps: true }
)

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo