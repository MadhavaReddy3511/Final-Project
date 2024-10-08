// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  // Fetch todos from the server
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/todos'); // Change to GET request
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error); // Add error handling
      }
    };
    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/todos', { text: todoText });
      setTodos([...todos, response.data]);
      setTodoText('');
    } catch (error) {
      console.error('Error adding todo:', error); // Add error handling
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error); // Add error handling
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

  // Fetch todos from the server
  useEffect(() => {
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
  fetchTodos();
}, []);
};

export default App;
