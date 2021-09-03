// grabs connection to MongoDB
const mongoose = require('../db/connection.js')

// Creates a User model and exports it
const userSchema = new mongoose.Schema({
    name: String,
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true,
        unique: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;