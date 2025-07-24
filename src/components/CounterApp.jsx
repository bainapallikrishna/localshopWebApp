function CounterApp(){
    const [counter,setCounter] = useState(0);   
    return (
        <div>
        <h1>Counter App</h1>
        <p>This is a simple counter application.</p>
        <h2>Counter Value {counter}</h2>
        <button onClick={()=> setCounter(counter+1)}>Increment</button>
        <button onClick={()=> setCounter(counter-1)}>Decrement</button>
        <button onClick={()=> setCounter(0)}>Reset</button>
        </div>
    );
}
export default CounterApp;