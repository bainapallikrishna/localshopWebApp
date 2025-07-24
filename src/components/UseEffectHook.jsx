import { useEffect, useState } from "react"

function UseEffectHook()
{
    const [timer,setTimer]=useState(0);
    const [counter,setCounter]=useState(0);
    useEffect(()=>{
console.log("Inside useeffect")
    },[counter]);
return (
    <>
    <h2>Use Effect </h2>
    <h2>{timer}</h2>
  
    <button onClick={()=>setTimer(timer+1)}>Updatetime</button>
    <button onClick={()=>setCounter(counter+1)}>Counter ++</button>
     <button onClick={()=>setCounter(counter-1)}>Counter --</button>
    </>
)

}
export default UseEffectHook;