import React, { useState, useCallback } from 'react'
import './styles/TodoInsert.scss'

const TodoInsert = ({onInsert}) => {
  const [todoText, setTodoText] = useState('')

  const onChange = useCallback(e => {
    setTodoText(e.target.value)
  }, [])

  const onSubmit = useCallback(e => {
    onInsert(todoText)
    console.log(todoText)
    setTodoText('')
    e.preventDefault()    // 새로고침 방지
  }, [onInsert, todoText])
  
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input type="text" 
        placeholder="할 일을 입력하세요" 
        value = {todoText}
        onChange={onChange}
      />
      <button type="submit">+</button>
    </form>
  )
}

export default TodoInsert