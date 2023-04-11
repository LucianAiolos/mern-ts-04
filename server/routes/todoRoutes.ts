import { Router } from 'express'
import { 
  getTodos,
  addTodo,
  // updateTodo,
  // deleteTodo,
} from '../controllers/todoController'

const router: Router = Router()

router.get('/get_todos', getTodos)
router.post('/add_todo', addTodo)

module.exports = router
