import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../../helpers/axios';

const VerifyOTPForm = () => {
    const [otp, setOtp] = useState('');
    const [logging, setLogging] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLogging(true);
        try {
            const response = await axios.post('/auth/verify-email/', { otp });
            console.log('Response:', response.data);
            if (response.status) {
                // Store user info in local storage
                localStorage.setItem('userInfo', JSON.stringify(response.data.data.user));
                navigate("/account/home");
            } else {
                setError('Invalid response format');
            }
        } catch (err) {
            console.error('Error:', err);
            setError(err.response?.data?.message || 'An error occurred');
        } finally {
            setLogging(false);
        }
    };

    return (
        <div className="login-container">
            <div className="verify-content">
                <div className="verify-form">
                    <h2>Confirm Your Account!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="number"
                                id="otp"
                                placeholder="Enter your OTP"
                                value={otp}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {logging ? <p>Sending...</p> : error && <p>{error}</p>}
                        <button type="submit" className="login-btn">Verify</button>
                    </form>
                    <div className="login-options">
                        <span> didn&#39;t receive an OTP? <a href="#">Resend</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTPForm;