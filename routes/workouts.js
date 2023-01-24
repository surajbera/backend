const express = require('express')
const { createWorkout, getWorkout, getWorkouts } = require('../controllers/workoutController')
const router = express.Router()

router.post('/', createWorkout).get('/', getWorkouts)
router.get('/:id', getWorkout)

// UPDATE a workout
router.put('/:id', (req, res) => {
  res.json({ msg: 'Update a workout' })
})


// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Delete a workout' })
})

module.exports = router