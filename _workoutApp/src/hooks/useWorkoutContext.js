import { useContext } from "react"
import { workoutsContext } from "../context/workoutContext.jsx"

export const useWorkoutContext = () => {
  const context = useContext(workoutsContext)

  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside useContextWorkoutProvider"
    )
  }
  return context
}
