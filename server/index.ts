import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'

require('dotenv').config()
// mongoose.set("strictQuery", false)
const PORT = 8000
// for TS the URI has to be set to a string.. you cannot simply pass the string straight from .env file
const URI = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PW}@cluster0.lmemsbt.mongodb.net/?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTypology: true }
const connectDB = async (URI: string) => {
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
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
//forgot to call cors function cors()
app.use('/todos', require('./routes/todoRoutes'))

app.listen(PORT, ()=> console.log('listening on port', PORT))

