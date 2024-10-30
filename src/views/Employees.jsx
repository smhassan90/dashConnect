

import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Bar from '../Reuseable/Bar';

function Employees() {
    const [data, setData] = useState([
        {
            storyBoardName: 'Project A',
            description: 'Description for Project A',
            integration: 'Integration A',
            password :"12345067",
            complementaryDatasets: 'Dataset A',
        },
        {
            storyBoardName: 'Project B',
            description: 'Description for Project B',
            integration: 'Integration B',
            password :"12345067",
            complementaryDatasets: 'Dataset B',
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        storyBoardName: '',
        description: '',
        integration: '',
        complementaryDatasets: '',
        password: '',
    });
    const [editIndex, setEditIndex] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    const [newEntry, setNewEntry] = useState({
        storyBoardName: '',
        description: '',
        integration: '',
        complementaryDatasets: '',
        password: '',
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

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({ ...prev, [name]: value }));
    };

    const updateEmployee = () => {
        const updatedData = data.map((item, index) =>
            index === editIndex ? editData : item
        );
        setData(updatedData);
        setIsEditing(false);
    };

    const addNewEntry = () => {
        setData((prevData) => [...prevData, newEntry]);
        setShowAddForm(false);
        setNewEntry({
            storyBoardName: '',
            description: '',
            integration: '',
            complementaryDatasets: '',
            password: '',
        });
    };

    const handleAddChange = (e) => {
        const { name, value } = e.target;
        setNewEntry((prev) => ({ ...prev, [name]: value }));
    };

    return (
        
        <div className=" pl-6 w-[1150px]">
    {/* <Bar title="Employees" /> */}
    <Bar title="Employees" onAddStory={() => setShowAddForm(true)}
    buttonText="+ Add Employee" />
    <div className=" md:p-6">
        <h1 className="text-3xl font-bold mb-4">Employees List</h1>
        
        <input
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by Story Board Name"
            className="w-full p-2 pl-10 text-sm text-gray-700 mb-4 border border-gray-300 rounded" // Add border and rounded edges for better styling
        />
        <div className="overflow-x-auto"> {/* Allows horizontal scrolling on smaller screens */}
            <table className="min-w-full bg-white border border-gray-300"> {/* Set min width to make it responsive */}
                <thead>
                    <tr className="text-left font-bold">
                        <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">Full Name </th>
                        <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">Last Name </th>
                        <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">Email </th>
                        <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">Role </th>
                        <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">Password</th>
                        <th className="px-2 py-1 text-xs sm:text-sm md:text-base border-b">Actions</th>
                        
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .filter((item) =>
                            item.storyBoardName.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
                                    {item.storyBoardName}
                                </td>
                                <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
                                    {item.description}
                                </td>
                                <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
                                    {item.integration}
                                </td>
                                <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
                                    {item.complementaryDatasets}
                                </td>
                                <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words border-b">
                                    {item.password}
                                </td>
                                <td className="px-2 py-3 text-xs sm:text-sm md:text-base ">
                                    <div className="flex justify-center space-x-3">
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs "
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
                        ))}
                </tbody>
            </table>
        </div>



                
                {showDeleteConfirm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-2xl font-bold mb-4">Are you sure you want to delete?</h2>
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Employees</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                addNewEntry();
            }}>
               
 <div className=''>
 <fieldset className="border border-gray-400 rounded p-2 w-96 h-14"> {/* Adjust width and height */}
    <legend className="text-gray-500 text-sm px-2">FULL NAME</legend>
    
    <input
        required
        className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
        id="storyBoardName"
        name="storyBoardName"
        value={newEntry.storyBoardName}
        onChange={handleAddChange}
    />
</fieldset>
<fieldset className="border border-gray-400 rounded p-2 w-96 h-14 "> {/* Adjust width and height */}
<legend className="text-gray-500 text-sm px-2"> Last Name	</legend>
<input 
required
className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
id="description"
 name="description"
value={newEntry.description}
onChange={handleAddChange}

/>
</fieldset>
<fieldset className="border border-gray-400 rounded p-2 w-96 h-14"> {/* Adjust width and height */}
<legend className="text-gray-500 text-sm px-2"> Email	</legend>
<input 
type='Email'
required
className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
id="integration"
name="integration"
value={newEntry.integration}
onChange={handleAddChange}

/>
</fieldset>
<fieldset className="border border-gray-400 rounded p-2 w-96 h-14"> {/* Adjust width and height */}
<legend className="text-gray-500 text-sm px-2"> password	</legend>
<input 
type='password'
required
className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
id="password"
name="password"
value={newEntry.password}
onChange={handleAddChange}

/>
</fieldset>
 </div>


<fieldset className="border border-gray-400 rounded p-2 w-96 h-16 "> {/* Adjust width and height */}
    <legend className="text-gray-500 text-sm px-2">Role</legend>
    <select
        id="complementaryDatasets"
        name="complementaryDatasets"
        value={newEntry.complementaryDatasets}
        onChange={handleAddChange}
        className="bg-transparent rounded w-full  text-gray-700 leading-tight focus:outline-none border-none" // No border on input
    >
        <option value="">Select an option</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Employee">Employee</option>
    </select>
</fieldset>





                <div className="flex justify-end space-x-2 mt-10">
                    <button onClick={() => setShowAddForm(false)} className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                        Add
                    </button>
                </div>
            </form>
        </div>
    </div>
)}


                {/* Edit Entry Modal */}
                {isEditing && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-2xl font-bold mb-4">Edit Employees</h2>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                updateEmployee();
                            }}>
                               
                                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14"> {/* Adjust width and height */}
    <legend className="text-gray-500 text-sm px-2">FULL NAME</legend>
    
    <input
        className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
        id="storyBoardName"
        name="storyBoardName"
        value={editData.storyBoardName}
        onChange={handleEditChange}
    />
</fieldset>

<fieldset className="border border-gray-400 rounded p-2 w-96 h-14 "> {/* Adjust width and height */}
<legend className="text-gray-500 text-sm px-2"> Last Name	</legend>
<input 
required
className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
id="description"
 name="description"
value={editData.description}
onChange={handleEditChange}

/>
</fieldset>


                               
<fieldset className="border border-gray-400 rounded p-2 w-96 h-14">
<legend className="text-gray-500 text-sm px-2"> Email	</legend>
<input 
type='Email'
required
className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
id="integration"
name="integration"
value={editData.integration}
onChange={handleEditChange}

/>
</fieldset>



                               
                                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14"> {/* Adjust width and height */}
<legend className="text-gray-500 text-sm px-2"> password	</legend>
<input 
type='password'
required
className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
id="password"
name="password"
value={editData.password}
onChange={handleEditChange}

/>
</fieldset>



<fieldset className="border border-gray-400 rounded p-2 w-96 h-16 "> {/* Adjust width and height */}
    <legend className="text-gray-500 text-sm px-2">Role</legend>
    <select
        id="complementaryDatasets"
        name="complementaryDatasets"
        value={editData.complementaryDatasets}
        onChange={handleEditChange}
        className="bg-transparent rounded w-full  text-gray-700 leading-tight focus:outline-none border-none" // No border on input
    >
        <option value="">Select an option</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Employee">Employee</option>
    </select>
</fieldset>


                             
                                
                                <div className="flex justify-end space-x-2 mt-10">
                                    <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
                                        Cancel
                                    </button>
                                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const LabelWithInput = ({ label, name, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
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
    </div>
);

export default Employees;
