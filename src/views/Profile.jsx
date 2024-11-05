

// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Profile() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [oldPassword, setOldPassword] = useState("");

//   // Open Modal
//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   // Close Modal and Reset
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setNewPassword("");
//     setConfirmPassword("");
//     setOldPassword("");
//   };

//   // Handle Password Update
//   const handleUpdatePassword = () => {
//     if (newPassword !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }
//     if (newPassword === oldPassword) {
//       toast.error("New password must be different from the old password.");
//       return;
//     }

//     // Here you would typically call an API to update the password.
//     console.log("Updated password:", newPassword);

//     // Show success message using Toastify
//     toast.success("Password updated successfully.");
//     handleCloseModal();
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10 mobile:w-72">
//       <div className="flex justify-center mb-4">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"
//           alt="Profile Picture"
//           className="rounded-full w-24 h-24"
//         />
//       </div>

//       <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Profile</h2>

//       {/* Profile Details */}
//       <div className="flex items-center mb-2">
//         <p className="text-gray-800 font-medium w-24">Name:</p>
//         <span className="text-gray-600">Pritam Ghosh</span>
//       </div>
//       <div className="flex items-center mb-2">
//         <p className="text-gray-800 font-medium w-24">Email:</p>
//         <span className="text-gray-600">PritamGhosh@gmail.com</span>
//       </div>
//       <div className="flex items-center mb-2">
//         <p className="text-gray-800 font-medium w-24">Company:</p>
//         <span className="text-gray-600">Pritam Traders</span>
//       </div>

//       {/* Change Password Button */}
//       <button
//         className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full"
//         onClick={handleOpenModal}
//       >
//         Change Password
//       </button>

//       {/* Logout Button */}
//       <button className="bg-black hover:bg-gray-700 mt-4 text-white font-bold py-2 px-6 rounded w-full">
//         Logout
//       </button>

//       {/* Password Update Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <h3 className="text-lg font-semibold mb-4">Change Password</h3>
            
//             {/* Old Password Input */}
//             <input
//               type="password"
//               placeholder="Enter your old password"
//               value={oldPassword}
//               onChange={(e) => setOldPassword(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
//             />

//             {/* New Password Input */}
//             <input
//               type="password"
//               placeholder="Enter new password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
//             />

//             {/* Confirm New Password Input */}
//             <input
//               type="password"
//               placeholder="Confirm new password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
//             />

//             {/* Update and Cancel Buttons */}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleUpdatePassword}
//                 className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mr-2"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={handleCloseModal}
//                 className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Toastify Container */}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// }

// export default Profile;

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [profileImage, setProfileImage] = useState(""); // For storing uploaded profile picture
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Open/Close Modals
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewPassword("");
    setConfirmPassword("");
    setOldPassword("");
  };
  const handleOpenUploadModal = () => setIsUploadModalOpen(true);
  const handleCloseUploadModal = () => setIsUploadModalOpen(false);

  // Handle Profile Image Upload
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

  // Handle Password Update
  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (newPassword === oldPassword) {
      toast.error("New password must be different from the old password.");
      return;
    }
    toast.success("Password updated successfully.");
    handleCloseModal();
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
        {/* Plus Icon for Image Upload */}
        <button
          onClick={handleOpenUploadModal}
          className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600"
        >
          +
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
      <button className="bg-black hover:bg-gray-700 mt-4 text-white font-bold py-2 px-6 rounded w-full">
        Logout
      </button>

      {/* Password Update Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Change Password</h3>
            <input
              type="password"
              placeholder="Enter your old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />
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

      {/* Toastify Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Profile;
