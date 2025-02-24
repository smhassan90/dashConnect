// import React, { useState } from 'react';
// import { MdEdit, MdDelete } from 'react-icons/md';
// import CustomButton from './Button';

// function Table() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [data, setData] = useState([
//     { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     { id: '#1002', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     // Add more items as needed
//   ]);

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [currentEditItem, setCurrentEditItem] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [newStory, setNewStory] = useState({ id: '', storyName: '', storyInfo: '', connectedDatabase: '', category: '' });

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleDeleteClick = (id) => {
//     setItemToDelete(id);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = () => {
//     const updatedData = data.filter(item => item.id !== itemToDelete);
//     setData(updatedData);
//     setShowDeleteModal(false);
//     setItemToDelete(null);
//   };

//   const cancelDelete = () => {
//     setShowDeleteModal(false);
//     setItemToDelete(null);
//   };

//   const handleEditClick = (item) => {
//     setCurrentEditItem(item);
//     setShowEditModal(true);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentEditItem((prevItem) => ({
//       ...prevItem,
//       [name]: value,
//     }));
//   };

//   const saveEdit = () => {
//     const updatedData = data.map((item) =>
//       item.id === currentEditItem.id ? currentEditItem : item
//     );
//     setData(updatedData);
//     setShowEditModal(false);
//     setCurrentEditItem(null);
//   };

//   const openAddModal = () => {
//     setShowAddModal(true);
//     setNewStory({ id: '', storyName: '', storyInfo: '', connectedDatabase: '', category: '' });
//   };

//   const handleAddChange = (e) => {
//     const { name, value } = e.target;
//     setNewStory((prevStory) => ({
//       ...prevStory,
//       [name]: value,
//     }));
//   };

//   const addNewStory = () => {
//     const updatedData = [...data, { ...newStory, id: `#${Math.floor(1000 + Math.random() * 9000)}` }];
//     setData(updatedData);
//     setShowAddModal(false);
//   };

//   const renderPagination = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     return (
//       <div className="flex justify-center mt-4">
//         <button
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-lg mr-2"
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>
//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             className={`${currentPage === number ? 'bg-gray-400' : 'bg-gray-300'} hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2`}
//             onClick={() => paginate(number)}
//           >
//             {number}
//           </button>
//         ))}
//         <button
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-lg"
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col w-full max-w-7xl mx-auto px-4 mt-7 mobile:ml-10">
//       {/* <button className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={openAddModal}>
//         Add Story
//       </button> */}
//       <div className="overflow-x-auto">
//         <div className="py-2 align-middle inline-block min-w-full">
//           <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">ID</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Name</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Info</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Connected Database</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Category</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-600 text-center">
//                 {currentItems.map((item) => (
//                   <tr key={item.id} className="hover:bg-gray-100">
//                     <td className="px-2 py-4 text-gray-900">{item.id}</td>
//                     <td className="px-2 py-4 text-gray-900">{item.storyName}</td>
//                     <td className="px-2 py-4 text-gray-900">{item.storyInfo}</td>
//                     <td className="px-2 py-4 text-gray-900">{item.connectedDatabase}</td>
//                     <td className="px-2 py-4 text-gray-900">{item.category}</td>
//                     <td className="px-2 py-4 text-center">
//                       <button className="text-black hover:text-blue-700" onClick={() => handleEditClick(item)}>
//                         <MdEdit size={20} />
//                       </button>
//                       <button className="text-black hover:text-blue-700"
//                       onClick={() => handleDeleteClick(item.id)}>
//                         <MdDelete size={20} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {renderPagination()}

//       {showAddModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mobile:w-72 mobile:ml-14">
//             <h2 className="text-2xl font-bold mb-4 mobile:text-center">Add  Story</h2>
//             <form className=''>

//               <div className=''>
//                 <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60"> {/* Adjust width and height */}
//                   <legend className="text-gray-500 text-sm px-2">Story Name </legend>

//                   <input
//                     required
//                     className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
//                     type="text"
//                     name="storyName"
//                     value={newStory.storyName}
//                     onChange={handleAddChange}
//                   />
//                 </fieldset>
//                 <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60 "> {/* Adjust width and height */}
//                   <legend className="text-gray-500 text-sm px-2"> Story info	</legend>
//                   <input
//                     required
//                     className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
//                     type="text"
//                     name="storyInfo"

//                     value={newStory.storyInfo}
//                     onChange={handleAddChange}
//                   />
//                 </fieldset>
//                 <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60"> {/* Adjust width and height */}
//                   <legend className="text-gray-500 text-sm px-2"> Connected Database	</legend>
//                   <input

//                     required
//                     className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
//                     type="text"
//                     name="connectedDatabase"
//                     value={newStory.connectedDatabase}
//                     onChange={handleAddChange}

//                   />
//                 </fieldset>
//                 <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60"> {/* Adjust width and height */}
//                   <legend className="text-gray-500 text-sm px-2"> category 	</legend>
//                   <input

//                     required
//                     className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
//                     type="text"
//                     name="category"
//                     value={newStory.category}
//                     onChange={handleAddChange}

//                   />
//                 </fieldset>
//               </div>

//               <div className="flex justify-end space-x-2 mt-10">
//                 <button onClick={() => setShowAddModal(false)} className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
//                   Cancel
//                 </button>
//                 <button onClick={addNewStory} className="bg-green-500 text-white font-bold py-2 px-4 rounded">
//                   Add
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {showEditModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full  mobile:w-72 mobile:ml-14">
//             <h2 className="text-2xl font-bold mb-4 mobile:text-center">Edit story</h2>
//             <form className=''>

//               <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60 mt-3"> {/* Adjust width and height */}
//                 <legend className="text-gray-500 text-sm px-2 mt-3">Story  NAME</legend>

//                 <input
//                   className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
//                   type="text"
//                   name="storyName"
//                   value={currentEditItem.storyName}
//                   onChange={handleEditChange}

//                 />
//               </fieldset>

//               <fieldset className="mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60 "> {/* Adjust width and height */}
//                 <legend className="text-gray-500 text-sm px-2"> Story info	</legend>
//                 <input
//                   required
//                   className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
//                   type="text"
//                   name="storyInfo"
//                   value={currentEditItem.storyInfo}
//                   onChange={handleEditChange}

//                 />
//               </fieldset>

//               <fieldset className="mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
//                 <legend className="text-gray-500 text-sm px-2"> Connected Database	</legend>
//                 <input

//                   className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
//                   type="text"
//                   name="connectedDatabase"
//                   value={currentEditItem.connectedDatabase}
//                   onChange={handleEditChange}

//                 />
//               </fieldset>

//               <fieldset className=" mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60"> {/* Adjust width and height */}
//                 <legend className="text-gray-500 text-sm px-2"> Category	</legend>
//                 <input

//                   className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
//                   type="text"
//                   name="category"
//                   placeholder="Category"
//                   value={currentEditItem.category}
//                   onChange={handleEditChange}
//                 />
//               </fieldset>

//               <div className=" mt-3 flex justify-center space-x-2  mobile:w-60">

//                              <CustomButton
//     text="Cancel"
//     onClick={() => setShowEditModal(false)}
//     className="hover:text-black hover:bg-white border-2 border-black"
//   />
//                                <CustomButton
//     text="Save"
//     onClick={saveEdit}
//     className="hover:text-black hover:bg-white border-2 border-black"
//   />
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {showDeleteModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg ml-24 shadow-lg max-w-md w-full mobile:w-72 mobile:ml-14">
//             <h2 className="text-2xl font-bold mb-4">Are you sure you want to delete?</h2>
//             <div className="flex justify-center space-x-2">

//                                            <CustomButton
//     text="Cancel"
//     onClick={cancelDelete}
//     className="hover:text-black hover:bg-white border-2 border-black"
//   />

//                                                          <CustomButton
//     text="Yes"
//     onClick={confirmDelete}
//     className="hover:text-black hover:bg-white border-2 border-black"
//   />

//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Table;

import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import CustomButton from "./Button";
import { FaEdit, FaTrash } from "react-icons/fa";

function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [data, setData] = useState([
    {
      id: "#1001",
      storyName: "Lorem Ipsum...",
      storyInfo: "Lorem Ipsum...",
      connectedDatabase: "Lorem Database",
      category: "Banking",
    },
    {
      id: "#1002",
      storyName: "Lorem Ipsum...",
      storyInfo: "Lorem Ipsum...",
      connectedDatabase: "Lorem Database",
      category: "Banking",
    },
    // Add more items as needed
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStory, setNewStory] = useState({
    id: "",
    storyName: "",
    storyInfo: "",
    connectedDatabase: "",
    category: "",
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedData = data.filter((item) => item.id !== itemToDelete);
    setData(updatedData);
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleEditClick = (item) => {
    setCurrentEditItem(item);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentEditItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const saveEdit = () => {
    const updatedData = data.map((item) =>
      item.id === currentEditItem.id ? currentEditItem : item
    );
    setData(updatedData);
    setShowEditModal(false);
    setCurrentEditItem(null);
  };

  const openAddModal = () => {
    setShowAddModal(true);
    setNewStory({
      id: "",
      storyName: "",
      storyInfo: "",
      connectedDatabase: "",
      category: "",
    });
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewStory((prevStory) => ({
      ...prevStory,
      [name]: value,
    }));
  };

  const addNewStory = () => {
    const updatedData = [
      ...data,
      { ...newStory, id: `#${Math.floor(1000 + Math.random() * 9000)}` },
    ];
    setData(updatedData);
    setShowAddModal(false);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-lg mr-2"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`${
              currentPage === number ? "bg-gray-400" : "bg-gray-300"
            } hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-lg"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 mt-7 mobile:ml-10">
      {/* <button className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={openAddModal}>
        Add Story
      </button> */}
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">
                    ID
                  </th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">
                    Story Name
                  </th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">
                    Story Info
                  </th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">
                    Connected Database
                  </th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">
                    Category
                  </th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-600 text-center">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-2 py-4 text-gray-900">{item.id}</td>
                    <td className="px-2 py-4 text-gray-900">
                      {item.storyName}
                    </td>
                    <td className="px-2 py-4 text-gray-900">
                      {item.storyInfo}
                    </td>
                    <td className="px-2 py-4 text-gray-900">
                      {item.connectedDatabase}
                    </td>
                    <td className="px-2 py-4 text-gray-900">{item.category}</td>
                    <td className="px-2 py-4 text-center space-x-3">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
                        onClick={() => handleEditClick(item)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => handleDeleteClick(item.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {renderPagination()}

      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mobile:w-72 mobile:ml-14">
            <h2 className="text-2xl font-bold mb-4 mobile:text-center">
              Add Story
            </h2>
            <form className="">
              <div className="">
                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                  {" "}
                  {/* Adjust width and height */}
                  <legend className="text-gray-500 text-sm px-2">
                    Story Name{" "}
                  </legend>
                  <input
                    required
                    maxLength="50"
                    className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                    type="text"
                    name="storyName"
                    value={newStory.storyName}
                    onChange={handleAddChange}
                  />
                </fieldset>
                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60 ">
                  {" "}
                  {/* Adjust width and height */}
                  <legend className="text-gray-500 text-sm px-2">
                    {" "}
                    Story info{" "}
                  </legend>
                  <input
                    required
                    maxLength="50"
                    className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                    type="text"
                    name="storyInfo"
                    value={newStory.storyInfo}
                    onChange={handleAddChange}
                  />
                </fieldset>
                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                  {" "}
                  {/* Adjust width and height */}
                  <legend className="text-gray-500 text-sm px-2">
                    {" "}
                    Connected Database{" "}
                  </legend>
                  <input
                    required
                    maxLength="50"
                    className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                    type="text"
                    name="connectedDatabase"
                    value={newStory.connectedDatabase}
                    onChange={handleAddChange}
                  />
                </fieldset>
                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                  {" "}
                  {/* Adjust width and height */}
                  <legend className="text-gray-500 text-sm px-2">
                    {" "}
                    category{" "}
                  </legend>
                  <input
                    required
                    maxLength="50"
                    className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                    type="text"
                    name="category"
                    value={newStory.category}
                    onChange={handleAddChange}
                  />
                </fieldset>
              </div>

              <div className="flex justify-end space-x-2 mt-10">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={addNewStory}
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full  mobile:w-72 mobile:ml-14">
            <h2 className="text-2xl font-bold mb-4 mobile:text-center">
              Edit story
            </h2>
            <form className="">
              <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60 mt-3">
                {" "}
                {/* Adjust width and height */}
                <legend className="text-gray-500 text-sm px-2 mt-3">
                  Story NAME
                </legend>
                <input
                  maxLength="50"
                  className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                  type="text"
                  name="storyName"
                  value={currentEditItem.storyName}
                  onChange={handleEditChange}
                />
              </fieldset>

              <fieldset className="mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60 ">
                {" "}
                {/* Adjust width and height */}
                <legend className="text-gray-500 text-sm px-2">
                  {" "}
                  Story info{" "}
                </legend>
                <input
                  maxLength="50"
                  required
                  className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                  type="text"
                  name="storyInfo"
                  value={currentEditItem.storyInfo}
                  onChange={handleEditChange}
                />
              </fieldset>

              <fieldset className="mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                <legend className="text-gray-500 text-sm px-2">
                  {" "}
                  Connected Database{" "}
                </legend>
                <input
                  maxLength="50"
                  className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                  type="text"
                  name="connectedDatabase"
                  value={currentEditItem.connectedDatabase}
                  onChange={handleEditChange}
                />
              </fieldset>

              <fieldset className=" mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                {" "}
                {/* Adjust width and height */}
                <legend className="text-gray-500 text-sm px-2">
                  {" "}
                  Category{" "}
                </legend>
                <input
                  maxLength="50"
                  className="bg-transparentrounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={currentEditItem.category}
                  onChange={handleEditChange}
                />
              </fieldset>

              <div className=" mt-3 flex justify-center space-x-2  mobile:w-60">
                <CustomButton
                  text="Cancel"
                  onClick={() => setShowEditModal(false)}
                  className="hover:text-black hover:bg-white border-2 border-black"
                />
                <CustomButton
                  text="Save"
                  onClick={saveEdit}
                  className="hover:text-black hover:bg-white border-2 border-black"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg ml-24 shadow-lg max-w-md w-full mobile:w-72 mobile:ml-14">
            <h2 className="text-2xl font-bold mb-4">
              Are you sure you want to delete?
            </h2>
            <div className="flex justify-center space-x-2">
              <CustomButton
                text="Cancel"
                onClick={cancelDelete}
                className="hover:text-black hover:bg-white border-2 border-black"
              />

              <CustomButton
                text="Yes"
                onClick={confirmDelete}
                className="hover:text-black hover:bg-white border-2 border-black"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
