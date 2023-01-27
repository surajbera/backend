const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

/**
 * @desc Create a new workout
 * @route POST /api/workouts
 * @access private
*/
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body

  let emptyFields = []

  if (!title) emptyFields.push('title')
  if (!reps) emptyFields.push('reps')
  if (!load) emptyFields.push('load')

  if (emptyFields.length > 0) {
    return res.status(400).json({ message: 'Please fill in all the fields', emptyFields })
  }

  try {
    const workout = await Workout.create({ title, reps, load }) /* creates a new document along with an id */
    res.status(201).json(workout)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

/**
 * @desc GET all workouts
 * @route GET /api/workouts
 * @access private
*/
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 }) /* -1 indicates descending order(latest wala workout pehhle dikhega) */

  res.status(200).json(workouts)
}

/**
 * @desc GET a workout
 * @route GET /api/workouts/:id
 * @access private
*/
const getWorkout = async (req, res) => {
  const { id } = req.params

  /* make sure the id is valid */
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'No Such Workout' })
  }

  const workout = await Workout.findById(id)
  if (!workout) {
    return res.status(404).json({ message: 'No Such Workout' })
  }
  res.status(200).json(workout)
}

/**
 * @desc UPDATE a workout
 * @route PACTH /api/workouts/:id
 * @access private
*/
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'No such workouts' })
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, req.body, { new: true })
  /* { new: true } -> If this is not provided then older document will be sent as a responseb */

  if (!workout) {
    return res.status(400).json({ message: 'No Such Workout' })
  }

  res.status(200).json(workout)
}

/**
 * @desc DELETE a workout
 * @route DELETE /api/workouts/:id
 * @access private
*/
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'No such workout' })
  }

  const workout = await Workout.findByIdAndDelete({ _id: id })
  if (!workout) {
    return res.status(404).json({ message: 'No such workout' })
  }

  res.status(200).json(workout)
}

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout
}