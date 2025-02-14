

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [error, setError] = useState("");
    
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password.length < 8) {
            // setError("Password must be at least 8 characters long.");
            toast.error("Password must be at least 8 characters long.");

            return;
        }
    
        if (password !== confirmPassword) {
            // setError("Passwords do not match.");
            toast.error("Passwords do not match.");

            return;
        }
    
        setError("");
    
        const formData = {
            firstName,
            lastName,
            email,
            companyName: businessName, // Rename to match the backend
            password,
            updateDate: new Date(), // Add a default value for updateDate if needed
            Status: 1, // Add a default status if it’s required
        };
    
        try {
            const response = await axios.post(`https://dash-connect-backend.vercel.app/api/user/v1/register`, formData);
            console.log("ssss",baseUrl)
            // alert(response.data.message || "Registration successful!");
            toast.success(response.data.message || "Registration successful!");

            localStorage.setItem('user', JSON.stringify(response.data.user));


            navigate('/');
        } catch (error) {
            console.error('Error sending data:', error);
            // setError("Registration failed. Please try again.");
            toast.error("Registration failed. Please try again.");

        }
    };

    return (
        <div className="flex items-center justify-center h-screen overflow-hidden bg-white ">
            <div className="flex flex-col sm:flex-row justify-center items-stretch space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-5xl">
                <div className="flex flex-col sm:flex-row w-full">
                    <img src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg' alt="Illustration" className="w-full sm:w-1/2 h-full object-cover rounded-lg mr-10 mobile:hidden" />
                    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 flex flex-col mobile:40 mobile:h-full">
                        <div className="p-4 flex-1">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Welcome!</h2>
                            <p className="text-gray-600 text-center mb-8">Create your new account</p>
                            {error && <p className="text-red-500 text-center">{error}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
                                    <div className="relative w-full">
                                        <fieldset className="border border-gray-400 rounded p-1">
                                            <legend className="text-gray-500 text-sm px-2">First Name</legend>
                                            <input
                                                required
                                                className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                                                id="firstName"
                                                type="text"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="relative w-full">
                                        <fieldset className="border border-gray-400 rounded p-1">
                                            <legend className="text-gray-500 text-sm px-2">Last Name</legend>
                                            <input
                                                required
                                                className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                                                id="lastName"
                                                type="text"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </fieldset>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
                                    <div className="relative w-full">
                                        <fieldset className="border border-gray-400 rounded p-1">
                                            <legend className="text-gray-500 text-sm px-2">Email</legend>
                                            <input
                                                required
                                                className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </fieldset>
                                    </div>

                                    <div className="relative w-full">
                                        <fieldset className="border border-gray-400 rounded p-1">
                                            <legend className="text-gray-500 text-sm px-2">Business/Company Name</legend>
                                            <input
                                                required
                                                className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                                                id="businessName"
                                                type="text"
                                                value={businessName}
                                                onChange={(e) => setBusinessName(e.target.value)}
                                            />
                                        </fieldset>
                                    </div>
                                </div>

                                <div className="relative w-full mb-4">
                                    <fieldset className="border border-gray-400 rounded p-1">
                                        <legend className="text-gray-500 text-sm px-2">Password</legend>
                                        <input
                                            required
                                            className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </fieldset>
                                </div>

                                <div className="relative w-full mb-4">
                                    <fieldset className="border border-gray-400 rounded p-1">
                                        <legend className="text-gray-500 text-sm px-2">Confirm Password</legend>
                                        <input
                                            required
                                            className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                                            id="confirmPassword"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </fieldset>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mt-6"

                                >
                                    Register
                                </button>

                                <div className="flex items-center my-4">
                                    <hr className="flex-grow border-t border-gray-500" />
                                    <span className="mx-4 text-gray-700">or, Continue with</span>
                                    <hr className="flex-grow border-t border-gray-500" />
                                </div>
 

                                <div className="flex items-center justify-center">
                                    <p className="text-gray-600">Have an account?</p>
                                    <Link to="/" className="text-blue-500 hover:text-blue-700 ml-1">Sign In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
}

export default Register;
