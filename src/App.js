import React, { useState } from 'react'
import Character from './components/Character'
import Todo from './components/todo/Todo'
import About from './components/About'
import TodoInput from './components/todo/TodoInput'
import TodoList from './components/todo/TodoList'
import './App.css'

const App = () => {
  const [todos] = useState(
    [
      {id: 1, text: '통통 개발하기', checked: true}, 
      {id: 2, text: '통통 테스트하기', checked: true}, 
      {id: 3, text: '통통 캐릭터 만들기', checked: false}
    ]
  )
  
  return (
    <div className="App">
      <Character />
      <Todo>
        <TodoInput />
        <TodoList todos={todos} />
      </Todo>
      <About />
    </div>
  )
}

export default App
