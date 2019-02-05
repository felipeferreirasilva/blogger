const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 8081
const errorHandler = require('./handlers/err')

app.use(cors())
app.use(bodyParser.json())


app.use((req, res, next ) => {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(errorHandler)

app.listen(PORT,  () => {
    console.log(`Server running on port ${PORT}`)
})