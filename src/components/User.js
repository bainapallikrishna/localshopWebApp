import React from 'react';
import '../App.css';

function User(Props)
{
console.log(Props);
    return(
        <>
        <div className='userbox'>
            <h2>User Details</h2>
            <p>Employee ID: {Props.empId}</p>
            <p>Employee Name: {Props.empName}</p>
            <p>Role: {Props.role}</p>
            <p>Salary: {Props.salary}</p>
            <p>Designation: {Props.designation}</p>
        </div>
        </>
    )
}
export default User;