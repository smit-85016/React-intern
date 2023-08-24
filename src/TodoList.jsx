// import React, { useState } from 'react';
// import './TodoList.css';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addTodo = () => {
//     if (inputValue.trim() === '') {
//       return;
//     }

//     const newTodo = { id: Date.now(), title: inputValue };
//     setTodos(prevTodos => [...prevTodos, newTodo]);
//     setInputValue('');
//   };

//   const removeTodo = (id) => {
//     setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div className="TodoList">
//       <h1>Todo List</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Enter a new task..."
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul className="TodolistItem">
//         {todos.map(todo => (
//           <li key={todo.id}>
//             <span>{todo.title}</span>
//             <button onClick={() => removeTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import './TodoList.css'; // Import your CSS file

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data.todos));
    }, []);

    const handleToggleComplete = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        fetch(`https://dummyjson.com/todos${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTodos.find(todo => todo.id === id))
        });

        setTodos(updatedTodos);
    };

    return (
        <div className="todo-container">
            <h2>Todo List</h2>
            <div className="todo-input">
            </div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => handleToggleComplete(todo.id)}
                        className={todo.completed ? 'completed' : ''}
                    >
                        {todo.id} {todo.todo} {todo.completed} {todo.userId}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;