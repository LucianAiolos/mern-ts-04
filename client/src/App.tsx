import React, {useState} from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List'
// import { ITodo } from './type'
// import axios from 'axios'

// set type for list

const App: React.FC = () => {
  const [list, setList] = useState<ITodo[]>([])
  const [todo, setTodo] = useState<string>('')
  
  const todoList = (list: []) => {
    setList(list)
  }

  return (
    <div className="App  " >
      <h1 className=''>Todo List</h1>
      <AddTodo 
        todoList={todoList}
      />
      {/* <List 
        list={list}
      /> */}
    </div>
  );
}

export default App;
