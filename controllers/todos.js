const express = require('express')
const router = express.Router()

const Todo = require('../models/Todo')

router.get('/', (req, res, next) => {
    Todo.find({})
    .then((todos) => res.json(todos))
    .catch(next)
})

router.post('/:id', (req, res , next) => {
    Todo.create({...req.body, author: req.params.id})
    .then((todo) => res.json(todo))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    Todo.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((todo) => res.json(todo))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Todo.findOneAndDelete({_id: req.params.id})
    .then((todo) => res.json(todo))
    .catch(next)
})

router.get('/todo/:id', (req, res, next) => {
    Todo.findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch(next)
})

router.get('/author/:id', (req, res, next) => {
    Todo.find({author: req.params.id})
    .then((todo) => res.json(todo))
    .catch(next)
})

module.exports = router