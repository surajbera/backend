const express = require('express')
const router = express.Router()

// POST a new workout
router.post('/', (req, res) => {
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