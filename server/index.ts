import express from 'express'
import cors from 'cors'
import path from 'path'
import colors from 'colors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


require('dotenv').config()
mongoose.set("strictQuery", false)
const PORT = 8080
const URI = process.env.ATLAS_URI
const options = { useNewUrlParser: true, useUnifiedTypology: true }
const app = express()
app.use(cors)
app.use('/', require('./routes/todoRoutes'))

const connectDB = async (URI: string, options: object) => {
  try {
    const connection = await mongoose.connect(URI, options)
    console.log(`MongoDB Connected: ${connection.connection.host}`.cyan.underline)
  } catch (err) {
    throw err
  }
}



app.listen(PORT, ()=> console.log('listening on', PORT))


// //// use interfaces for objects
// interface Params {
//   a: number
//   b: number
// }

// ///// use types for everyting else
// type Params2 = {
//   a: number
//   b: number
// }
// const add = (a: number, b?: number) => {
//   if (b) {
//     return a+b
//   } else {
//     return a
//   }

//   return a + b!  // can add ! to make ts stop complaining ( escape hatch )
// }
