// grabs connection to MongoDB
const mongoose = require('../db/connection.js')
const bcrypt = require('bcrypt')
// Creates a User model and exports it
const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true},
    email: {
        type: String,
        default: ''
    },
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true,
    },
    userAuth: {
        isLoggedin: {
            type: Boolean,
            default: false
        },
        SessionID: {
            type: String,
            default: ''
        }
    }
})

// bcrypt stuff
userSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, 10, (err, passwordHash)=> {
        if(err)
        return next(err);
        this.password = passwordHash
        next();
    });
})

// bcrypt stuff end

const User = mongoose.model('User', userSchema)

module.exports = User;