import { Fragment, useState } from "react";
import '../App.css';
import User from './User';

function Stateandprops()
{
let users =[
    // Sample user data
    { empId: 101, empName: "John Doe", role: "Software Engineer", salary: 75000, designation: "Senior Developer" },
    { empId: 102, empName: "Jane Smith", role: "Frontend Developer", salary: 68000, designation: "UI Engineer" },
    { empId: 103, empName: "Robert Brown", role: "Backend Developer", salary: 72000, designation: "Database Specialist" },
    { empId: 104, empName: "Emily Davis", role: "DevOps Engineer", salary: 85000, designation: "Cloud Architect" },
    { empId: 105, empName: "Michael Wilson", role: "QA Engineer", salary: 65000, designation: "Test Analyst" },
    { empId: 106, empName: "Sarah Johnson", role: "Data Scientist", salary: 90000, designation: "Machine Learning Engineer" },
    { empId: 107, empName: "David Martinez", role: "Full Stack Developer", salary: 78000, designation: "Software Architect" },
    { empId: 108, empName: "Sophia Anderson", role: "Business Analyst", salary: 71000, designation: "Product Owner" },
    { empId: 109, empName: "James Lee", role: "Cybersecurity Engineer", salary: 86000, designation: "Security Analyst" },
    { empId: 110, empName: "Linda White", role: "AI Engineer", salary: 95000, designation: "Deep Learning Expert" }


];
 
   
return(
    <>
        {users.map((u) => {
            return (
                <User key={u.empId} empId={u.empId} empName={u.empName} role={u.role} salary={u.salary} designation={u.designation} >
                    <p>Additional Information</p>
                </User>
            );
        })}
    </>
)
}

export default Stateandprops;