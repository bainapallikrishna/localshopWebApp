import React, { useState } from 'react';


function TodoList()
{
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const addTodoList=()=>{
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }
    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };
    return (
    <div className="todo-list"> 
    <h2>Todo List</h2>
    <input type="text" placeholder="Add a new task" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
    <button onClick={()=>addTodoList()}>Add Task</button>
    <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo} <span onClick={() => removeTodo(index)}>X</span></li>
        ))}
    </ul>
    </div>
);
}
export default TodoList;