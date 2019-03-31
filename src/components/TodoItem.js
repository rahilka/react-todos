import React from 'react'
import './../App.css'

function TodoItem ({ todo, markAsComplete, deleteTodo }) {
  const { id, title } = todo
  return (
    <div
      className='deleteBtnWrapper'
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      <p>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => markAsComplete(id)}
        />{' '}
        {title}
        <button onClick={deleteTodo.bind(this, id)} className='deleteBtn'>
          x
        </button>
      </p>
    </div>
  )
}

export default TodoItem
