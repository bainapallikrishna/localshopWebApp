// memorize the data
//that means when we call same input it should be memrize and give the same output

import { useMemo, useState } from "react";

function UseMemoHook()
{
    const [counter,setcounter]=useState(0);
let num1=10;
let num2=20;
let sum =useMemo(()=>{
    return num1+num2
},[num1,num2]);

//fetching data and filter the data display filterdata in UI

return (
    <>
    <h2>UseMemo Hook Example</h2>
    <h3>{counter}</h3>
    <button onClick={()=>setcounter(counter+1)}>Update Counter</button>
    <h3>sum : {sum}</h3>
    </>
)


}
export default UseMemoHook;