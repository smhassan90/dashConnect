


// import React, { useState } from 'react';
// import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md'; // Import React Icons

// function Table() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5); // Reduce items per page for better mobile view

//   // Convert data to state
//   const [data, setData] = useState([
//     { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     { id: '#1002', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     { id: '#1003', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     { id: '#1004', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     { id: '#1005', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
//     // Add more data as needed
//   ]);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleDelete = (id) => {
//     // Filter out the item with the given id
//     const updatedData = data.filter(item => item.id !== id);
//     setData(updatedData); // Update the state with the filtered data
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
//     <div className="flex flex-col w-full max-w-7xl mx-auto px-4">
//       <div className="overflow-x-auto">
//         <div className="py-2 align-middle inline-block min-w-full">
//           <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
//                     <input className='text-lg' type="checkbox" />
//                   </th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">ID</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Name</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Info</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Connected Database</th>
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
//                       <div className="text-lg leading-5 text-center text-gray-900">{item.storyName}</div>
//                     </td>
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="text-lg leading-5 text-center text-gray-900">{item.storyInfo}</div>
//                     </td>
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="text-lg leading-5 text-center text-gray-900">{item.connectedDatabase}</div>
//                     </td>
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="text-lg leading-5 text-center text-gray-900">{item.category}</div>
//                     </td>
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="flex justify-center space-x-2">
//                         <button className="text-blue-500 hover:text-blue-700">
//                           <MdEdit size={20} />
//                         </button>
//                         <button
//                           className="text-red-500 hover:text-red-700"
//                           onClick={() => handleDelete(item.id)} // Add delete handler
//                         >
//                           <MdDelete size={20} />
//                         </button>
//                         <button className="text-green-500 hover:text-green-700">
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

//       {/* Pagination */}
//       {renderPagination()}
//     </div>
//   );
// }

// export default Table;


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

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleDelete = (id) => {
//     const updatedData = data.filter(item => item.id !== id);
//     setData(updatedData);
//   };

//   // State to manage edit mode and visibility
//   const [editRowId, setEditRowId] = useState(null);
//   const [showDetails, setShowDetails] = useState({});

//   const handleEdit = (item) => {
//     if (editRowId === item.id) {
//       // Save the edits
//       const updatedData = data.map((dataItem) =>
//         dataItem.id === item.id ? { ...dataItem, ...showDetails[item.id] } : dataItem
//       );
//       setData(updatedData);
//       setEditRowId(null); // Exit edit mode
//     } else {
//       setEditRowId(item.id); // Enter edit mode
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
//     <div className="flex flex-col w-full max-w-7xl mx-auto px-4">
//       <div className="overflow-x-auto">
//         <div className="py-2 align-middle inline-block min-w-full">
//           <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
//                     <input className='text-lg' type="checkbox" />
//                   </th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">ID</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Name</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Info</th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Connected Database</th>
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
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       {showDetails[item.id]?.visible ? (
//                         <div className="text-lg leading-5 text-center text-gray-900">{item.storyInfo}</div>
//                       ) : null}
//                     </td>
//                     <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
//                       {showDetails[item.id]?.visible ? (
//                         <div className="text-lg leading-5 text-center text-gray-900">{item.connectedDatabase}</div>
//                       ) : null}
//                     </td>
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
//                           onClick={() => handleDelete(item.id)}
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
//     </div>
//   );
// }

// export default Table;



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

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleDelete = (id) => {
//     const updatedData = data.filter(item => item.id !== id);
//     setData(updatedData);
//   };

//   // State to manage edit mode and visibility
//   const [editRowId, setEditRowId] = useState(null);
//   const [showDetails, setShowDetails] = useState({});

//   const handleEdit = (item) => {
//     if (editRowId === item.id) {
//       // Save the edits
//       const updatedData = data.map((dataItem) =>
//         dataItem.id === item.id ? { ...dataItem, ...showDetails[item.id] } : dataItem
//       );
//       setData(updatedData);
//       setEditRowId(null); // Exit edit mode
//     } else {
//       setEditRowId(item.id); // Enter edit mode
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
//     <div className="flex flex-col w-full max-w-7xl mx-auto px-4">
//       <div className="overflow-x-auto">
//         <div className="py-2 align-middle inline-block min-w-full">
//           <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
//                     <input className='text-lg' type="checkbox" />
//                   </th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">ID</th>
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
//                           onClick={() => handleDelete(item.id)}
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
//     </div>
//   );
// }

// export default Table;


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

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleDelete = (id) => {
//     const updatedData = data.filter(item => item.id !== id);
//     setData(updatedData);
//   };

//   // State to manage edit mode and visibility
//   const [editRowId, setEditRowId] = useState(null);
//   const [showDetails, setShowDetails] = useState({});

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
//     <div className="flex flex-col w-full max-w-7xl mx-auto px-4">
//       <div className="overflow-x-auto">
//         <div className="py-2 align-middle inline-block min-w-full">
//           <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
//                     <input className='text-lg' type="checkbox" />
//                   </th>
//                   <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">ID</th>
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
//                           onClick={() => handleDelete(item.id)}
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
//     </div>
//   );
// }

// export default Table

import React, { useState } from 'react';
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';

function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [data, setData] = useState([
    { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
    { id: '#1002', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
    { id: '#1003', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
    { id: '#1004', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
    { id: '#1005', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking' },
  ]);

  const [editRowId, setEditRowId] = useState(null);
  const [showDetails, setShowDetails] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

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

  const handleEdit = (item) => {
    if (editRowId === item.id) {
      const updatedData = data.map((dataItem) =>
        dataItem.id === item.id ? { ...dataItem, ...showDetails[item.id] } : dataItem
      );
      setData(updatedData);
      setEditRowId(null);
    } else {
      setEditRowId(item.id);
      setShowDetails((prev) => ({
        ...prev,
        [item.id]: {
          storyName: item.storyName,
          storyInfo: item.storyInfo,
          category: item.category,
        },
      }));
    }
  };

  const toggleDetails = (id) => {
    setShowDetails((prev) => ({
      ...prev,
      [id]: {
        visible: !prev[id]?.visible,
      },
    }));
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
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-3 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
                    <input className='text-lg' type="checkbox" />
                  </th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">ID</th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Name</th>
                  {currentItems.some(item => showDetails[item.id]?.visible) && (
                    <>
                      <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Story Info</th>
                      <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Connected Database</th>
                    </>
                  )}
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Category</th>
                  <th className="px-2 py-3 text-center text-lg font-medium text-black tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-600">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200 text-lg">
                      <input type="checkbox" />
                    </td>
                    <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-lg leading-5 text-left text-gray-900">{item.id}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                      {editRowId === item.id ? (
                        <input
                          className="text-lg leading-5 text-center text-gray-900 border rounded-lg"
                          value={showDetails[item.id]?.storyName || item.storyName}
                          onChange={(e) => setShowDetails((prev) => ({
                            ...prev,
                            [item.id]: { ...prev[item.id], storyName: e.target.value },
                          }))}
                        />
                      ) : (
                        <div className="text-lg leading-5 text-center text-gray-900">{item.storyName}</div>
                      )}
                    </td>
                    {showDetails[item.id]?.visible && (
                      <>
                        <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-lg leading-5 text-center text-gray-900">{item.storyInfo}</div>
                        </td>
                        <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-lg leading-5 text-center text-gray-900">{item.connectedDatabase}</div>
                        </td>
                      </>
                    )}
                    <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                      {editRowId === item.id ? (
                        <input
                          className="text-lg leading-5 text-center text-gray-900 border rounded-lg"
                          value={showDetails[item.id]?.category || item.category}
                          onChange={(e) => setShowDetails((prev) => ({
                            ...prev,
                            [item.id]: { ...prev[item.id], category: e.target.value },
                          }))}
                        />
                      ) : (
                        <div className="text-lg leading-5 text-center text-gray-900">{item.category}</div>
                      )}
                    </td>
                    <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex justify-center space-x-2">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => handleEdit(item)}
                        >
                          <MdEdit size={20} />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteClick(item.id)}
                        >
                          <MdDelete size={20} />
                        </button>
                        <button
                          className="text-green-500 hover:text-green-700"
                          onClick={() => toggleDetails(item.id)}
                        >
                          <MdVisibility size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {renderPagination()}

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="flex justify-end mt-4 text-center">
              <button
                onClick={cancelDelete}
                className="bg-green-500 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded mr-2 text-center "
              >
                No
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
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
