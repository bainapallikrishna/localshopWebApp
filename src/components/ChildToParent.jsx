//to call child to parent 
//step 1 create a function in parent compenent
//that parent function we need to send as prop in child function

import { useState } from "react";
import Search from "./Search";
function ChildToParent()
{
    const [Todos,setTodos]=useState([
        "Task1","Task2"
    ]);
    const AddNew=(task)=>{
        setTodos([...Todos,task]);
    }
    return (

        <>
        <Search add={AddNew}></Search>
        <h2>Child To Parent Example</h2>
        <ul>
 {
            Todos.map((p)=>
                <li>{p}</li>
            )
        }
        </ul>
       
        </>
    )
}
export default ChildToParent;