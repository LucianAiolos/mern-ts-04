import React, {useState} from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List'
import {Todo} from './models'
import axios from 'axios'


const App: React.FC = () => {
  const [list, setList] = useState<Todo[]>([])
  const [todo, setTodo] = useState<string>('')

  const addTodo = async (e: React.FormEvent,  ) => {
    e.preventDefault()
    console.log('inaddtodo')
    try{
      const res = await axios.post(
        'http://localhost:8000/todos/add_todo', {description: todo}
      )
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App  " >
      <h1 className=''>Todo List</h1>
      <AddTodo 
        addTodo={addTodo}
        // todo={todo}
        // setTodo={setTodo}
      />
      {/* <List 
        list={list}
      /> */}
    </div>
  );
}

export default App;
