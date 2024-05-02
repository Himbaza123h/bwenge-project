import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { useState } from 'react';
import axios from '../../helpers/axios';


const SignupForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [logging, setLogging] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLogging(true);
        try {
            const response = await axios.post('/auth/register/', {
                email: formData.email,
                telephone: formData.phone,
                first_name: formData.first_name,
                last_name: formData.last_name,
                password: formData.password,
                password2: formData.confirmPassword
            });
            console.log('User signed up successfully:', response.data);
            navigate("/verify");
        } catch (err) {
            console.error('Error:', err); // Log the error object
            setError(err.response?.data?.error || 'An error occurred');
        } finally {
            setLogging(false);
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
                    <h2>Sign Up Now!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="first_name">First Name</label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        placeholder="Enter your first name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input
                                            type="text"
                                            id="last_name"
                                            placeholder="Enter your last name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            placeholder="Enter your phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            placeholder="Confirm password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {logging ? <p>Sending...</p> : error && <p>{error}</p>}
                        <button type="submit" className="login-btn">Sign Up</button>
                    </form>
                    <div className="login-options">
                        <a href="#">Forgot password?</a>
                        <span>Already have an account? <a href="#">Login</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
