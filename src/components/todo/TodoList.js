import React from 'react'
import TodoListItem from './TodoListItem'
import './styles/TodoList.scss'

const TodoList = ({todos}) => {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

export default TodoList