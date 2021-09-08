const mongoose = require('../db/connection.js')

const commentSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,

        ref: 'post',

        required: true
    }
})

module.exports = mongoose.model('comment', commentSchema)