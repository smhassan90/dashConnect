
// import React, { useState } from 'react';
// import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';

// function Table() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [data, setData] = useState([
//     { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     { id: '#1002', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     { id: '#1003', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     { id: '#1004', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     { id: '#1005', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//   ]);

//   const [editRowId, setEditRowId] = useState(null);
//   const [showDetails, setShowDetails] = useState({});
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState(null);

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

//   const handleEdit = (item) => {
//     if (editRowId === item.id) {
//       const updatedData = data.map((dataItem) =>
//         dataItem.id === item.id ? { ...dataItem, ...showDetails[item.id] } : dataItem
//       );
//       setData(updatedData);
//       setEditRowId(null);
//     } else {
//       setEditRowId(item.id);
//       setShowDetails((prev) => ({
//         ...prev,
//         [item.id]: {
//           storyName: item.storyName,
//           storyInfo: item.storyInfo,
//           category: item.category,
//         },
//       }));
//     }
//   };

//   const toggleDetails = (id) => {
//     setShowDetails((prev) => ({
//       ...prev,
//       [id]: {
//         visible: !prev[id]?.visible,
//       },
//     }));
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
//     <div className="flex flex-col w-full max-w-7xl mx-auto px-4 mt-7 mobile:w-80 mobile:ml-10">
//       <div className="overflow-x-auto">
//         <div className="py-2 align-middle inline-block min-w-full">
//           <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-2 py-4 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
                
//                   </th>
//                   <th className="px-2 py-3 text-left text-lg font-medium text-black tracking-wider">ID</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Name</th>
//                   {currentItems.some(item => showDetails[item.id]?.visible) && (
//                     <>
//                       <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Info</th>
//                       <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Connected Database</th>
//                     </>
//                   )}
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Category</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-600">
//                 {currentItems.map((item) => (
//                   <tr key={item.id} className="hover:bg-gray-100">
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200 text-lg">
//                       <input type="checkbox" />
//                     </td>
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="text-lg leading-5 text-left text-gray-900">{item.id}</div>
//                     </td>
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       {editRowId === item.id ? (
//                         <input
//                           className="text-lg leading-5 text-center text-gray-900 border rounded-lg"
//                           value={showDetails[item.id]?.storyName || item.storyName}
//                           onChange={(e) => setShowDetails((prev) => ({
//                             ...prev,
//                             [item.id]: { ...prev[item.id], storyName: e.target.value },
//                           }))}
//                         />
//                       ) : (
//                         <div className="text-lg leading-5 text-center text-gray-900">{item.storyName}</div>
//                       )}
//                     </td>
//                     {showDetails[item.id]?.visible && (
//                       <>
//                         <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                           <div className="text-lg leading-5 text-center text-gray-900">{item.storyInfo}</div>
//                         </td>
//                         <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                           <div className="text-lg leading-5 text-center text-gray-900">{item.connectedDatabase}</div>
//                         </td>
//                       </>
//                     )}
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       {editRowId === item.id ? (
//                         <input
//                           className="text-lg leading-5 text-center text-gray-900 border rounded-lg"
//                           value={showDetails[item.id]?.category || item.category}
//                           onChange={(e) => setShowDetails((prev) => ({
//                             ...prev,
//                             [item.id]: { ...prev[item.id], category: e.target.value },
//                           }))}
//                         />
//                       ) : (
//                         <div className="text-lg leading-5 text-center text-gray-900">{item.category}</div>
//                       )}
//                     </td>
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="flex justify-center space-x-2">
//                         <button
//                           className="text-blue-500 hover:text-blue-700"
//                           onClick={() => handleEdit(item)}
//                         >
//                           <MdEdit size={20} />
//                         </button>
//                         <button
//                           className="text-red-500 hover:text-red-700"
//                           onClick={() => handleDeleteClick(item.id)}
//                         >
//                           <MdDelete size={20} />
//                         </button>
//                         <button
//                           className="text-green-500 hover:text-green-700"
//                           onClick={() => toggleDetails(item.id)}
//                         >
//                           <MdVisibility size={20} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {renderPagination()}

//       {showDeleteModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 text-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
//             <p>Are you sure you want to delete this item?</p>
//             <div className="flex justify-end mt-4 text-center">
//               <button
//                 onClick={cancelDelete}
//                 className="bg-green-500 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded mr-2 text-center "
//               >
//                 No
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//               >
//                 Yes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Table;
import React, { useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [data, setData] = useState([
    { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
    { id: '#1002', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
    // Add more items as needed
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStory, setNewStory] = useState({ id: '', storyName: '', storyInfo: '', connectedDatabase: '', category: '' });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedData = data.filter(item => item.id !== itemToDelete);
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
    setNewStory({ id: '', storyName: '', storyInfo: '', connectedDatabase: '', category: '' });
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewStory((prevStory) => ({
      ...prevStory,
      [name]: value,
    }));
  };

  const addNewStory = () => {
    const updatedData = [...data, { ...newStory, id: `#${Math.floor(1000 + Math.random() * 9000)}` }];
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
            className={`${currentPage === number ? 'bg-gray-400' : 'bg-gray-300'} hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2`}
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
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 mt-7">
      <button className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={openAddModal}>
        Add Story
      </button>
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-3 text-left text-lg font-medium text-black tracking-wider">ID</th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Name</th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Info</th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Connected Database</th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Category</th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-600">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-2 py-4 text-gray-900">{item.id}</td>
                    <td className="px-2 py-4 text-gray-900">{item.storyName}</td>
                    <td className="px-2 py-4 text-gray-900">{item.storyInfo}</td>
                    <td className="px-2 py-4 text-gray-900">{item.connectedDatabase}</td>
                    <td className="px-2 py-4 text-gray-900">{item.category}</td>
                    <td className="px-2 py-4 text-center">
                      <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEditClick(item)}>
                        <MdEdit size={20} />
                      </button>
                      <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteClick(item.id)}>
                        <MdDelete size={20} />
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

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Add Story</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="storyName"
                placeholder="Story Name"
                value={newStory.storyName}
                onChange={handleAddChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="storyInfo"
                placeholder="Story Info"
                value={newStory.storyInfo}
                onChange={handleAddChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="connectedDatabase"
                placeholder="Connected Database"
                value={newStory.connectedDatabase}
                onChange={handleAddChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newStory.category}
                onChange={handleAddChange}
                className="w-full p-2 border rounded"
              />
              <button type="button" onClick={addNewStory} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
                Save
              </button>
              <button type="button" onClick={() => setShowAddModal(false)} className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {/* {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Edit Story</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="storyName"
                placeholder="Story Name"
                value={currentEditItem.storyName}
                onChange={handleEditChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="storyInfo"
                placeholder="Story Info"
                value={currentEditItem.storyInfo}
                onChange={handleEditChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="connectedDatabase"
                placeholder="Connected Database"
                value={currentEditItem.connectedDatabase}
                onChange={handleEditChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={currentEditItem.category}
                onChange={handleEditChange}
                className="w-full p-2 border rounded"
              />
              <button type="button" onClick={saveEdit} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
                Save Changes
              </button>
              <button type="button" onClick={() => setShowEditModal(false)} className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )} */}
                      {showEditModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full  mobile:w-72 mobile:ml-14">
                            <h2 className="text-2xl font-bold mb-4 mobile:text-center">Edit story</h2>
                            <form className=''>
                               
                                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60"> {/* Adjust width and height */}
    <legend className="text-gray-500 text-sm px-2">FULL NAME</legend>
    
    <input
        className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
                type="text"
                name="storyName"
                value={currentEditItem.storyName}
                onChange={handleEditChange}
        // id="storyBoardName"
        // name="storyBoardName"
        // value={editData.storyBoardName}
        // onChange={handleEditChange}
    />
</fieldset>

<fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60 "> {/* Adjust width and height */}
<legend className="text-gray-500 text-sm px-2"> Last Name	</legend>
<input 
required
className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
type="text"
name="storyInfo"
value={currentEditItem.storyInfo}
onChange={handleEditChange}

/>
</fieldset>


                               
<fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
<legend className="text-gray-500 text-sm px-2"> Email	</legend>
<input 

className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
type="text"
name="connectedDatabase"
placeholder="Connected Database"
value={currentEditItem.connectedDatabase}
onChange={handleEditChange}

/>
</fieldset>



                               
                                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60"> {/* Adjust width and height */}
<legend className="text-gray-500 text-sm px-2"> password	</legend>
<input 

className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none" // No border on input
type="text"
name="category"
placeholder="Category"
value={currentEditItem.category}
onChange={handleEditChange}
/>
</fieldset>





                             
                                
                                <div className="flex justify-end space-x-2 mt-10 mobile:w-60">
                                    <button onClick={() => setShowEditModal(false)} className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
                                        Cancel
                                    </button>
                                    <button onClick={saveEdit} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                      {showDeleteModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg ml-24 shadow-lg max-w-md w-full mobile:w-72 mobile:ml-14">
                            <h2 className="text-2xl font-bold mb-4">Are you sure you want to delete?</h2>
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={cancelDelete}
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

    </div>
  );
}

export default Table;
