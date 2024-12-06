import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Bar from "../Reuseable/Bar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoClose } from "react-icons/io5";
import CustomButton from "../Components/Button";
function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(""); // Define the error state
  const [editData, setEditData] = useState({
    employeeId: "", // Make sure this ID exists and is correct
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  });
  const handleDelete = (index) => {
    setDeleteIndex(index);
    setShowDeleteConfirm(true);
  };
  const confirmDelete = () => {
    const updatedData = data.filter((_, index) => index !== deleteIndex);
    setData(updatedData);
    setShowDeleteConfirm(false);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(data[index]);
    setIsEditing(true);
  };
//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };
const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };
  
//   const updateEmployee = () => {
//     const updatedData = data.map((item, index) =>
//       index === editIndex ? editData : item
//     );
//     setData(updatedData);
//     setIsEditing(false);
//   };

// const updateEmployee = async () => {
//   try {
//     const token = localStorage.getItem("your_access_token"); // Get token from localStorage or context

//     // Ensure that all required fields are present in editData
//     if (!editData.firstName || !editData.lastName || !editData.email || !editData.role) {
//       throw new Error("All fields are required.");
//     }

//     // Make API request to update the employee
//     const response = await axios.put(
//       "http://localhost:3000/api/user/updateEmployee",
//       editData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // Handle successful response
//     if (response.data && response.data.employee) {
//       const updatedEmployee = response.data.employee;
//       const updatedData = data.map((item, index) =>
//         index === editIndex ? updatedEmployee : item
//       );
//       setData(updatedData); // Update the data state with the updated employee details
//       toast.success("Employee updated successfully!");
//       setIsEditing(false); // Close the modal
//     }
//   } catch (error) {
//     console.error("Error updating employee:", error);
//     toast.error("Error updating employee. Please try again.");
//   }
// };
const updateEmployee = async () => {
    try {
      const token = localStorage.getItem("your_access_token");
  
      // Ensure employee ID is available before making the request
      if (!editData.employeeId) {
        toast.error("Employee ID is required");
        return;
      }
  
      const response = await axios.put(
        `http://localhost:3000/api/user/updateEmployee/${editData.employeeId}`,
        editData,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );
  
      console.log("Employee updated successfully:", response.data);
      toast.success("Employee updated successfully!");
    } catch (error) {
      console.error("Error updating employee:", error.response ? error.response.data : error.message);
      toast.error("Error updating employee. Please try again.");
    }
  };
    

const addNewEntry = async () => {
    try {
      const token = localStorage.getItem("your_access_token");
      if (
        !newEntry.firstName ||
        !newEntry.lastName ||
        !newEntry.email ||
        !newEntry.role ||
        !newEntry.password
      ) {
        throw new Error("All fields are required.");
      }
  
      const response = await axios.post(
        "http://localhost:3000/api/user/addEmployee",
        newEntry,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const newEmployee = response.data; // Assuming API returns the new employee object
      toast.success("Employee added successfully!");
  
      // Update state with the new employee
      setData((prevData) => Array.isArray(prevData) ? [...prevData, data] : [data]);
  
      // Reset the form and close the modal
      setShowAddForm(false);
      setNewEntry({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        password: "",
      });
    } catch (error) {
      console.error(
        "Error adding employee:",
        error.response ? error.response.data : error.message
      );
      setError(
        error.response ? error.response.data.message : "Something went wrong!"
      );
    }
  };
  
  
useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("your_access_token");
        if (!token) {
          throw new Error("No token found. Please log in.");
        }
        const response = await axios.get(
          "http://localhost:3000/api/user/getEmployees",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched Data: ", response.data);
        setData(response.data); // Ensure data is correctly set
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  


const handleAdd = () => {
    setData((prevData) => (Array.isArray(prevData) ? [...prevData, newEntry] : [newEntry]));
    console.log("Updated Data after Add: ", data);
  };
  


  return (
    <div className="">
      <Bar
        title="Employees"
        onAddStory={() => setShowAddForm(true)}
        buttonText="+ Add Employee"
      />
      <div className=" ml-4 mt-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-3  md:mb-4 max-sm   mobile:ml-11  ">
          Employees List
        </h1>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by Story Board Name"
          className="text-sm text-gray-700 mb-4 border border-gray-300 rounded p-3 w-full max-sm mobile:w-3/4 mobile:ml-11"
        />
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 max-sm mobile:w-3/4 mobile:ml-11">
            {" "}
            {/* Set min width to make it responsive */}
            <thead>
              <tr className="text-left font-bold">
                <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
                  Full Name{" "}
                </th>
                <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
                  Last Name{" "}
                </th>
                <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
                  Email{" "}
                </th>
                <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
                  Role{" "}
                </th>
                <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
                  Password
                </th>
                <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
                  Actions
                </th>

                <th></th>
              </tr>
            </thead>
            
            <tbody>
  {data && data.length > 0 ? (
    data
      .filter(
        (item) =>
          item &&
          item.firstName &&
          typeof item.firstName === "string" &&
          item.firstName
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      )
      .map((item, index) => (
        <tr key={index} className="hover:bg-gray-100">
          <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
            {item.firstName}
          </td>
          <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
            {item.lastName}
          </td>
          <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
            {item.email}
          </td>
          <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
            {item.role}
          </td>
          <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
            {item.password}
          </td>
          <td className="px-2 py-3 text-xs sm:text-sm md:text-base">
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
              >
                <FaTrash />
              </button>
              <button
                onClick={() => handleEdit(index)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
              >
                <FaEdit />
              </button>
            </div>
          </td>
        </tr>
      ))
  ) : (
    <tr>
      <td colSpan={6} className="text-center py-4">
        No employees found
      </td>
    </tr>
  )}
</tbody>
          </table>
        </div>
        {showDeleteConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg ml-24 shadow-lg max-w-md w-full mobile:w-72 mobile:ml-14">
              <h2 className="text-2xl font-bold mb-4">
                Are you sure you want to delete?
              </h2>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}

        {showAddForm && (
          <div className="w-[1500px] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mobile:w-72 mobile:ml-14">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold mobile:text-center">
                  Add Employees
                </h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <IoClose size={24} />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addNewEntry();
                }}
              >
                <div className="">
                  <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                    <legend className="text-gray-500 text-sm px-2">
                      FULL NAME
                    </legend>
                    <input
                      required
                      className=" bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                      id="firstName"
                      name="firstName"
                      value={newEntry.firstName}
                      onChange={(e) =>
                        setNewEntry({ ...newEntry, firstName: e.target.value })
                      }
                    />
                  </fieldset>
                  <fieldset className="mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                    <legend className="text-gray-500 text-sm px-2">
                      Last Name
                    </legend>
                    <input
                      required
                      className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                      id="lastName"
                      name="lastName"
                      value={newEntry.lastName}
                      onChange={(e) =>
                        setNewEntry({ ...newEntry, lastName: e.target.value })
                      }
                    />
                  </fieldset>
                  <fieldset className=" mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                    <legend className="text-gray-500 text-sm px-2">
                      Email
                    </legend>
                    <input
                      type="email"
                      required
                      className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                      id="email"
                      name="email"
                      value={newEntry.email}
                      onChange={(e) =>
                        setNewEntry({ ...newEntry, email: e.target.value })
                      }
                    />
                  </fieldset>
                  <fieldset className=" mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                    <legend className="text-gray-500 text-sm px-2">
                      Password
                    </legend>
                    <input
                      type="password"
                      required
                      className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                      id="password"
                      name="password"
                      value={newEntry.password}
                      onChange={(e) =>
                        setNewEntry({ ...newEntry, password: e.target.value })
                      }
                    />
                  </fieldset>
                </div>
                <fieldset className="mt-3  border border-gray-400 rounded p-2 w-96 h-16 mobile:w-60">
                  <legend className="text-gray-500 text-sm px-2">Role</legend>
                  <select
                    id="role"
                    name="role"
                    value={newEntry.role}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, role: e.target.value })
                    }
                    required
                    className="bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none border-none"
                  >
                    <option value="">Select an option</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Employee">Employee</option>
                  </select>
                </fieldset>
                <div className="flex justify-center space-x-4 mt-10">
                  <CustomButton
                    type="submit"
                    onClick={handleAdd}
                    className="hover:text-black hover:bg-white border-2 border-black"
                    text="Add"
                  />
                  <CustomButton
                    text="Cancel"
                    onClick={() => setShowAddForm(false)}
                    className="hover:text-black hover:bg-white border-2 border-black"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
        {isEditing && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full  mobile:w-72 mobile:ml-14">
              <h2 className="text-2xl font-bold mb-4 mobile:text-center">
                Edit Employees
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateEmployee();
                }}
              >
                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                  {" "}
                  <legend className="text-gray-500 text-sm px-2">
                    FULL NAME
                  </legend>
                  <input
                    className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                    id="firstName"
                    name="firstName"
                    value={editData.firstName}
                    onChange={handleEditChange}
                  />
                </fieldset>
                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60 ">
                  {" "}
                  <legend className="text-gray-500 text-sm px-2">
                    {" "}
                    Last Name{" "}
                  </legend>
                  <input
                    required
                    className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                    id="lastName"
                    name="lastName"
                    value={editData.lastName}
                    onChange={handleEditChange}
                  />
                </fieldset>
                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                  <legend className="text-gray-500 text-sm px-2">
                    {" "}
                    Email{" "}
                  </legend>
                  <input
                    type="Email"
                    required
                    className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                    id="email"
                    name="email"
                    value={editData.email}
                    onChange={handleEditChange}
                  />
                </fieldset>
                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                  {" "}
                  <legend className="text-gray-500 text-sm px-2">
                    {" "}
                    password{" "}
                  </legend>
                  <input
                    type="password"
                    required
                    className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                    id="password"
                    name="password"
                    value={editData.password}
                    onChange={handleEditChange}
                  />
                </fieldset>
                <fieldset className="border border-gray-400 rounded p-2 w-96 h-16 mobile:w-60 ">
                  {" "}
                  <legend className="text-gray-500 text-sm px-2">Role</legend>
                  <select
                    id="role"
                    name="role"
                    value={editData.role}
                    onChange={handleEditChange}
                    className="bg-transparent rounded w-full  text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                  >
                    <option value="">Select an option</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Employee">Employee</option>
                  </select>
                </fieldset>
                <div className="flex justify-end space-x-2 mt-10 mobile:w-60">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                 onClick={updateEmployee}>Save

                  
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

const LabelWithInput = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={name}
    >
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={label}
    />
    <ToastContainer  />
  </div>
);

export default Employees;





