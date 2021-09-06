const mongoose = require('mongoose')
require('dotenv').config()
// mongoURI changes if the app is in production
// const mongoURI = process.env.MONGODB_URI
const mongoURI = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://localhost/Zatta'

mongoose
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

module.exports = mongoose