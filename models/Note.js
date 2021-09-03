// grabs MongoDB connection
const mongoose = require('../db/connection.js')

// Creates a note Model and exports it
// note model should ref a User as owner
const noteSchema = new mongoose.Schema({
    subject: String,
    text: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,

        ref: 'User'
    },
    },
    { timestamps: true }
)

const Note = mongoose.model('Note', noteSchema)

module.exports = Note