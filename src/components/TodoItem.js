import React from "react";
import "./../App.css";

function TodoItem({ todo, markComplete, delTodo }) {
  const { id, title } = todo;
  return (
    <div
      className="deleteBtnWrapper"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <p>
        <input type="checkbox" checked={todo.completed} onChange={markComplete.bind(this, id)} />{" "}
        {title}
        <button onClick={delTodo.bind(this, id)} className="deleteBtn">
          x
        </button>
      </p>
    </div>
  );
}

export default TodoItem;
