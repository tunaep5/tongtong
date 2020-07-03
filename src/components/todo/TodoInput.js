import React from 'react'
import './styles/TodoInput.scss'

const TodoInput = () => {
  return (
    <form className="TodoInput">
      <input type="text" placeholder="할 일을 입력하세요" />
      <button type="submit">+</button>
    </form>
  )
}

export default TodoInput