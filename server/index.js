const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 8081

app.use(cors())
app.use(bodyParser.json())


app.use((req, res, next ) => {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.listen(PORT,  () => {
    console.log(`Server running on port ${PORT}`)
})