import { Response, Request } from 'express'
import { ITodo } from '../types/todo'
import Todo from '../models/todoModel'
import todoModel from '../models/todoModel'

export const getTodos = 
async (req: Request, res: Response) : Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find()
    res.status(200).json({todos})
  } catch (err) {
    throw err
  }
}

export const addTodo = 
// use async hanlder??
async (req: Request, res: Response) : Promise<void> => {
  console.log(req.body)
  try {
    const {name} = req.body
    console.log(name)
      // Pick<ITodo, "name" | "description" | "status">
      //pick function allow you to pick certain features in an existing model.
    const todo: ITodo = new Todo ({
      // name: body.name,
      name: name,
      // status: body.status,
    })

    const newTodo: ITodo = await todo.save()
    const allTodos: ITodo[] = await Todo.find()

    if(newTodo) {
      res.status(201).json({
        message: "Todo added", 
        // todo: newTodo, 
        todos: allTodos,
      })
    } else {
      res.status(400).json({
        message: "Error Occured",
      })
    }
  } catch (err) {
    // console.log(err)
    throw err
  }
}

export const updateTodo = async (
req: Request, res: Response): Promise<void> => {
  try{
    console.log('trying')
  } catch (err) {
    console.log(err)
    throw err
  }
}
