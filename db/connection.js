const mongoose = require('mongoose')
require('dotenv').config()
// mongoURI changes if the app is in production
// const mongoURI = process.env.MONGODB_URI
const mongoURI = 'mongodb://localhost:27017/sessions'
async () => {

    await mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then((instance) => {
        console.log(`Connected to db:${instance.connections[0]._connectionString}`)
    })
    .catch((error) => console.log('Connection Failed', error))
}

module.exports = mongoose