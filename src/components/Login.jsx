import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function Login()
{
    const [Email,setEmail]=useState("");
     const [Password,setPassword]=useState("");
       const [Errors, setErrors] = useState({});

     const ValidateForm = ()=>
     {
 const errors = {};
    if (!Email.trim()) {
      errors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      errors.Email = "Email format is invalid";
    }

    if (!Password.trim()) {
      errors.Password = "Password is required";
    } else if (Password.length < 6) {
      errors.Password = "Password must be at least 6 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
     }
    
     const submitform =()=>
     {
   if (ValidateForm()) {
      console.log("Form submitted:", { Email, Password });
      alert("Login successful!");
      // You can add API call here
    }
     }
return(
    <>
    <h2>Login Page</h2>
    <div>
        <input type="text" value={Email} onChange={()=>setEmail()}/><br></br>
        {Errors.Email &&<span className='text-danger'>{Errors.Email}</span>}<br></br>
        <input type="password" value={Password} onChange={()=>setPassword()}/><br></br>
             {Errors.Password &&<span className='text-danger'>{Errors.Password}</span>}<br></br>
        <button onClick={()=>submitform()}>Submit</button>
    </div>

    </>
)
}
export default Login;