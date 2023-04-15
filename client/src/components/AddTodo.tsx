import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface Props {
  // todo: string
  // setTodo: <React.SetStateActions<string>>
  addTodo: (e: React.FormEvent) => void
}

const AddTodo = ({ addTodo }: Props) => {
  const [todo, setTodo] = useState<string>('')

  return (
    <form onSubmit={(e)=> addTodo(e)}>
      <h3 className=''>What did you want to do today?</h3>
      <input 
        type="text" 
        placeholder='Enter a task'
        className=''
        onChange={(e)=> setTodo(e.target.value)}
      />
      <button className='add-button'>Add</button>
    </form>
  )
}

export default AddTodo