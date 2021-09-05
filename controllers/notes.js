// routes for slug

const express = require('express')
const router = express.Router()

const Note = require('../models/Note')


router.get('/', (req, res, next) => {
    Note.find({})
    .then((notes) => res.json(notes))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch(next)
})

router.post('/:id', (req, res , next) => {
    Note.create({...req.body, author: req.params.id})
    .then((note) => res.json(note))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    Note.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((note) => res.json(note))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Note.findOneAndDelete({_id: req.params.id})
    .then((note) => res.json(note))
    .catch(next)
})
module.exports = router