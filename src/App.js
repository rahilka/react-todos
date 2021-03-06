import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import axios from 'axios'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }

    this.markAsComplete = this.markAsComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  componentDidMount () {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  markAsComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    )
  }

  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <header>
            <h1>TodoList</h1>
          </header>
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markAsComplete={this.markAsComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    )
  }
}

export default App
