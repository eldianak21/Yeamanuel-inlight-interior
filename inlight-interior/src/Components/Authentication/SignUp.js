import React from 'react';
import { Link } from 'react-router-dom';
import './All.css';

const SignUp = () => {
    return (
        <div className="signup-page">
            <h1>Create Your Account</h1>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? 
                <Link to="/login"> Login here</Link>
            </p>
        </div>
    );
};

export default SignUp;