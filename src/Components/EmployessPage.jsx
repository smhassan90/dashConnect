
// import React, { useState } from 'react';
// import Sidebar from '../Reuseable/SIdebar';
// import Bar from '../Reuseable/Bar';
// import { FaEdit, FaTrash } from 'react-icons/fa';


// const EmployessPage = () => {
//   const [data, setData] = useState([
//     {
//       storyBoardName: 'Project A',
//       description: 'Description for Project A',
//       integration: 'Integration A',
//       complementaryDatasets: 'Dataset A',
//     },
//     {
//       storyBoardName: 'Project B',
//       description: 'Description for Project B',
//       integration: 'Integration B',
//       complementaryDatasets: 'Dataset B',
//     },

//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState({
//     storyBoardName: '',
//     description: '',
//     integration: '',
//     complementaryDatasets: '',
//   });
//   const [editIndex, setEditIndex] = useState(null);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const [showAddForm, setShowAddForm] = useState(false); // New state for add form modal

//   const [newEntry, setNewEntry] = useState({
//     storyBoardName: '',
//     description: '',
//     integration: '',
//     complementaryDatasets: '',
//   });

//   const handleDelete = (index) => {
//     setDeleteIndex(index);
//     setShowDeleteConfirm(true);
//   };

//   const confirmDelete = () => {
//     const updatedData = [...data];
//     updatedData.splice(deleteIndex, 1);
//     setData(updatedData);
//     setShowDeleteConfirm(false);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditData(data[index]);
//     setIsEditing(true);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const updateEmployee = () => {
//     const updatedData = [...data];
//     updatedData[editIndex] = editData;
//     setData(updatedData);
//     setIsEditing(false);
//   };

//   const addNewEntry = () => {
//     setData([...data, newEntry]);
//     setShowAddForm(false);
//     setNewEntry({
//       storyBoardName: '',
//       description: '',
//       integration: '',
//       complementaryDatasets: '',
//     });
//   };
//   const handleAddChange = (e) => {
//     const { name, value } = e.target;
//     setNewEntry((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="overflow-hidden">
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4 sm:ml-0 ml-[45px]">
//           <Bar title="Employees" />

//           <div className="container mx-auto p-4 pt-6 md:p-6">
//             <h1 className="text-3xl font-bold mb-4">Employees list</h1>
//             <button
//               onClick={() => setShowAddForm(true)}
//               className="bg-green-500 text-white font-bold py-2 px-4 mb-4 rounded"
//             >
//               Add New Story Board
//             </button>
//             <input
//               type="search"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Search by Story Board Name"
//               className="w-full p-2 pl-10 text-sm text-gray-700"
//             />
//             <table className="w-full whitespace-no-wrap">
//               <thead>
//                 <tr className="text-left font-bold">
//                   <th className="px-4 py-3">Story Board Name</th>
//                   <th className="px-4 py-3">Description</th>
//                   <th className="px-4 py-3">Integration</th>
//                   <th className="px-4 py-3">Complementary Datasets</th>
//                   <th className="px-4 py-3">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data
//                   .filter((item) =>
//                     item.storyBoardName.toLowerCase().includes(searchTerm.toLowerCase())
//                   )
//                   .map((item, index) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       <td className="px-4 py-3">{item.storyBoardName}</td>
//                       <td className="px-4 py-3">{item.description}</td>
//                       <td className="px-4 py-3">{item.integration}</td>
//                       <td className="px-4 py-3">{item.complementaryDatasets}</td>
//                       <td className="px-4 py-3 flex space-x-2">
//                         <button
//                           onClick={() => handleDelete(index)}
//                           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                         >
//                            <FaTrash />
//                         </button>
//                         <button
//                           onClick={() => handleEdit(index)}
//                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         >
//                         <FaEdit />

//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>

//             {showDeleteConfirm && (
//               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//                   <h2 className="text-2xl font-bold mb-4">Are you sure you want to delete?</h2>
//                   <div className="flex justify-end space-x-2">
//                     <button
//                       onClick={() => setShowDeleteConfirm(false)}
//                       className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       onClick={confirmDelete}
//                       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Yes
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {showAddForm && (
//               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//                   <h2 className="text-2xl font-bold mb-4">Add New Story Board</h2>
//                   <form
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       addNewEntry();
//                     }}
//                   >
//                     <label className="block mb-2">
//                       Story Board Name
//                       <input
//                         type="text"
//                         name="storyBoardName"
//                         value={newEntry.storyBoardName}
//                         onChange={handleAddChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                         required
//                       />
//                     </label>
//                     <label className="block mb-2">
//                       Description
//                       <input
//                         type="text"
//                         name="description"
//                         value={newEntry.description}
//                         onChange={handleAddChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                         required
//                       />
//                     </label>
//                     <label className="block mb-2">
//                       Integration
//                       <input
//                         type="text"
//                         name="integration"
//                         value={newEntry.integration}
//                         onChange={handleAddChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                         required
//                       />
//                     </label>
//                     <label className="block mb-4">
//                       Complementary Datasets
//                       <input
//                         type="text"
//                         name="complementaryDatasets"
//                         value={newEntry.complementaryDatasets}
//                         onChange={handleAddChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                         required
//                       />
//                     </label>
//                     <div className="flex justify-end space-x-2">
//                       <button onClick={() => setShowAddForm(false)} className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
//                         Cancel
//                       </button>
//                       <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded">
//                         Add
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}

//             {isEditing && (
//               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//                   <h2 className="text-2xl font-bold mb-4">Edit Story Board</h2>
//                   <form
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       updateEmployee();
//                     }}
//                   >
//                     <label className="block mb-2">
//                       Story Board Name
//                       <input
//                         type="text"
//                         name="storyBoardName"
//                         value={editData.storyBoardName}
//                         onChange={handleEditChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                         required
//                       />
//                     </label>
//                     <label className="block mb-2">
//                       Description
//                       <input
//                         type="text"
//                         name="description"
//                         value={editData.description}
//                         onChange={handleEditChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                         required
//                       />
//                     </label>
//                     <label className="block mb-2">
//                       Integration
//                       <input
//                         type="text"
//                         name="integration"
//                         value={editData.integration}
//                         onChange={handleEditChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                         required
//                       />
//                     </label>
//                     <label className="block mb-4">
//                       Complementary Datasets
//                       <input
//                         type="text"
//                         name="complementaryDatasets"
//                         value={editData.complementaryDatasets}
//                         onChange={handleEditChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                         required
//                       />
//                     </label>
//                     <div className="flex justify-end space-x-2">
//                       <button
//                         onClick={() => setIsEditing(false)}
//                         className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                       >
//                         Save
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployessPage;
import React, { useState } from 'react';
import Sidebar from '../Reuseable/SIdebar';
import Bar from '../Reuseable/Bar';
import { FaEdit, FaTrash } from 'react-icons/fa';

const EmployessPage = () => {
  const [data, setData] = useState([
    {
      storyBoardName: 'Project A',
      description: 'Description for Project A',
      integration: 'Integration A',
      complementaryDatasets: 'Dataset A',
    },
    {
      storyBoardName: 'Project B',
      description: 'Description for Project B',
      integration: 'Integration B',
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
  });

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    const updatedData = [...data];
    updatedData.splice(deleteIndex, 1);
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
    const updatedData = [...data];
    updatedData[editIndex] = editData;
    setData(updatedData);
    setIsEditing(false);
  };

  const addNewEntry = () => {
    setData([...data, newEntry]);
    setShowAddForm(false);
    setNewEntry({
      storyBoardName: '',
      description: '',
      integration: '',
      complementaryDatasets: '',
    });
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="overflow-hidden">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 sm:ml-0 ml-[45px]">
          <Bar title="Employees" />

          <div className="container mx-auto p-4 pt-6 md:p-6">
            <h1 className="text-3xl font-bold mb-4">Employees List</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-green-500 text-white font-bold py-2 px-4 mb-4 rounded"
            >
              Add New Story Board
            </button>
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by Story Board Name"
              className="w-full p-2 pl-10 text-sm text-gray-700 mb-4"
            />
            {/* <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="text-left font-bold">
                    <th className="px-1 py-1">Story Board Name</th>
                    <th className="px-1 py-1">Description</th>
                    <th className="px-1 py-1">Integration</th>
                    <th className="px-1 py-1">Complementary Datasets</th>
                    <th className="px-1 py-1">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((item) =>
                      item.storyBoardName.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="px-4 py-3">{item.storyBoardName}</td>
                        <td className="px-4 py-3">{item.description}</td>
                        <td className="px-4 py-3">{item.integration}</td>
                        <td className="px-4 py-3">{item.complementaryDatasets}</td>
                        <td className="px-4 py-3 flex space-x-2">
                          <button
                            onClick={() => handleDelete(index)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          >
                            <FaTrash />
                          </button>
                          <button
                            onClick={() => handleEdit(index)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            <FaEdit />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div> */}
<div className="overflow-x-auto">
  <table className="min-w-full bg-white">
    <thead>
      <tr className="text-left font-bold">
        <th className="px-2 py-1 text-xs sm:text-sm md:text-base">Story Board Name</th>
        <th className="px-2 py-1 text-xs sm:text-sm md:text-base">Description</th>
        <th className="px-2 py-1 text-xs sm:text-sm md:text-base">Integration</th>
        <th className="px-2 py-1 text-xs sm:text-sm md:text-base">Complementary Datasets</th>
        <th className="px-2 py-1 text-xs sm:text-sm md:text-base">Actions</th>
      </tr>
    </thead>
    <tbody>
      {data
        .filter((item) =>
          item.storyBoardName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words">{item.storyBoardName}</td>
            <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words">{item.description}</td>
            <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words">{item.integration}</td>
            <td className="px-2 py-3 text-xs sm:text-sm md:text-base break-words">{item.complementaryDatasets}</td>
            <td className="px-2 py-3 text-xs sm:text-sm md:text-base">
              <div className="flex justify-center space-x-1">
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
                  <h2 className="text-2xl font-bold mb-4">Add New Story Board</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      addNewEntry();
                    }}
                  >
                    <label className="block mb-2">
                      Story Board Name
                      <input
                        type="text"
                        name="storyBoardName"
                        value={newEntry.storyBoardName}
                        onChange={handleAddChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </label>
                    <label className="block mb-2">
                      Description
                      <input
                        type="text"
                        name="description"
                        value={newEntry.description}
                        onChange={handleAddChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </label>
                    <label className="block mb-2">
                      Integration
                      <input
                        type="text"
                        name="integration"
                        value={newEntry.integration}
                        onChange={handleAddChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </label>
                    <label className="block mb-4">
                      Complementary Datasets
                      <input
                        type="text"
                        name="complementaryDatasets"
                        value={newEntry.complementaryDatasets}
                        onChange={handleAddChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </label>
                    <div className="flex justify-end space-x-2">
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

            {isEditing && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-bold mb-4">Edit Story Board</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateEmployee();
                    }}
                  >
                    <label className="block mb-2">
                      Story Board Name
                      <input
                        type="text"
                        name="storyBoardName"
                        value={editData.storyBoardName}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </label>
                    <label className="block mb-2">
                      Description
                      <input
                        type="text"
                        name="description"
                        value={editData.description}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </label>
                    <label className="block mb-2">
                      Integration
                      <input
                        type="text"
                        name="integration"
                        value={editData.integration}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </label>
                    <label className="block mb-4">
                      Complementary Datasets
                      <input
                        type="text"
                        name="complementaryDatasets"
                        value={editData.complementaryDatasets}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </label>
                    <div className="flex justify-end space-x-2">
                      <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
                        Cancel
                      </button>
                      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployessPage;
