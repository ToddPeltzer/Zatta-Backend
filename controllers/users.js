// routes for slug
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const session = require('express-session')

const User = require('../models/User')

router.get('/', (req, res, next) => {
    User.find({})
    .then((users) => res.json(users))
    .catch(next)
})

router.post('/', (req, res , next) => {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch(next)
})

router.post('/login', (req, res, next) => {
    User.find({})
    .then(users => {
        User.find({username: req.body.username})
        .then(user => {
            
            bcrypt.compare(req.body.password, user[0].password, (err, isMatch) => {
                if (err) return console.log(err)
                
                if (isMatch) {
                    req.session.cookie.exprires = 1000 * 60 * 60 * 24
                    req.session.user = user[0]
                    res.send(req.sessionID)
                } else {
                    res.send(false)
                }
            })
        })
    })
    .catch(console.error)
})

router.post('/username', (req, res, next) => {
    User.find({ username: req.body.username })
    .then((user) => res.json(user))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((user) => res.json(user))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    User.findOneAndDelete({_id: req.params.id})
    .then((user) => res.json(user))
    .catch(next)
})

module.exports = router