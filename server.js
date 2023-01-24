console.clear(); /* TODO: remove this */
require('dotenv').config()
const logger = require('morgan')
const express = require('express')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(logger('dev'))
app.use(express.json())

// routes
app.use('/api/workouts', workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})