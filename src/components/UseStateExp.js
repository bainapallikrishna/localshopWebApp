import React,{useState} from "react";

// class useStateExample extends React.Component {
//     state={
//         product:"Mobile",
//         price:20000
//     };
//      UpdatePrice=()=>{
// let newprice = document.getElementById("priceInput").value;
//         if(newprice && !isNaN(newprice)){
//             this.setState({price:newprice});
//         }else{
//             alert("Please enter a valid price");
//         }
//     }
//     render(){
//         return(
//             <React.Fragment>
//                 <h1>UseState Example</h1>
// <h2>Product: {this.state.product}</h2>
// <h2>Price: {this.state.price}</h2>
// <input type="number" id="priceInput"  />
// <button onClick={() => {
//     this.UpdatePrice()
// }}>Update Price</button>
//             </React.Fragment>
//         )
//     }
  
// }

function UseStateExample()
{
const [product,setProduct]=useState({
    productname:"Mobile",
    price:20000
});

// This is a simple React component that demonstrates the use of the useState hook.
// However, this code does not use the useState hook correctly.
return(
    <React.Fragment>
        <h1>UseState Example</h1>
        <h2>Product: {product.productname}</h2>
        <h2>Price: {product.price}</h2>
        <input type="text" value={product.productname} onChange={(e) => setProduct({...product, productname:e.target.value})} />
        <input type="number" value={product.price} onChange={(e) => setProduct({...product, price:e.target.value})} />
    </React.Fragment>
)
}
export default UseStateExample;