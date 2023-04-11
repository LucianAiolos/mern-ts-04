import { Response, Request } from 'express'
import { ITodo } from '../types/todo'
import Todo from '../models/todoModel'
import todoModel from '../models/todoModel'

const getTodos = 
  async (req: Request, res: Response) : Promise<void> => {
    try {
      const todos: ITodo[] = await Todo.find()
      res.status(200).json({todos})
    } catch (err) {
      throw err
    }
}