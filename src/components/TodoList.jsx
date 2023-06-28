import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, completeTodo }) => {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  activeTodos.sort((a, b) => b.createdAt - a.createdAt);
  completedTodos.sort((a, b) => b.completedAt - a.completedAt);
  return (
    <div>
      {activeTodos.map((todo) => (
        <TodoCard
          key={todo.createdAt}
          todo={todo}
          completeTodo={completeTodo}
        />
      ))}
      {completedTodos.map((todo) => (
        <TodoCard
          key={todo.createdAt}
          todo={todo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
