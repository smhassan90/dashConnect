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
    const [user, setUser] = useState(null);
    const [oldPassword, setOldPassword] = useState("");
    const [profileImage, setProfileImage] = useState(""); 
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    
    const navigate = useNavigate();
    const token = localStorage.getItem('your_access_token');

    // useEffect(() => {
    //     if (!token) {
    //         console.error("No authentication token found");
    //         navigate('/login');
    //     } else {
    //         fetchProfileImage();
    //     }
    // }, [navigate, token]);

    const fetchProfileImage = async () => {
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setProfileImage(storedImage);
        } else {
            try {
                const response = await axios.get('http://localhost:3000/api/user/getProfilePicture', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.data.status === 'ok') {
                    const imageUrl = response.data.image;
                    setProfileImage(imageUrl);
                    localStorage.setItem('profileImage', imageUrl);
                }
            } catch (error) {
                console.error('Error fetching profile image:', error);
            }
        }
    };

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewPassword("");
        setConfirmPassword("");
        setOldPassword("");
    };

    const handleOpenUploadModal = () => setIsUploadModalOpen(true);
    const handleCloseUploadModal = () => setIsUploadModalOpen(false);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            // formData.append('profileImage', file);
            console.log(file); // Add this line in `handleImageUpload` before appending to FormData

            formData.append('profileImage', file);

    
            try {
                const response = await axios.post('http://localhost:3000/api/user/uploadImage', formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });
    
                if (response.data.message === 'Profile picture uploaded successfully.') {
                    const imagePath = `http://localhost:3000/${response.data.path.replace(/\\/g, "/")}`;
                    localStorage.setItem('profileImage', imagePath);
                    setProfileImage(`${imagePath}?timestamp=${new Date().getTime()}`);
                    toast.success("Profile picture updated successfully.");
                    handleCloseUploadModal();
                } else {
                    toast.error("Failed to upload image.");
                }
    
            } catch (error) {
                console.error('Error:', error);
                toast.error("Error uploading image.");
            }
        }
    };

    // const handleImageUpload = async (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const formData = new FormData();
    //         formData.append('profileImage', file);
    
    //         console.log([...formData.entries()]); // Check the form data content
            
    //         try {
    //             const response = await axios.post('http://localhost:3000/api/user/uploadImage', formData, {
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`,
    //                     'Content-Type': 'multipart/form-data',
    //                 }
    //             });
    //             // Response handling...
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     }
    // };
    

    const handleLogout = async () => {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        }

        localStorage.clear();
        sessionStorage.clear();
        toast.success("You have been logged out.");
        window.location.href = '/login';
    };

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
    
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    console.log(storedUser); // Verify user data here
  }, []);


    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10 mobile:w-72">
            <div className="flex justify-center relative mb-4">
                <img
                    src={profileImage ? profileImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"}
                    alt="Profile"
                    className="rounded-full w-24 h-24 object-cover"
                    onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"}
                />
                <button
                    onClick={handleOpenUploadModal}
                    className="absolute bottom-2 right-2 mr-36 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
                >
                    <FaPlus size={14} />
                </button>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Profile</h2>

            {/* Profile Details */}
            <div className="flex items-center mb-2">
                <p className="text-gray-800 font-medium w-24">Name:</p>
                <span className="text-gray-600">
                {user && user.firstName ? user.firstName : "Guest"}
                </span>
            </div>
            <div className="flex items-center mb-2">
                <p className="text-gray-800 font-medium w-24">Email:</p>
                <span className="text-gray-600">
                {user && user.email ? user.email : "Not Available"}

                </span>
            </div>
            <div className="flex items-center mb-2">
                <p className="text-gray-800 font-medium w-24">Company:</p>
                <span className="text-gray-600">    
                {user && user.company && user.company.companyName ? user.company.companyName : "Not Available"}
                </span>
            </div>

            <button
                className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full"
                onClick={handleOpenModal}
            >
                Change Password
            </button>

            <button onClick={handleLogout} className="bg-black hover:bg-gray-700 mt-4 text-white font-bold py-2 px-6 rounded w-full">
                Logout
            </button>

            {/* Upload Modal */}
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

            {/* Modal for Changing Password */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-lg font-semibold mb-4">Change Password</h3>

                        <fieldset className="border border-gray-400 rounded p-2 w-80 h-14 mobile:w-60">
                            <legend className="text-gray-500 text-sm px-2">Enter your old password</legend>
                            <input
                                required
                                type="password"
                                className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                                onChange={(e) => setOldPassword(e.target.value)}
                                value={oldPassword}
                            />
                        </fieldset>

                        <fieldset className="border border-gray-400 rounded p-2 w-80 h-14 mt-3 mobile:w-60">
                            <legend className="text-gray-500 text-sm px-2">Enter your New password</legend>
                            <input
                                required
                                type="password"
                                className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                                onChange={(e) => setNewPassword(e.target.value)}
                                value={newPassword}
                            />
                        </fieldset>

                        <fieldset className="border border-gray-400 rounded p-2 w-80 h-14 mt-3 mobile:w-60">
                            <legend className="text-gray-500 text-sm px-2">Confirm your New password</legend>
                            <input
                                required
                                type="password"
                                className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                            />
                        </fieldset>

                        <div className="mt-4">
                            <button
                                onClick={handleUpdatePassword}
                                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full"
                            >
                                Update Password
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="mt-2 bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 w-full"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default Profile;