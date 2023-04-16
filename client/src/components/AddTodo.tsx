import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface Props {
  todoList: (e: React.FormEvent, data: ITodo | any) => void
}

const AddTodo = ({ todoList }: Props) => {
  const [data, setData] = useState<string>('')

  const addTodo = async (e: React.FormEvent,  ) => {
    e.preventDefault()
    console.log('inaddtodo')
    try{
      const res = await axios.post(
        'http://localhost:8000/todos/add_todo', {name: data}
      )
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <form onSubmit={(e)=> addTodo(e)}>
      <h3 className=''>What did you want to do toda?</h3>
      <input 
        type="text" 
        placeholder='Enter a task'
        className=''
        onChange={(e)=> setData(e.target.value)}
      />
      <button className='add-button'>Add</button>
    </form>
  )
}

export default AddTodo