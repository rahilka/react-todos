import React from 'react'
import TodoItem from './TodoItem'

function Todos ({ todos, markAsComplete, deleteTodo }) {
  return todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      markAsComplete={markAsComplete}
      deleteTodo={deleteTodo}
    />
  ))
}

export default Todos
