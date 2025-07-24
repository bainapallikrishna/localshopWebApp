import React from 'react';
import ReactDOM from 'react-dom/client';
function CounterApp() {
  const [count, setCount] = React.useState(0);
let stock = 10;


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)} disabled={count === stock}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterApp;