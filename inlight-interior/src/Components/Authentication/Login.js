import React from 'react';
import { Link } from 'react-router-dom';
import './All.css';
import SignUp from './SignUp';

const Login = () => {
    return (
        <div className="login-page">
            <h1>Welcome Back</h1>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p>
                <Link to="/forgot-password">Forgot Password?</Link>
            </p>
            <p>
                Don't have an account? 
                <Link to="/signup"> Sign up here</Link>
            </p>
        </div>
    );
};

export default Login;