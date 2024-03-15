import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './SignInPage.css'; // Import the new CSS file

export default function LoginPage() {
    return (
        <div className="login-container">
            <h2>Sign in to Your Account</h2>
            <form action="/home">
                <div className="form-group">
                    <label>Username or Email Address</label>
                    <input type="text" name="username" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <Link to="/forget-password" className="forgot-password">
                        Forgot password?
                    </Link>
                    <input type="password" name="password" required />
                </div>
                <div className="form-group">
                    <button id="sub_btn" type="submit">
                        Login
                    </button>
                </div>
            </form>
            <footer>
                <p>
                    First time? <Link to="/register">Create an account</Link>.
                </p>
                <p>
                    <Link to="/">Back to Homepage</Link>.
                </p>
            </footer>
        </div>
    );
}
