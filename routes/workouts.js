const express = require('express')
const Workout = require('../models/WorkoutModel')
const router = express.Router()

// POST a new workout
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body

  try {
    const workout = await Workout.create({ title, reps, load }) /* creates a new document along with an id */
    res.status(201).json(workout)
  } catch ({ message }) {
    res.status(400).json({ message })
  }

  res.json({ msg: 'POST a new workout' })
})

// GET all workouts
router.get('/', (req, res) => {
  res.json({ msg: 'GET all workouts' })
})

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({ msg: 'GET a single workout' })
})

// UPDATE a workout
router.put('/:id', (req, res) => {
  res.json({ msg: 'Update a workout' })
})


// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Delete a workout' })
})

module.exports = router