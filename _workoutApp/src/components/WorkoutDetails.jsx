/* eslint-disable react/prop-types */
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import { formatDistanceToNow } from "date-fns"

export const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext()
  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      // this method is responsible for keeping the items deleted from DB.. if its not there then the items come back
      {
        method: "DELETE",
      }
    )
    const json = await res.json()

    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json })
    }
  }
  return (
    <div className="bg-neutral-100 p-6 rounded-md w-full flex flex-col gap-3 hover:scale-105 transition-all">
      <div className="flex justify-between">
        <h2 className="text-xl lg:text-3xl capitalize text-green-600 font-bold">
          {workout.title}
        </h2>
        <span
          className="material-symbols-outlined bg-gray-300 cursor-pointer rounded-full p-2"
          onClick={handleDelete}
        >
          Delete
        </span>
      </div>
      <p>
        <strong>Load: </strong>
        {workout.load} kg
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p className="text-sm text-gray-500">
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
    </div>
  )
}

export default WorkoutDetails
