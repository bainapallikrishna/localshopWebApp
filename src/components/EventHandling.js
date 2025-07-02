function EventHandlingExample() {
  const handleClick =()=>{

    alert('Button was clicked!');
    console.log('Button was clicked!');
  }

    return (
        <>
            <h1>Event Handling Example</h1>
            <button onClick={()=>{handleClick()}}>Click Me</button>
        </>
    );
}
export default EventHandlingExample;
// This code defines a simple React component that demonstrates event handling.