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

router.get('/testing', (req, res) => {
  res.send('success')
})

module.exports = router
// http://localhost:8000/todos/testing