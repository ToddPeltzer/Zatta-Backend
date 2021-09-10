// routes for slug

const express = require('express')
const router = express.Router()

const Comment = require('../models/Comment')

// get all comments
router.get('/', (req, res, next) => {
    Comment.find({})
    .then((comments) => res.json(comments))
    .catch(next)
})

// create new comment
router.post('/', (req, res , next) => {
    Comment.create({...req.body})
    .then((comment) => res.json(comment))
    .catch(next)
})

// get comments by username
router.get('/username', (req, res, next) => {
    Comment.find({ username: req.body.username})
    .then((comment) => res.json(comment))
    .catch(next)
})

// update comment by id
router.put('/:id', (req, res, next) => {
    Comment.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((comment) => res.json(comment))
    .catch(next)
})

// delete comment by id
router.delete('/:id', (req, res, next) => {
    Comment.findOneAndDelete({_id: req.params.id})
    .then((comment) => res.json(comment))
    .catch(next)
})

// find by post id
router.get('/post/:id', (req, res, next) => {
    Comment.find({ post: req.params.id})
    .then((comment) => res.json(comment))
    .catch(next)
})

module.exports = router