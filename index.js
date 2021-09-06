const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./db/connection.js')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))

const sessionStore = MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/sessions',
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

app.use('/api/users', usersController)
app.use('/api/notes', notesController)

app.get('/', function(req, res, next) {
  // if logged in run session,
req.session.cookie.maxAge = 1000 * 5
    if (req.session.views) {
      req.session.views++
      res.setHeader('Content-Type', 'text/html')
      res.write('<p>views: ' + req.session.views + '</p>')
      res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
      res.end()
    } else if(req.session.views === 10) {
      req.session.destroy()
    } else {
      req.session.views = 1
      res.end('welcome to the session demo. refresh!')
    }
  })

const port = 4000
app.listen(port, () => {
    console.log("Connected Port 4000")
})

