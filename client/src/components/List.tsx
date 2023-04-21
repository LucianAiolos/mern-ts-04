import React from 'react'



const List = ({ list: [] }) : JSX.Element  => {

  console.log(list)

  return (
    <div>
      <h1>HERE IS THE LIST OF TODOS</h1>
      <ul>
      </ul>
    </div>
  )
}

export default List