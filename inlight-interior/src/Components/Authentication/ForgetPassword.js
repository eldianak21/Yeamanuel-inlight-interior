import React from 'react';
import './All.css';

const ForgotPassword = () => {
    return (
        <div className="forgot-password-page">
            <h1>Reset Your Password</h1>
            <form>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPassword;