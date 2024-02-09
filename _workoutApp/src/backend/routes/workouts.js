import express from "express"
import {
  createWorkout,
  getWorkouts,
  getSingleWorkouts,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutcontrollers.js"

const router = express.Router()

// Get all workouts
router.get("/", getWorkouts)

// Get a single workout
router.get("/:id", getSingleWorkouts)

// Delete a single workout
router.delete("/:id", deleteWorkout)

// Post a workout
router.post("/", createWorkout)

// Patch a workout
router.patch("/:id", updateWorkout)

export { router }
