require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./handlers/err')
const authRoutes = require('./routes/auth')
const postsRoutes = require('./routes/posts')
const { loginRequired, ensureCorrectUser } = require('./middleware/auth')

const PORT = 8081

app.use(cors())
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/posts', postsRoutes)
app.use('/api/posts/:id/post', loginRequired, ensureCorrectUser, postsRoutes)

 
app.use(function(req, res, next){
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(errorHandler)

app.listen(PORT,  () => {
    console.log(`Server running on port ${PORT}`)
})