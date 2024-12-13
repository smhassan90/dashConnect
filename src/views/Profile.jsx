
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
    const [image, setImage] = useState(null);
    const [profileImage, setProfileImage] = useState("");
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('your_access_token');
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const fetchProfileImage = async () => {
        const token = localStorage.getItem('authToken');
        try {
            const response = await axios.get(`${baseUrl}/getProfilePicture`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.status === 'ok') {
                const imageUrl = response.data.image;
                setProfileImage(imageUrl);
                localStorage.setItem('profileImage', imageUrl);  // Store the image URL
            }
        } catch (error) {
            console.error('Error fetching profile image:', error);
        }
    };
    useEffect(() => {
        // Fetch the profile image when the component loads
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setProfileImage(storedImage);  // If there's a cached image URL, use it
        } else {
            fetchProfileImage();  // Call the function to fetch the image if not in localStorage
        }
    }, []);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewPassword("");
        setConfirmPassword("");
        setOldPassword("");
    };

    const handleOpenUploadModal = () => setIsUploadModalOpen(true);
    const handleCloseUploadModal = () => setIsUploadModalOpen(false);

    //     const handleImageUpload = async (event) => {
    //     const formData = new FormData();
    //     formData.append("profileImage", event.target.files[0]);

    //     const token = localStorage.getItem("authToken");

    //     try {
    //         const response = await axios.post("http://localhost:3000/api/user/uploadImage", formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //                 "Authorization": `Bearer ${token}`,
    //             },
    //         });

    //         if (response.data.status === 'ok') {
    //             let imagePath = response.data.path;

    //             // Replace backslashes with forward slashes to make the URL compatible
    //             const imageUrl = `http://localhost:3000/${imagePath.replace(/\\/g, '/')}`;

    //             // Set the profile image URL and save it to localStorage
    //             setProfileImage(imageUrl);
    //             localStorage.setItem('profileImage', imageUrl);

    //             toast.success("Image uploaded successfully!");
    //         } else {
    //             toast.error("Failed to upload image.");
    //             console.error("Error Response:", response.data);
    //         }
    //     } catch (error) {
    //         console.error("Error uploading image:", error);
    //         toast.error("Error uploading image.");
    //         console.error("Error Response:", error.response?.data);
    //     }
    // };

    const handleImageUpload = async (event) => {
        const formData = new FormData();
        formData.append("profileImage", event.target.files[0]);

        const token = localStorage.getItem("authToken");

        try {
            const response = await axios.post(`${baseUrl}/uploadImage`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.data?.path) {
                let imagePath = response.data.path;

                const imageUrl = `http://localhost:3000/${imagePath.replace(/\\/g, '/')}`;
                setProfileImage(imageUrl);
                localStorage.setItem('profileImage', imageUrl);

                toast.success(response.data.message || "Image uploaded successfully!");


            } else {
                toast.error("Failed to upload image. Unexpected response format.");
                console.error("Unexpected response structure:", response.data);
            }

        } catch (error) {
            console.error("Error uploading image:", error);
            toast.error("Error uploading image. Please check the console for details.");
        }
    };



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
                `${baseUrl}/changePassword`,
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
        const fetchUserDetails = () => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser) {
                setUser(storedUser);
            } else {
                setUser(null); // Reset state if no user is found
                console.warn("No user data found in localStorage.");
            }
        };

        fetchUserDetails();
    }, []);


    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10 mobile:w-72">
            <div className="flex justify-center relative mb-4">

                <img
                    src={profileImage || "https://via.placeholder.com/100"}
                    alt="Profile"
                    style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                    onError={(e) => e.target.src = "https://via.placeholder.com/100"} // Fallback if image fails to load
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
                <span className="text-gray-600">{user && user.firstName ? user.firstName : "Guest"}</span>
            </div>
            <div className="flex items-center mb-2">
                <p className="text-gray-800 font-medium w-24">Email:</p>
                <span className="text-gray-600">{user && user.email ? user.email : "Not Available"}</span>
            </div>
            <div className="flex items-center mb-2">
                <p className="text-gray-800 font-medium w-24">Company:</p>
                <span className="text-gray-600">{user && user.company && user.company.companyName ? user.company.companyName : "Not Available"}</span>
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
                        <input
                            type="password"
                            placeholder="Old Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                        />
                        <button
                            onClick={handleUpdatePassword}
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full mb-4"
                        >
                            Update Password
                        </button>
                        <button
                            onClick={handleCloseModal}
                            className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 w-full"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}
export default Profile;
