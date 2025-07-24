import { BrowserRouter,  Routes,Route, Link } from "react-router-dom";


import { lazy,Suspense } from "react";

const Home =lazy(()=>import("./Home"));
const About =lazy(()=>import( './About'));
const Contact =lazy(()=>import( './Contact'));
const Login =lazy(()=>import( './Login'));
const User =lazy(()=>import( './User'));
const Order =lazy(()=>import( './Order'));
const Profile =lazy(()=>import( './Profile'));
function MasterPage()
{
return(
 
   <BrowserRouter>
   <Header/>
       <Suspense>
   <Routes>

    <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Login" element={<Login/>}/>
            <Route path="/User/:id" element={<User/>}>
                    <Route path="Order" element={<Order/>}/>
            <Route path="Profile" element={<Profile/>}/>
            </Route>
       
   </Routes>
        </Suspense>
   </BrowserRouter>
   
)

}
function Header()
{
    return(
<ul>
    <li>   <Link to="/" >Home</Link></li>
          <li> <Link to="/About" >About</Link></li>
             <li>  <Link to="/Contact" >Contact</Link></li>
                 <li>  <Link to="/Login" >Login</Link></li>
                  <li>  <Link to="/User" >User</Link></li>
</ul>
 
    )
}

export default MasterPage;