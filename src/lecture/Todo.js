import React from 'react'
import TodoList from './TodoList'

const Todo = (props) => {
  return (
    <div>
      <h1>오늘 할 일</h1>
      <div>{props.todoList.map((item)=><TodoList item={item}/>)}</div>
    </div>
  )
}

export default Todo;
