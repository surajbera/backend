const express = require('express')
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const router = express.Router()

router.post('/', createWorkout).get('/', getWorkouts)
router.get('/:id', getWorkout).delete('/:id', deleteWorkout).patch('/:id', updateWorkout)

module.exports = router