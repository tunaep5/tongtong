import React, { Component } from 'react'
import TodoListItem from './TodoListItem'
import './styles/TodoList.scss'

class TodoList extends Component {
  render() {
    return (
      <ul className="TodoList">
        {this.props.todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </ul>
    )
  }
}

export default TodoList