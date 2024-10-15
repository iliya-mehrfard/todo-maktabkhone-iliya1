import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo("");
        }
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <h1>Todo List</h1>
            <div className="input-container">
                <input 
                    type="text" 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)} 
                    placeholder="Add a new task" 
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={index} 
                        todo={todo} 
                        toggleComplete={() => toggleComplete(index)} 
                        deleteTodo={() => deleteTodo(index)} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;
