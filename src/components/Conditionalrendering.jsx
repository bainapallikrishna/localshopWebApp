function ConditionalRender()
{
let status=false;
let admin=false;

    return ( 
    <>
<h2>Conditional Rendering in React</h2>
{status  ?<FunctionSuccess>
  
</FunctionSuccess>:<FailSuccess></FailSuccess>}
{admin && <Admin></Admin>}
        </>
        
    )
    

       
    
}
function FunctionSuccess()
{
    return (<><h2>Success Function</h2></>)
}
function FailSuccess()
{
    return (<><h2>Fail Function</h2></>)
}
function Admin()
{
    return (<><h2>Iam a admin</h2></>)
}
export default ConditionalRender;