

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image1 from "../assests/image1.png";
import image2 from "../assests/image2.png";
import image3 from "../assests/image3.png";
import axios from 'axios'; // Import axios

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Sign In form submitted:", { email, password });  
    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/user/login', formData);
      alert(response.data.message);
      navigate('/'); // Redirects to the Sign In page after successful registration
    } catch (error) {
      console.error('Error sending data:', error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16 w-full">
      {/* Flex Container for Image and Login Form */}
      <div className="flex flex-col sm:flex-row justify-center items-start space-y-4 sm:space-y-0 sm:space-x-4">
        
        {/* Image Section */}
        <img
          src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg'
          alt="Login Illustration"
          className="w-full sm:w-1/2 lg:w-1/3 rounded-lg" // Full width on mobile, half width on small screens, one-third width on large screens
        />
        
        {/* Login Form Section */}
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/3">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Hello Again!</h2>
            <p className="text-gray-600 text-center mb-8">Welcome back, You’ve been missed!</p>

            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="relative w-full mb-4">
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
                <p className='mt-2 text-right text-blue-600'>Forgot Password?</p>
              </div>

              <button
                type="submit"
                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-6 rounded w-full"
              >
                Login
              </button>

              <div className="flex items-center my-4">
                <hr className="flex-grow border-t border-gray-500" />
                <span className="mx-4 text-gray-700">or, Continue with</span>
                <hr className="flex-grow border-t border-gray-500" />
              </div>

              <div className="flex justify-center gap-4 p-4">
                {/* Google Image */}
                <div className="flex items-center justify-center border border-gray-300 rounded-lg shadow-lg p-1 w-16 h-16"> {/* Adjusted for mobile */}
                  <img
                    src={image1}
                    alt="Google Logo"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                {/* Facebook Image */}
                <div className="flex items-center justify-center border border-gray-300 rounded-lg shadow-lg p-1 w-16 h-16"> {/* Adjusted for mobile */}
                  <img
                    src={image3}
                    alt="Facebook Logo"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>

                {/* Apple Image */}
                <div className="flex items-center justify-center border border-gray-300 rounded-lg shadow-lg p-1 w-16 h-16"> {/* Adjusted for mobile */}
                  <img
                    src={image2}
                    alt="Apple Logo"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center mt-4">
                <p className="text-gray-600">Not a member? </p>
                <Link to="/register" className="text-blue-500 hover:text-blue-700 ml-1"> Register Now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
