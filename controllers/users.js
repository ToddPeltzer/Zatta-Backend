// routes for slug

const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.get('/', (req, res, next) => {
    User.find({})
    .then((users) => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(next)
})

router.post('/', (req, res , next) => {
    User.create(req.body)
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