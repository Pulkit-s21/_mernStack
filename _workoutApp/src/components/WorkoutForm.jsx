import { useState, useRef } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

export const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext()
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const [error, setError] = useState("")

  const titleRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const workout = { title, load, reps }
    const res = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: { "Content-Type": "application/json" },
    })
    const json = await res.json()

    if (!res.ok) {
      setError(json.error)
    } else {
      setTitle("")
      setLoad("")
      setReps("")
      console.log("new workout added", json)
      dispatch({ type: "CREATE_WORKOUT", payload: json })
    }
  }
  return (
    <div className="p-4 max-w-96">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <h2 className=" text-xl font-bold">Add a workout</h2>

        <div className="flex justify-between">
          <label htmlFor="title">Exercise Title</label>
          <input
            className={`text-center border-2 border-neutral-500`}
            ref={titleRef}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="load">Load (kg): </label>
          <input
            className={`text-center border-2 border-neutral-500`}
            type="number"
            id="load"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="reps">Reps: </label>
          <input
            className={`text-center border-2 border-neutral-500`}
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </div>

        <button className=" bg-green-500 rounded text-white w-fit py-2 px-4">
          Add a workout
        </button>
      </form>

      {error && <div>{error}</div>}
    </div>
  )
}
