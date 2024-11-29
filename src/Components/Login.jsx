
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

Modal.setAppElement('#root'); 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  
  const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { email, password };
    
        try {
          const response = await axios.post("http://localhost:3000/api/user/login", formData);
          const token = response.data.token;
    
          if (token) {
            localStorage.setItem("isLoggedIn", "true"); // Set login status
            localStorage.setItem("your_access_token", token); // Store the token
            toast.success("Login successful!");
            navigate("/admin/dashboard"); // Redirect to dashboard after login
          } else {
            setError("Login failed. No token received.");
            toast.error("Login failed. No token received.");
          }
        } catch (error) {
          const errorMessage = error.response && error.response.data ? error.response.data.message : "Login failed. Please try again.";
          setError(errorMessage);
          toast.error(errorMessage);
        }
      }
    const handleForgotPassword = async (e) => {
    e.preventDefault();
    
    try {

      const response = await axios.post("http://localhost:3000/api/user/forgotPassword", { email: forgotEmail });
      
      if (response.data.success) {
        toast.success(response.data.message); 
       setIsModalOpen(false); 
        setIsResetPasswordOpen(true);
      } else {
        toast.error(response.data.message); 
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error.message);
    }
  };

  
  const handleResetPassword = async (e) => {
    e.preventDefault();
  
    // Ensure passwords match before sending request
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    try {
      // Send token and new password to backend
      const response = await axios.post("http://localhost:3000/api/user/resetPassword", {
        token: resetToken,
        password: newPassword,
      });
  
      if (response.data.success) {
        toast.success(response.data.message); 
        setIsResetPasswordOpen(false); 
      } else {
        toast.error(response.data.message); 
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data
        ? error.response.data.message
        : "Password reset failed. Please try again.";
      toast.error(errorMessage); 
    }
  };  

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-white">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      
                            {/* Modal for Forgot Password */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Find Your Account</h2>
          <p className="text-center text-gray-600 mb-6">Please enter your email address</p>
          <form onSubmit={handleForgotPassword}>
            
             <div className="relative w-full mb-4">
                  <fieldset className="border border-gray-400 rounded p-1">
                    <legend className="text-gray-500 text-sm px-2">Email</legend>
                    <input
                      required
                      className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
        
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                    />
                  </fieldset>
                </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
            >
              Send Reset Link
            </button>
          </form>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 text-blue-500 hover:underline text-center w-full"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Modal for Reset Password */}
      <Modal
        isOpen={isResetPasswordOpen}
        onRequestClose={() => setIsResetPasswordOpen(false)}
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
          <p className="text-center text-gray-600 mb-6">Please enter the token and new password</p>
          <form onSubmit={handleResetPassword}>

                         <div className="relative w-full mb-4">
                  <fieldset className="border border-gray-400 rounded p-1">
                    <legend className="text-gray-500 text-sm px-2">Token</legend>
                    <input
                      required
                      className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
        
                      type="text"
                      value={resetToken}
                      onChange={(e) => setResetToken(e.target.value)}
                    />
                  </fieldset>
                </div>


               <div className="relative w-full mb-4">
                  <fieldset className="border border-gray-400 rounded p-1">
                    <legend className="text-gray-500 text-sm px-2">New Password </legend>
                    <input
                      required
                      className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
        
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </fieldset>
                </div>

<div className="relative w-full mb-4">
                  <fieldset className="border border-gray-400 rounded p-1">
                    <legend className="text-gray-500 text-sm px-2">Confrim password </legend>
                    <input
                      required
                      className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
        
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </fieldset>
                </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
            >
              Reset Password
            </button>
          </form>
          <button
            onClick={() => setIsResetPasswordOpen(false)}
            className="mt-4 text-blue-500 hover:underline text-center w-full"
          >
            Close
          </button>
        </div>
      </Modal>

      <div className="flex flex-col sm:flex-row justify-center items-stretch space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-4xl">
        
        <div className="flex flex-col sm:flex-row w-full">
          
          <img
            src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg'
            alt="Login Illustration"
            className="w-full sm:w-1/2 h-full object-cover rounded-lg mr-10 mobile:hidden"
          />
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 flex flex-col mobile:h-full mobile:mb-20">
            <div className="p-6 flex-1">
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
                  <p 
                    className='mt-2 text-right text-blue-600 cursor-pointer'
                    onClick={() => setIsModalOpen(true)}
                  >
                    Forgot Password?
                  </p>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mt-6"
                >
                  Login
                </button>
              </form>

              <div className="flex items-center mt-8 space-x-2">
                <hr className="border-gray-400 flex-grow" />
                <span className="text-gray-500 font-bold">OR</span>
                <hr className="border-gray-400 flex-grow" />
              </div>
              <p className="text-center text-gray-600 mt-6">
                Not a member? 
                <Link to="/signup" className="text-blue-500 hover:underline">
                     Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;