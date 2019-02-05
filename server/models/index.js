const mongoose = require('mongoose')
const MONGO_PORT = 27017
mongoose.set('debug', true)
mongoose.Promise = Promise
mongoose.connect(`mongodb://localhost:${MONGO_PORT}/blog`, {
    keepAlive: true,
    useNewUrlParser: true
})

module.exports.User = require('./user')