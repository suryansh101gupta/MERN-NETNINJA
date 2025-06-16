require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routineRoutes = require('./routes/routines')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/routines', routineRoutes)
app.use('/api/user', userRoutes)

// connet to db
mongoose.connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
    console.log('connected to db and listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

// listen for requests
