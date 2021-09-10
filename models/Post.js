const mongoose = require('../db/connection.js')

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }, 
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,

            ref: 'comment',

            required: true

        }
    ]
})

module.exports = mongoose.model('post', postSchema)