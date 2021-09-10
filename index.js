const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./db/connection.js')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const io = require('socket.io');

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))

const sessionStore = MongoStore.create({
    mongoUrl: process.env.DB_URL,
    collectionName: 'sessions'
})

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}))

const usersController = require('./controllers/users.js')
const notesController = require('./controllers/notes.js')
const todosController = require('./controllers/todos.js')
const postsController = require('./controllers/posts.js')
const commentsController = require('./controllers/comments.js')

app.use('/api/users', usersController)
app.use('/api/notes', notesController)
app.use('/api/todos', todosController)
app.use('/api/posts', postsController)
app.use('/api/comments', commentsController)

// session ---------
app.get('/api/users/session/:id', (req, res, next) => {
    sessionStore.get(req.params.id, (err, session) => {
        session
        ? res.send(session)
        : res.send("No session")
    })
  })
  
app.delete('/api/users/session/:id', (req, res, next) => {
  sessionStore.destroy(req.params.id, (err, session) => {
    err
    ? res.send(false)
    : res.send(true)
  })
})
// session end ---------


const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("Connected Port 4000")
})

