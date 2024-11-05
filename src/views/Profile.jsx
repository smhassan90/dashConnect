
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';


function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('your_access_token');

    useEffect(() => {
        if (!token) {
            console.error("No authentication token found");
            navigate('/login');

        }   
    }, [navigate, token]);


    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewPassword("");
        setConfirmPassword("");
        setOldPassword("");
    };
    const handleOpenUploadModal = () => setIsUploadModalOpen(true);
    const handleCloseUploadModal = () => setIsUploadModalOpen(false);

    //   image Section
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfileImage(reader.result);
            reader.readAsDataURL(file);
            toast.success("Profile picture updated successfully.");
            handleCloseUploadModal();
        }
    };


    const handleLogout = async () => {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            // Expire the cookie by setting a past expiration date
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        }
    
        // Clear localStorage
        localStorage.clear();
    
        // Clear sessionStorage if you're using it
        sessionStorage.clear();
    
        // Optionally, redirect to the login page or display a logout message
        toast.success("You have been logged out.");
        // Example: Redirect to login
        window.location.href = '/login';
    
    };

    //   password update method 

    const handleUpdatePassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }
        if (newPassword === oldPassword) {
            toast.error("New password must be different from the old password.");
            return;
        }

        try {

            const response = await axios.put(
                'http://localhost:3000/api/user/changePassword',
                { oldPassword, newPassword },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );


            if (response.status === 200) {
                toast.success("Password updated successfully.");
                handleCloseModal();
            } else {
                throw new Error("Failed to change password");
            }
        } catch (error) {
            console.error('Error:', error);



            if (error.response?.data?.message === "Incorrect old password") {
                toast.error("Incorrect old password.");
            } else {
                toast.error(error.response?.data?.message || "Failed to update password.");
            }
        }
    };
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10 mobile:w-72">
            <div className="flex justify-center relative mb-4">
                {/* Profile Image */}
                <img
                    src={profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"}
                    alt="Profile"
                    className="rounded-full w-24 h-24 object-cover"
                />

                <button
                    onClick={handleOpenUploadModal}
                    className="absolute bottom-2 right-2 mr-36 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
                >
                    <FaPlus size={14} /> {/* Adjust icon size here if needed */}
                </button>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Profile</h2>

            {/* Profile Details */}
            <div className="flex items-center mb-2">
                <p className="text-gray-800 font-medium w-24">Name:</p>
                <span className="text-gray-600">Pritam Ghosh</span>
            </div>
            <div className="flex items-center mb-2">
                <p className="text-gray-800 font-medium w-24">Email:</p>
                <span className="text-gray-600">PritamGhosh@gmail.com</span>
            </div>
            <div className="flex items-center mb-2">
                <p className="text-gray-800 font-medium w-24">Company:</p>
                <span className="text-gray-600">Pritam Traders</span>
            </div>

            {/* Change Password Button */}
            <button
                className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full"
                onClick={handleOpenModal}
            >
                Change Password
            </button>

            {/* Logout Button */}
            <button onClick={handleLogout} className="bg-black hover:bg-gray-700 mt-4 text-white font-bold py-2 px-6 rounded w-full">
                Logout
            </button>

            {/* Password Update   */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                        {/* <input
                            type="password"
                            placeholder="Enter your old password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        /> */}
                                                            <fieldset className="border border-gray-400 rounded p-2 w-80 h-14 mobile:w-60"> {/* Adjust width and height */}
                                        <legend className="text-gray-500 text-sm px-2">Enter your old password</legend>

                                        <input
                                            required
                                            type="password"
                                            className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                                            
                                            onChange={(e) => setOldPassword(e.target.value)}

                                            value={oldPassword}
                                                                                    
                                        />
                                    </fieldset>



                        {/* <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        /> */}
                           <fieldset className="border border-gray-400 rounded p-2 w-80 h-14 mobile:w-60"> {/* Adjust width and height */}
                                        <legend className="text-gray-500 text-sm px-2">Enter your New password </legend>

                                        <input
                                            required
                                            type="password"
                                            className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                                            
                                            onChange={(e) => setNewPassword(e.target.value)}

                                            value={newPassword}
                                                                                    
                                        />
                                    </fieldset>

                        <input
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={handleUpdatePassword}
                                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mr-2"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Upload Modal */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-lg font-semibold mb-4">Upload Profile Picture</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        />
                        <button
                            onClick={handleCloseUploadModal}
                            className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}


            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
}

export default Profile;
