console.clear(); /* TODO: remove this */
require('dotenv').config()
const logger = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(logger('dev'))
app.use(express.json())

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests once connected to the database
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT)
    })
  })
  .catch((error) => { console.log(error) })