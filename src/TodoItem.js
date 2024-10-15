import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={toggleComplete}>{todo.text}</span>
            <button onClick={deleteTodo}>Delete</button>
        </li>
    );
};

export default TodoItem;
