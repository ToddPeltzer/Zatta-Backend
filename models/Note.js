// grabs MongoDB connection
const mongoose = require('../db/connection.js')

// Creates a note Model and exports it
// note model should ref a User as owner
const noteSchema = new mongoose.Schema({
    subject: {
        type: String, 
        required: true
    },
    text: {
        type: String, 
        default: ''
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,

        ref: 'User',

        required: true
    },
    },
    { timestamps: true }
)

const Note = mongoose.model('Note', noteSchema)

module.exports = Note
