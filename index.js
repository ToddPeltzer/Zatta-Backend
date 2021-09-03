const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const usersController = require('./controllers/users.js')
const notesController = require('./controllers/notes.js')

app.use('/api/users', usersController)
app.use('/api/notes', notesController)

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("Connected Port 4000")
})