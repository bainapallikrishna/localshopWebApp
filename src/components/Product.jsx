import { useEffect, useState } from "react";
import ProductCard from './ProductCard';
function Products()
{
const [productdata,updateProduct]=useState([]);
useEffect(()=>{

getproductlist();

},[]);
 async function getproductlist()
{
let res =await fetch("https://fakestoreapi.com/products");
console.log(res);
let prodlist= await res.json();
console.log(prodlist);
updateProduct(prodlist);

}
return (<>

<h2>Prodct List</h2>


{
   
    productdata.map((p)=><ProductCard {...p} key={p.id}></ProductCard>)
}
</>)
}
export default Products;