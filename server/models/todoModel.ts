import { ITodo } from '../types/todo'
import { model, Schema } from 'mongoose'

const todoSchema = new Schema (
  {
    name: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: false,
    }
  },
  { timestamps: true }
)

export default model <ITodo> ('Todo', todoSchema)