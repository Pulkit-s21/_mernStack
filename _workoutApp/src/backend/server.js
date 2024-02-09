/* eslint-disable no-undef */
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import { router } from "./routes/workouts.js"
import cors from "cors"

// dotenv config
dotenv.config()

// variables
const port = process.env.PORT || 4000
const mongoose_uri = process.env.MONGO_URI

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
  next() // if we dont write next then it never moves forward
})
app.use(
  cors({
    origin: "*",
  })
)

// * routes
// this means only get the route when we reach the first part as URL
// It means fire the router path when we come to /api/workout path
app.use("/api/workouts", router)

// connect to db
mongoose
  .connect(mongoose_uri)
  .then(() => {
    // listen port
    app.listen(port, () => {
      console.log(`Server runnig on http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
