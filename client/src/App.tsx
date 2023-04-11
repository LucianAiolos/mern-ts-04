import React from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List'

function App() {
  return (
    <div className="App  " >
      <h1 className=''>Todo List</h1>
      <AddTodo />
      <List />
    </div>
  );
}

export default App;
