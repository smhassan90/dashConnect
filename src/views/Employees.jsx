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
  const [editData, setEditData] = useState({
    employeeId: "", 
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  });
const handleAdd = () => {
    setData((prevData) => (Array.isArray(prevData) ? [...prevData, newEntry] : [newEntry]));
    console.log("Updated Data after Add: ", data);
  };
const [editIndex, setEditIndex] = useState(null);
const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
const [deleteIndex, setDeleteIndex] = useState(null);
const [showAddForm, setShowAddForm] = useState(false);
const [newEntry, setNewEntry] = useState({
  empId: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  password: "",
});
const [data, setData] = useState([])
console.log(data);
const baseUrl = process.env.REACT_APP_BASE_URL;

useEffect(() => {
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("your_access_token");
      if (!token) throw new Error("No token found. Please log in.");

      const response = await axios.get(`${baseUrl}/api/employee/v1/getEmployees`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("API Response:", response.data); // Log the response structure

      // Check if the response data is an array
      const employees = Array.isArray(response.data) ? response.data : response.data.employees; // Adjust property based on the actual structure
      setData(employees); // Set the employee data

      console.log("Employee IDs:", employees.map((emp) => emp._id)); // Log all employee IDs

    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  fetchData();
}, []); // Run only once when the component mounts

const handleDelete = (index) => {
  setDeleteIndex(index);
  setShowDeleteConfirm(true);
};

const confirmDelete = async () => {
  try {
    const employeeId = data[deleteIndex]._id;  // Get the employee's ID
    const token = localStorage.getItem("your_access_token");

    // Send DELETE request to the backend
    const response = await axios.delete(
      `${baseUrl}/api/employee/v1/deleteEmployee/${employeeId}`, // Use the correct API endpoint
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      // If the deletion is successful, update the state
      const updatedData = data.filter((_, index) => index !== deleteIndex); // Remove the employee from the list
      setData(updatedData); // Update the state with the new list
      toast.success("Employee deleted successfully!");
    } else {
      toast.error("Error deleting employee. Please try again.");
    }
  } catch (error) {
    toast.error("Error deleting employee. Please try again.");
    console.error("Error deleting employee:", error);
  }

  // Close the confirmation modal
  setShowDeleteConfirm(false);
};
const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

const handleEdit = (index) => {
  console.log('Selected employee data:', data[index]); // Check if employeeId or _id exists here
  setEditIndex(index);
  setEditData(data[index]); // Make sure this has all the necessary fields like _id
  setIsEditing(true);
};



const handleEditChange = (e) => {
  const { name, value } = e.target;
  setEditData((prev) => ({ ...prev, [name]: value }));
};



const updateEmployee = async () => {
  console.log("Updating employee data:", editData); // Log the object to check its contents

  if (!editData._id) {  // Ensure that _id is present in the edit data
    toast.error("Employee ID is required");
    return;
  }

  try {
    const token = localStorage.getItem("your_access_token");
    const response = await axios.put(
      `${baseUrl}/api/employee/v1/updateEmployee/${editData._id}`, // Ensure _id is used here
      editData,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    
    if (response.status === 200) {
      toast.success("Employee updated successfully!");
      const updatedData = data.map(emp =>
        emp._id === editData._id ? { ...emp, ...editData } : emp
      );
      setData(updatedData); // Update state with the new employee data
      setIsEditing(false); // Close the edit form
    } else {
      toast.error("Error updating employee. Please try again.");
    }
  } catch (error) {
    toast.error("Error updating employee. Please try again.");
    console.error("Error updating employee:", error);
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
      `${baseUrl}/api/employee/v1/addEmployee`,
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
    const updatedData = [...data, newEmployee];
    setData(updatedData); // Update the state
    console.log("Employee IDs:", updatedData.map((emp) => emp._id)); // Log all IDs
    setShowAddForm(false);
    setNewEntry({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      password: "",
    });
  } catch (error) {
    console.error("Error adding employee:", error.response ? error.response.data : error.message);
  }
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
            <thead>
  <tr className="text-left font-bold">
    
    <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
      First Name
    </th>
    <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
      Last Name
    </th>
    <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
      Email
    </th>
    <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
      Role
    </th>
    <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">
      Actions
    </th>
  </tr>
</thead>

<tbody>
  {data && data.length > 0 ? (
    data
      .filter((item) =>
        item.firstName?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((item, index) => (
        <tr data-empId={item._id} key={index} className="hover:bg-gray-100">
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
      <td colSpan={7} className="text-center py-4">
        No employees found.
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





