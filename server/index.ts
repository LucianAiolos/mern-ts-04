import { writeFile } from 'fs'
// import { generate } from './types/shortid'
import express from 'express'

console.log('hello again from ts')

writeFile 

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

const app = express()


const add = (a: number, b?: number) => {
  if (b) {
    return a+b
  } else {
    return a
  }

  return a + b!  // can add ! to make ts stop complaining ( escape hatch )
}


app.get('/', (req: any) =>{
  req.name = 'bob'
  add(1)
})

app.listen(3009, ()=> console.log('listening on port 3009'))