import React, { useState } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [newTodo, setNewTodo] = useState('');

      const addTodo = () => {
        if (newTodo.trim() !== '') {
          setTodos([...todos, { id: Date.now(), text: newTodo }]);
          setNewTodo('');
        }
      };

      const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

      return (
        <div className="todo-list">
          <h2>Todo List</h2>
          <div className="todo-input-container">
            <input
              type="text"
              className="todo-input"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new todo"
            />
            <button className="add-button" onClick={addTodo}>Add</button>
          </div>
          {todos.map(todo => (
            <div key={todo.id} className="todo-item">
              <span>{todo.text}</span>
              <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      );
    }

    export default App;
