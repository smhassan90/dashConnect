

import React, { useState } from 'react';
import image1 from "../assests/image1.png";
import image2 from "../assests/image2.png";
import image3 from "../assests/image3.png";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // If passwords match, reset error and proceed with registration
        setError("");
        console.log("Form submitted:", {
            firstName,
            lastName,
            email,
            password,
            businessName,
        });
        
        // You can proceed with your registration logic here, e.g., API call
    };

    return (
        <div className="container mx-auto px-4 py-16 w-full">
            <div className="flex justify-center space-x-4">
                {/* Box 1 */}
                <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden w-full">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Welcome!</h2>
                        <p className="text-gray-600 text-center mb-8">Create your new account</p>
                        {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
                        <form onSubmit={handleSubmit}>
                            {/* First Name and Last Name Inputs in a Flex Row */}
                            <div className="flex space-x-4 mb-4">
                                <div className="relative w-full">
                                    <fieldset className="border border-gray-400 rounded p-1">
                                        <legend className="text-gray-500 text-sm px-2">First Name</legend>
                                        <input
                                            required
                                            className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                                            id="firstName"
                                            type="text"
                                            placeholder=" " // Keep this empty to make the floating effect work
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
                                            placeholder=" " // Keep this empty to make the floating effect work
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </fieldset>
                                </div>
                            </div>

                            <div className="flex space-x-4 mb-4">
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

                            <div className="relative w-full">
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

                            <div className="relative w-full mt-5">
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
                                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-6 rounded w-full mt-5"
                            >
                                Register
                            </button>
                            <div className="flex items-center my-4">
                                <hr className="flex-grow border-t border-gray-500" />
                                <span className="mx-4 text-gray-700">or, Continue with</span>
                                <hr className="flex-grow border-t border-gray-500" />
                            </div>

                                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
    {/* Google Image */}
    <div className="flex items-center justify-center border border-gray-300 rounded-[14px] shadow-lg p-1 max-w-[75px] h-[70px] mx-auto">
        <img
            src={image1}
            alt="Google Logo"
            className="max-w-full h-auto rounded-lg"
        />
    </div>

    {/* Facebook Image */}
    <div className="flex items-center justify-center border border-gray-300 rounded-[14px] shadow-lg p-1 max-w-[75px] h-[70px] mx-auto">
        <img
            src={image3}
            alt="Facebook Logo"
            className="max-w-full h-auto rounded-lg"
        />
    </div>

    {/* Apple iPhone Image */}
    <div className="flex items-center justify-center border border-gray-300 rounded-[14px] shadow-lg p-1 max-w-[75px] h-[70px] mx-auto">
        <img
            src={image2}
            alt="Apple iPhone Logo"
            className="max-w-full h-auto rounded-lg"
        />
    </div>
</div>



                            <div className="flex items-center justify-center">
                                <p className="text-gray-600">Have an account?</p>
                                <a href="#" className="text-blue-500 hover:text-blue-700 ml-1">Sign In</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
