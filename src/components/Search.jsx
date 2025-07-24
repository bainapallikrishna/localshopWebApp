import { useState } from "react";

function Search(props)
{
    const [newTask,UpdateNewTask]=useState("");
    return (
        <>
        <h2>Search for Todo List</h2>
        <input type='text' value={newTask} onChange={(e)=>UpdateNewTask(e.target.value)}/>
        <button onClick={()=>{props.add(newTask)}}>AddNewTodos</button>
        </>
    )
}
export default Search;