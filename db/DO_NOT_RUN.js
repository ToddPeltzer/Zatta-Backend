
const Note = require('../models/Note.js')

const Todo = require('../models/Todo')

Todo.deleteMany({})
    .then(() => Note.deleteMany({}))
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit())