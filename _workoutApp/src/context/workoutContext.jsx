/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useReducer } from "react"

export const workoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      }
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      }
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id), // filtering to check id of all items and keep only those that dont match the payload id hence removing the one that match
      }
    default:
      return state
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  })
  return (
    <workoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </workoutsContext.Provider>
  )
}
