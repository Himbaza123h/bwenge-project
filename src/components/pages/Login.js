import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { useState } from 'react';
import axios from '../../helpers/axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logging, setLogging] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            setLogging(true);
            axios.post("auth/login/", {
                email,
                password,
            })
                .then((res) => {
                    console.log("Login:", res);
                    if (res?.data?.access_token) {
                        // Save user info to localStorage
                        localStorage.setItem("access_token", res.data.access_token);
                        localStorage.setItem("refresh_token", res.data.refresh_token);
                        localStorage.setItem("userEmail", res.data.email);
                        localStorage.setItem("fullName", res.data.full_name);

                        // Redirect to home page
                        navigate("/account/home");

                    } else {
                        setError(res?.data?.detail || "Invalid credentials");
                    }
                    setLogging(false);
                })
                .catch((error) => {
                    setLogging(false);
                    if (error.res) {
                        setError(error.res?.data?.message || "An error occurred. Please try again.");
                    } else if (error.request) {
                        setError("Failed to connect to the server. Please check your internet connection and try again.");
                    } else {
                        setError(error.message || "An unexpected error occurred. Please try again later.");
                    }
                });
            // Handle successful login, such as redirecting to another page
        } catch (error) {
            setError("Invalid email or password. Please try again.");
            console.error("Login error:", error);
        }
    };
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-description">
                    <h2>Ready to join us?</h2>
                    <p>Enter your personal details and start your journey with us.</p>
                </div>
                <div className="login-form">
                    <h2>Welcome Back!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {
                            logging ? (<p>Sending...</p>)
                                : error != '' ? (<p>{error}</p>)
                                    : (null)
                        }
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <div className="login-options">
                        <a href="#">Forgot password?</a>
                        <span>Don&#39;t have an account? <a href="#">Sign up</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;