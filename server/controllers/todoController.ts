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
async (req: Request, res: Response) : Promise<void> => {
  try {
    const body = req.body as 
      Pick<ITodo, "name" | "description" | "status">
      //pick function allow you to pick certain features in an existing model.

    const todo: ITodo = new Todo ({
      name: body.name,
      description: body.description,
      status: body.status,
    })

    const newTodo: ITodo = await todo.save()
    const allTodos: ITodo[] = await Todo.find()

    res.status(201).json({
      message: "Todo added", 
      todo: newTodo, 
      Todos: allTodos,
    })
  } catch (err) {
    console.log(err)
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
