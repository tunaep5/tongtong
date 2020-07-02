import React, { Component } from 'react'
import Character from './components/Character'
import Todo from './components/todo/Todo'
import About from './components/About'
import TodoInput from './components/todo/TodoInput'
import TodoList from './components/todo/TodoList'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:[
        {id: 1, text: '통통 개발하기', checked: true}, 
        {id: 2, text: '통통 테스트하기', checked: true}, 
        {id: 3, text: '통통 캐릭터 만들기', checked: false}
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        <Character />
        <Todo>
          <TodoInput />
          <TodoList todos={this.state.todos} />
        </Todo>
        <About />
      </div>
    )
  }
}

export default App
