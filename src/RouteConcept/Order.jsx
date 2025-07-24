

import { useContext } from 'react';
import {mycontext}from './About';

function Order()

{
const _mycontext=useContext(mycontext);
return(
    <>
<h2>{_mycontext}</h2>
    <h2>Order Component</h2>
    
    </>
)

}
export default Order;