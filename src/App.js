import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
import { BsListTask, BsFillClipboardCheckFill } from "react-icons/bs"

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (todo, isCompleted) => {
    const updatedTodos = todos.map((t) => {
      if (t === todo) {
        return { ...t, completed: isCompleted };
      }
      return t;
    });

    const sortedTodos = updatedTodos.sort((a, b) => {
      if (a.completed && b.completed) {
        return b.completedAt - a.completedAt;
      }
      if (a.completed) {
        return 1;
      }
      if (b.completed) {
        return -1;
      }
      return b.createdAt - a.createdAt;
    });
    setTodos(sortedTodos);
  };



  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <div className="header">
        <h1><BsListTask size={30} /> To Do List</h1>
        <button onClick={resetTodos}>Reset</button>
      </div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos.filter((todo) => !todo.completed)} completeTodo={completeTodo} />
      <h1> <BsFillClipboardCheckFill size={30} /> Completed Task</h1>
      <TodoList todos={todos.filter((todo) => todo.completed)} completeTodo={completeTodo} />
    </div>
  );
};

export default App;