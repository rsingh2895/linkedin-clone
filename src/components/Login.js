import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState(null);
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const navigate = useNavigate();

    const isValidPhoneNumber = (number) => {
        const phoneRegex = /^[6-9]\d{9}$/;
        return phoneRegex.test(number);
    };

    const sendOtp = () => {
        if (isValidPhoneNumber(phone)) {
            const otpCode = Math.floor(1000 + Math.random() * 9000);
            setGeneratedOtp(otpCode);
            setOtpSent(true);
            setError(null);
            alert(`Your OTP is: ${otpCode}`);
        } else {
            setError('Invalid phone number. Please enter a valid number.');
        }
    };

    const verifyOtp = () => {
        if (otp === generatedOtp.toString()) {
            localStorage.setItem('user', JSON.stringify({ phone, name: "rahul" }));
            navigate('/');
        } else {
            setError('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login with Phone Number</h2>
                {!otpSent ? (
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        />
                        <button
                            onClick={sendOtp}
                            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                        >
                            Send OTP
                        </button>
                    </div>
                ) : (
                    <div>
                        <input
                            type="text"
                            placeholder="Enter the OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        />
                        <button
                            onClick={verifyOtp}
                            className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </div>
        </div>
    );
}

export default Login;
