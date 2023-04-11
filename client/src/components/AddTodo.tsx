import React, { useState, useEffect } from 'react'
import axios from 'axios'

type Props = {}



const AddTodo = (props: Props) => {
  const [todo, setTodo] = useState('')

  const addTodo = async (e: any, todo: string) => {
    try{
      const res = await axios.post(
        'http://localhost/9000/add_todo', todo
      )
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h3 className=''>What did you want to do today?</h3>
      <input 
        type="text" 
        placeholder='Description'
        className=''
        onChange={(e)=> setTodo(e.target.value)}
      />
      <button 
        className='add-button'
        onClick={(e)=> addTodo(e, todo)}
      >Add</button>
    </div>
  )
}

export default AddTodo