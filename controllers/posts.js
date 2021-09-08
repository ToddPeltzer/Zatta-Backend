// routes for slug

const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

// get all posts
router.get('/', (req, res, next) => {
    Post.find({})
    .then((posts) => res.json(posts))
    .catch(next)
})

// create new post
router.post('/', (req, res , next) => {
    Post.create({...req.body})
    .then((post) => res.json(post))
    .catch(next)
})

router.post('/username', (req, res, next) => {
    Post.find({ username: req.body.username})
    .then((post) => res.json(post))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    Post.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((post) => res.json(post))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Post.findOneAndDelete({_id: req.params.id})
    .then((post) => res.json(post))
    .catch(next)
})



module.exports = router