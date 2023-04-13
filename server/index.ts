import express from 'express'
import cors from 'cors'
import path from 'path'
import colors from 'colors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


require('dotenv').config()
mongoose.set("strictQuery", false)
const PORT = 8080
//for TS the URI has to be set to a string.. you cannot simply pass the string straight from .env file
const URI = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PW}@cluster0.lmemsbt.mongodb.net/?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTypology: true }

const app = express()
app.use(cors)
app.use('/', require('./routes/todoRoutes'))

const connectDB = async (URI: string) => {
  console.log('here')
  try {
    const connection = await mongoose.connect(URI)

    console.log(`MongoDB Connected: ${connection.connection.host}`)
  } catch (err) {
    console.log(err)
    throw err
    process.exit(1)
  }
}

connectDB(URI)
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
