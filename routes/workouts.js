const express = require('express')
const { createWorkout, getWorkout, getWorkouts, deleteWorkout } = require('../controllers/workoutController')
const router = express.Router()

router.post('/', createWorkout).get('/', getWorkouts)
router.get('/:id', getWorkout).delete('/:id', deleteWorkout)

// UPDATE a workout
router.put('/:id', (req, res) => {
  res.json({ msg: 'Update a workout' })
})

module.exports = router