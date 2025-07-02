import React, { useState } from 'react';
function PropDrillingExample() {
    const [color, setColor] = useState("blue");
    return (
        <div>
            <h1>Prop Drilling Example</h1>
            <ChildComponent color={color} />
        </div>
    );
}
function ChildComponent({color})
{
return (
    <div>
        <h2>Child Component</h2>
        <GrandchildComponent color={color} />
    </div>
);
}

function GrandchildComponent({color})
{
return (
    <div>
        <h3>Grandchild Component</h3>
        <p>The color is {color}</p>
    </div>
);
}
export default PropDrillingExample;
