import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../store/auth/actions';

function Login()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated, user } = useSelector((state) => state.auth);

    function handleLogin()
    {
        dispatch(loginRequest({ username, password }));
    }

    useEffect(() => {
        if (isAuthenticated) {
            console.log('Logged in user:', user);
        }
    }, [isAuthenticated, user]);

    return(
    <>
   <div
  className="container-fluid d-flex justify-content-center align-items-center"
  style={{  background: 'linear-gradient(to right, #ff6b6b, #f7d794, #1dd1a1, #54a0ff)',
    minHeight: '100vh',

 }} // Dark blue background
>
  <div className="d-flex mt-5">
    <img
      src="/Images/logo.png"
      alt="Login Illustration"
      style={{ width: '400px', marginRight: '50px' }}
    />
    <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%',backgroundColor: '#0b1c3f'  }}>
      <h4 className="text-center mb-3 text-white">🔐 Login</h4>
      <p className="text-muted text-center mb-4 text-white">Access your account securely</p>

      <div className="mb-3 input-group">
        <span className="input-group-text bg-light">
          <i className="bi bi-person"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3 input-group">
        <span className="input-group-text bg-light">
          <i className="bi bi-lock"></i>
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary w-100"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      {error && <div className="text-danger mt-3 text-center">{error}</div>}
      {isAuthenticated && (
        <div className="text-success mt-3 text-center ">✅ Login successful</div>
      )}
      
      <div className="mt-3 text-center">
        <p className="text-white">Don't have an account? <Link to="/register" className="text-primary">Register here</Link></p>
      </div>
    
    </div>
  </div>
</div>
    </>
)

}

export default Login;