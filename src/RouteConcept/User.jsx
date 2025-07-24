import { Link, Outlet, useSearchParams, useParams } from "react-router-dom";

function User()
{
     let {id}=useParams();
     console.log(id);

 const [searchParams] = useSearchParams();
  const post = searchParams.get('post');
     
return(
   
    <>
    <h2>User Component</h2>
    User Id :={id}
 
    <button><Link to="Order">Order</Link></button>
        <button><Link to="Profile">Profile</Link></button>
        <Outlet></Outlet>
    </>
)

}
export default User;