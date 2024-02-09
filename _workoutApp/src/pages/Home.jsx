import { useEffect } from "react"
import { WorkoutForm } from "../components/WorkoutForm"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import WorkoutDetails from "../components/WorkoutDetails"

export const Home = () => {
  const { workouts, dispatch } = useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:4000/api/workouts")
      const json = await res.json()

      if (res.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json })
      }
    }
    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <WorkoutForm />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 place-items-center">
        {workouts?.map((workout) => {
          return <WorkoutDetails key={workout._id} workout={workout} />
        })}
      </div>
    </div>
  )
}

export default Home
