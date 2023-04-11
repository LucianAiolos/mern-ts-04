import React from 'react'

type Props = {}

const AddTodo = (props: Props) => {
  return (
    <div>
      <h3 className=''>What did you want to do today?</h3>
      <input 
        type="text" 
        placeholder='Description'
      />
      <button>Add</button>
    </div>
  )
}

export default AddTodo