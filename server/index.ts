import { writeFile } from 'fs'
// import { generate } from './types/shortid'
import express from 'express'
import cors from 'cors'




//// use interfaces for objects
interface Params {
  a: number
  b: number
}

///// use types for everyting else
type Params2 = {
  a: number
  b: number
}
const add = (a: number, b?: number) => {
  if (b) {
    return a+b
  } else {
    return a
  }

  return a + b!  // can add ! to make ts stop complaining ( escape hatch )
}


const PORT = 8080

const app = express()
app.use(cors)


app.listen(PORT, ()=> console.log('listening on', PORT))