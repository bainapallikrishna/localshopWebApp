import axios from "axios";
import { useEffect, useState } from "react";
import { lazy,Suspense } from "react";
const Login =lazy(()=>import('./CounterApp'));

function APICall()
{
const[Show,setShow]=useState(false);

  useEffect(()=>{
postproductData();
  },[]);
  async function getproductData()
  {
    let Data=await axios.get("https://fakestoreapi.com/products");
console.log(Data.data);
  }
    async function postproductData()
  {
    let Data=await axios.post("https://fakestoreapi.com/products",{
      
"id": 0,
"title": "string",
"price": 0.1,
"description": "string",
"category": "string",
"image": "http://example.com"
    });
console.log(Data.data);
  }
return(
  <>
  <h2>API Integration</h2>
  <button onClick={()=>setShow(true)}>Open Counter App</button>
  {
    Show==true&&<Suspense><Login/></Suspense>
  }
  </>
)
}
export default APICall;