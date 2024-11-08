


// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import image1 from "../assests/image1.png"; // Google logo
// // import image2 from "../assests/image2.png"; // Apple logo
// // import image3 from "../assests/image3.png"; // Facebook logo
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import axios from 'axios';

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const navigate = useNavigate();

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     const formData = { email, password };

// //     try {
// //       const response = await axios.post('http://localhost:3000/api/user/login', formData);
// //       const token = response.data.token;

// //       if (token) {
// //         localStorage.setItem('your_access_token', token);
// //         toast.success("Login successful!");
// //         navigate('/admin/dashboard');
// //       } else {
// //         setError("Login failed. No token received.");
// //         toast.error("Login failed. No token received.");
// //       }
// //     } catch (error) {
// //       const errorMessage = error.response && error.response.data ? 
// //                             error.response.data.message : 
// //                             "Login failed. Please try again.";
// //       setError(errorMessage);
// //       toast.error(errorMessage);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen overflow-hidden bg-white">
// //       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
// //       <div className="flex flex-col sm:flex-row justify-center items-stretch space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-4xl">
        
// //         {/* Combined Div for Image and Form */}
// //         <div className="flex flex-col sm:flex-row w-full">
          
// //           {/* Image Section */}
// //           <img
// //             src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg'
// //             alt="Login Illustration"
// //             className="w-full sm:w-1/2 h-full object-cover rounded-lg mr-10 mobile:hidden"
// //           />
          
// //           {/* Login Form Section */}
// //           <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 flex flex-col mobile:h-full mobile:mb-20">
// //             <div className="p-6 flex-1">
// //               <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Hello Again!</h2>
// //               <p className="text-gray-600 text-center mb-8">Welcome back, You’ve been missed!</p>

// //               {error && <p className="text-red-500 text-center">{error}</p>}
// //               <form onSubmit={handleSubmit}>
// //                 <div className="relative w-full mb-4">
// //                   <fieldset className="border border-gray-400 rounded p-1">
// //                     <legend className="text-gray-500 text-sm px-2">Email</legend>
// //                     <input
// //                       required
// //                       className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
// //                       id="email"
// //                       type="email"
// //                       value={email}
// //                       onChange={(e) => setEmail(e.target.value)}
// //                     />
// //                   </fieldset>
// //                 </div>

// //                 <div className="relative w-full mb-4">
// //                   <fieldset className="border border-gray-400 rounded p-1">
// //                     <legend className="text-gray-500 text-sm px-2">Password</legend>
// //                     <input
// //                       required
// //                       className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
// //                       id="password"
// //                       type="password"
// //                       value={password}
// //                       onChange={(e) => setPassword(e.target.value)}
// //                     />
// //                   </fieldset>
// //                   <p className='mt-2 text-right text-blue-600'>Forgot Password?</p>
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-6 rounded w-full"
// //                 >
// //                   Login
// //                 </button>

// //                 <div className="flex items-center my-4">
// //                   <hr className="flex-grow border-t border-gray-500" />
// //                   <span className="mx-4 text-gray-700">or, Continue with</span>
// //                   <hr className="flex-grow border-t border-gray-500" />
// //                 </div>

// //                 <div className="flex items-center justify-center mt-4">
// //                   <p className="text-gray-600">Not a member? </p>
// //                   <Link to="/signup" className="text-blue-500 hover:text-blue-700 ml-1"> Register Now</Link>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
      

// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';
// import image1 from "../assests/image1.png"; // Google logo
// import image2 from "../assests/image2.png"; // Apple logo
// import image3 from "../assests/image3.png"; // Facebook logo
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// Modal.setAppElement('#root'); // This is necessary for accessibility with react-modal

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = { email, password };

//     try {
//       const response = await axios.post('http://localhost:3000/api/user/login', formData);
//       const token = response.data.token;

//       if (token) {
//         localStorage.setItem('your_access_token', token);
//         toast.success("Login successful!");
//         navigate('/admin/dashboard');
//       } else {
//         setError("Login failed. No token received.");
//         toast.error("Login failed. No token received.");
//       }
//     } catch (error) {
//       const errorMessage = error.response && error.response.data ? 
//                             error.response.data.message : 
//                             "Login failed. Please try again.";
//       setError(errorMessage);
//       toast.error(errorMessage);
//     }
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//     // Logic to handle forgot password (e.g., send email to server)
//     toast.info(`Password reset link sent to ${forgotEmail}`);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen overflow-hidden bg-white">
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      
//       {/* Modal for Forgot Password */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         className="flex items-center justify-center"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//       >
//         <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
//           <h2 className="text-2xl font-bold text-center mb-4">Find Your Account</h2>
//           <p className="text-center text-gray-600 mb-6">Please enter your email address</p>
//           <form onSubmit={handleForgotPassword}>
//             <input
//               type="email"
//               value={forgotEmail}
//               onChange={(e) => setForgotEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
//               placeholder="Enter your email"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
//             >
//               Send Reset Link
//             </button>
//           </form>
//           <button
//             onClick={() => setIsModalOpen(false)}
//             className="mt-4 text-blue-500 hover:underline text-center w-full"
//           >
//             Close
//           </button>
//         </div>
//       </Modal>

//       <div className="flex flex-col sm:flex-row justify-center items-stretch space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-4xl">
        
//         {/* Combined Div for Image and Form */}
//         <div className="flex flex-col sm:flex-row w-full">
          
//           {/* Image Section */}
//           <img
//             src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg'
//             alt="Login Illustration"
//             className="w-full sm:w-1/2 h-full object-cover rounded-lg mr-10 mobile:hidden"
//           />
          
//           {/* Login Form Section */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 flex flex-col mobile:h-full mobile:mb-20">
//             <div className="p-6 flex-1">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Hello Again!</h2>
//               <p className="text-gray-600 text-center mb-8">Welcome back, You’ve been missed!</p>

//               {error && <p className="text-red-500 text-center">{error}</p>}
//               <form onSubmit={handleSubmit}>
//                 <div className="relative w-full mb-4">
//                   <fieldset className="border border-gray-400 rounded p-1">
//                     <legend className="text-gray-500 text-sm px-2">Email</legend>
//                     <input
//                       required
//                       className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </fieldset>
//                 </div>

//                 <div className="relative w-full mb-4">
//                   <fieldset className="border border-gray-400 rounded p-1">
//                     <legend className="text-gray-500 text-sm px-2">Password</legend>
//                     <input
//                       required
//                       className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
//                       id="password"
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </fieldset>
//                   <p 
//                     className='mt-2 text-right text-blue-600 cursor-pointer'
//                     onClick={() => setIsModalOpen(true)}
//                   >
//                     Forgot Password?
//                   </p>
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-6 rounded w-full"
//                 >
//                   Login
//                 </button>

//                 <div className="flex items-center my-4">
//                   <hr className="flex-grow border-t border-gray-500" />
//                   <span className="mx-4 text-gray-700">or, Continue with</span>
//                   <hr className="flex-grow border-t border-gray-500" />
//                 </div>

//                 <div className="flex items-center justify-center mt-4">
//                   <p className="text-gray-600">Not a member? </p>
//                   <Link to="/signup" className="text-blue-500 hover:text-blue-700 ml-1"> Register Now</Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import image1 from "../assests/image1.png"; // Google logo
import image2 from "../assests/image2.png"; // Apple logo
import image3 from "../assests/image3.png"; // Facebook logo
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

Modal.setAppElement('#root'); // This is necessary for accessibility with react-modal

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
      const response = await axios.post('http://localhost:3000/api/user/login', formData);
      const token = response.data.token;

      if (token) {
        localStorage.setItem('your_access_token', token);
        toast.success("Login successful!");
        navigate('/admin/dashboard');
      } else {
        setError("Login failed. No token received.");
        toast.error("Login failed. No token received.");
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data ? 
                            error.response.data.message : 
                            "Login failed. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  // const handleForgotPassword = (e) => {
  //   e.preventDefault();
  //   toast.info(`Password reset link sent to ${forgotEmail}`);
  //   setIsModalOpen(false); // Close forgot password modal
  //   setIsResetPasswordOpen(true); // Open reset password modal to enter token and new password
  // };
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    
    try {
      // Send the email to the backend
      const response = await axios.post("http://localhost:3000/api/user/forgotPassword", { email: forgotEmail });
      
      if (response.data.success) {
        toast.success(response.data.message); // Display success message
        setIsModalOpen(false); // Close forgot password modal
        setIsResetPasswordOpen(true); // Optionally, open reset password modal
      } else {
        toast.error(response.data.message); // Display error message
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error.message); // Log error for debugging
    }
  };

  // const handleResetPassword = async (e) => {
  //   e.preventDefault();

  //   if (newPassword !== confirmPassword) {
  //     toast.error("Passwords do not match!");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post('http://localhost:3000/api/user/reset-password', {
  //       token: resetToken,
  //       newPassword,
  //     });

  //     toast.success("Password reset successful!");
  //     setIsResetPasswordOpen(false); // Close modal after successful reset
  //   } catch (error) {
  //     const errorMessage = error.response && error.response.data
  //       ? error.response.data.message
  //       : "Password reset failed. Please try again.";
  //     toast.error(errorMessage);
  //   }
  // };
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
        toast.success(response.data.message); // Show success message from backend
        setIsResetPasswordOpen(false); // Close reset password modal on success
      } else {
        toast.error(response.data.message); // Show error message if token is expired
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data
        ? error.response.data.message
        : "Password reset failed. Please try again.";
      toast.error(errorMessage); // Show fallback error message
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
            {/* <input
              type="email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            /> */}
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
            {/* <input
              type="text"
              value={resetToken}
              onChange={(e) => setResetToken(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
              placeholder="Enter your token"
            /> */}
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



            {/* <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
              placeholder="Enter new password"
            /> */}
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





            {/* <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
              placeholder="Confirm new password"
            /> */}

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
        
        {/* Combined Div for Image and Form */}
        <div className="flex flex-col sm:flex-row w-full">
          
          {/* Image Section */}
          <img
            src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg'
            alt="Login Illustration"
            className="w-full sm:w-1/2 h-full object-cover rounded-lg mr-10 mobile:hidden"
          />
          
          {/* Login Form Section */}
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

              <div className="flex justify-between mt-8">
                <img src={image1} alt="Google" className="w-10 h-10" />
                <img src={image2} alt="Apple" className="w-10 h-10" />
                <img src={image3} alt="Facebook" className="w-10 h-10" />
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
