const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))

const usersController = require('./controllers/users.js')
const notesController = require('./controllers/notes.js')

app.use('/api/users', usersController)
app.use('/api/notes', notesController)

const port = process.env.PORT || 80
app.listen(port, () => {
    console.log("Connected Port 4000")
})

