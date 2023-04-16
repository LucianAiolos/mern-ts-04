import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

interface Props {
  todoList: (e: React.FormEvent, data: ITodo | any) => void
}

const AddTodo = ({ todoList }: Props) => {
  const [data, setData] = useState<string>('')

  const addTodo = async (e: React.FormEvent, formData: string ) : AxiosResponse<ApiDataType> => {
    e.preventDefault()
    try{
      const data : string = formData 
      const res: AxiosResponse<ApiDataType> = await axios.post(
        'http://localhost:8000/todos/add_todo', {data}
        )
      console.log(res.status)
      if (res.status === 201) {
        todoList(res)
      }
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <form onSubmit={(e)=> addTodo(e, data)}>
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