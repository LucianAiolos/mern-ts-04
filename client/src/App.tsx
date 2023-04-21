import React, {useState} from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List'
// import { ITodo } from './type'
// import axios from 'axios'

// set type for list

const App: React.FC = () => {
  const [list, setList] = useState<[]>([])
  const [todo, setTodo] = useState<string>('')
  
  const loadList = () => {

  }

  const updateList = (e: React.FormEvent, listData: []): void => {
    e.preventDefault()
    console.log(listData, 'list')
    setList(listData)
  }

  return (
    <div className="App  " >
      <h1 className=''>Todo List</h1>
      <AddTodo 
        updateList={updateList}
      />
      {
        list && 
        <>
          <List 
            list={list}
          />
        </>
      }
    </div>
  );
}

export default App;
