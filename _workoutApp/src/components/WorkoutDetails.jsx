/* eslint-disable react/prop-types */
export const WorkoutDetails = ({ workout }) => {
  return (
    <div className=" bg-neutral-100 p-4 rounded-md w-fit flex flex-col gap-3 hover:scale-110 transition-all">
      <h2 className="text-xl capitalize text-green-400 font-bold">
        {workout.title}
      </h2>
      <p>
        <strong>Load: </strong>
        {workout.load} kg
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p className="text-sm text-gray-500">{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails
