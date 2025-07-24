

import { useRef } from "react";
import  '../App.css';
function UseRefHook()
{

    let hiele=useRef([]);
   let arr = new Array(10).fill(null);

 const addstyle = (e) => {
  hiele.current.forEach((ele) => {
    ele?.classList.remove('primary');
  });
  e.target.classList.add('primary');
};

    return (
        <>
        <h2  ref={hiele} className='active'>UseRef Hook Example</h2>
     
        <button onClick={()=>{console.log(hiele.current)
hiele.current.classList.toggle("inactive");

        }}>UseREF</button>
      
        {
            arr.map((_,i)=>{
                return(
                <h1  key={i}
 ref={(el)=>(hiele.current[i]==el)} onClick={(eve)=>{addstyle(eve)}}>This is heading{i}</h1>)
            })
        }
        
     

        </>
    )
}
export default UseRefHook;