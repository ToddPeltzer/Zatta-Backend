// test script to populate the database with fake data
const mongoose = require('./connection.js')

const User =        require('../models/User.js')
const userSeeds =   require('./users.json')
const sampleUser = userSeeds[0]

const Note =        require('../models/Note.js')
const noteSeeds =   require('./notes.json')

// deletes any existing users
User.deleteMany({})
    // delets any existing notes
    .then(() => Note.deleteMany({}))
    .then(() => {
        // creates a sample user and adds author property to each note
        return User.create(sampleUser)
        .then(user => {
            return noteSeeds.map((note) => ({...note, author: user._id}))
        })
        .then(notes => Note.insertMany(notes))
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })