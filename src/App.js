import React, { useState, useRef, useCallback } from 'react'
import Character from './components/Character'
import Todo from './components/todo/Todo'
import About from './components/About'
import TodoInsert from './components/todo/TodoInsert'
import TodoList from './components/todo/TodoList'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: '통통 개발하기', checked: true}, 
    {id: 2, text: '통통 테스트하기', checked: true}, 
    {id: 3, text: '통통 캐릭터 만들기', checked: false}
  ])
  const nextId = useRef(4)

  const onInsert = useCallback(
    text => {
      const todo = {id: nextId.current, text, checked: false}
      setTodos(todos.concat(todo))
      nextId.current += 1
    }, [todos])
  
  return (
    <div className="App">
      <Character />
      <Todo>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} />
      </Todo>
      <About />
    </div>
  )
}

export default App
