import React, { useState } from 'react';
function TwowayDataBinding()
{
const [inputvalue,setinputvalue] = useState("");
    return (
        <div>
            <h1>Two-way Data Binding Example</h1>
            <input type="text" placeholder="Type something..." value={inputvalue} onChange={(e) => setinputvalue(e.target.value)} />
            <p>You typed:{inputvalue} </p>
        </div>
    )
}
export default TwowayDataBinding;