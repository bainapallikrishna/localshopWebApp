import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../store/auth/actions';

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "User",
        email: ""
    });
    const [errors, setErrors] = useState({});
    
    const dispatch = useDispatch();
    const { registerLoading, registerError, registerSuccess } = useSelector((state) => state.auth);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.username.trim()) {
            newErrors.username = "Username is required";
        } else if (formData.username.length < 3) {
            newErrors.username = "Username must be at least 3 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email format is invalid";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.role.trim()) {
            newErrors.role = "Role is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(registerRequest(formData));
        }
    };

    useEffect(() => {
        if (registerSuccess) {
            console.log('Registration successful');
            // Reset form on success
            setFormData({
                username: "",
                password: "",
                role: "User",
                email: ""
            });
        }
    }, [registerSuccess]);

    return (
        <>
            <div className="container mt-5">
                <h2>Register Component</h2>
                <p>Create a new account</p>
                
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            placeholder="Enter username" 
                            value={formData.username} 
                            onChange={handleInputChange}
                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Enter email" 
                            value={formData.email} 
                            onChange={handleInputChange}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            placeholder="Enter password" 
                            value={formData.password} 
                            onChange={handleInputChange}
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select 
                            id="role"
                            name="role"
                            value={formData.role} 
                            onChange={handleInputChange}
                            className={`form-control ${errors.role ? 'is-invalid' : ''}`}
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                        </select>
                        {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        disabled={registerLoading}
                    >
                        {registerLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>

                {registerError && <div className="alert alert-danger mt-3">{registerError}</div>}
                {registerSuccess && <div className="alert alert-success mt-3">Registration successful!</div>}
                
                <div className="mt-3 text-center">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </>
    );
}

export default Register;
