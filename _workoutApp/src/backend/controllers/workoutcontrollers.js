import { Workout } from "../models/workoutSchema.js"
import mongoose from "mongoose"

// * Get all workouts
export const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })
  res.status(200).json(workouts)
}

// * Get single workout
export const getSingleWorkouts = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No such workout" })
  }

  const workout = await Workout.findById(id)
  if (!workout) {
    return res.status(404).json({ err: "No such workout" })
  }
  res.status(200).json(workout)
}

// * Create new workout
export const createWorkout = async (req, res) => {
  const { title, reps, load, bodyPart } = req.body

  // add doc to db
  try {
    const workout = await Workout.create({ title, reps, load, bodyPart })
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

// * Delete workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No such workout" })
  }

  const workout = await Workout.findOneAndDelete({ _id: id })

  if (!workout) {
    return res.status(404).json({ err: "No such workout" })
  }
  res.status(200).json(workout)
}

// * Update workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No such workout" })
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, // req.body is an obj so we spread the properties using spread op
    }
  )

  if (!workout) {
    return res.status(404).json({ err: "No such workout" })
  }
  res.status(200).json(workout)
}
