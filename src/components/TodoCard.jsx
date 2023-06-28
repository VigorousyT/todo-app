import React from "react";

const TodoCard = ({ todo, completeTodo }) => {
  const handleClick = () => {
    if (todo.completed) {
      completeTodo(todo, false);
    } else {
      completeTodo(todo, true);
    }
  };

  return (
    <div
      className={`todo-card ${todo.completed ? "completed" : ""}`}
      onClick={handleClick}
    >
      {todo.text}
    </div>
  );
};

export default TodoCard;
