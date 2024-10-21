// import React, { useState } from 'react';
// import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md'; // Import React Icons


// function Table() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(25);
  


//   const data = [
//     { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
//     { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
//     { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
//     { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
//     { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
//   ];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const renderPagination = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     return (
//       <div className="flex justify-center mt-10 ml-7">
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
//     <div className="flex flex-col mt-10 ml-10">
//       <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//         <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//           <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     ID
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Story Name
//                   </th>
//                   <th
//                     scope="col "
//                     className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Story Info
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Connected Database
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Category
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {currentItems.map((item) => (
//                   <tr key={item.id}>
//                     <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="text-sm leading-5 text-gray-900">{item.id}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="text-sm leading-5 text-gray-900">{item.storyName}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="text-sm leading-5 text-gray-900">{item.storyInfo}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="text-sm leading-5 text-gray-900">{item.connectedDatabase}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                       <div className="text-sm leading-5 text-gray-900"> {item.category}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    
//                       <div className="flex space-x-4">
//                         <button className="text-blue-500 hover:text-blue-700">
//                           <MdEdit size={24} />
//                         </button>
//                         <button className="text-red-500 hover:text-red-700">
//                           <MdDelete size={24} />
//                         </button>
//                         <button className="text-green-500 hover:text-green-700">
//                           <MdVisibility size={24} />
//                         </button>
//                       </div>
//                     </td>
//                     ---
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


import React, { useState } from 'react';
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md'; // Import React Icons

function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(25);

  const data = [
    { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
    { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
    { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
    { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
    { id: '#1001', storyName: 'Lorem Ipsum...', storyInfo: 'Lorem Ipsum...', connectedDatabase: 'Lorem Database', category: 'Banking', actions: '' },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    <div className="flex flex-col w-11/12 mt-10 ml-10 text-2xl">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 text-2xl">
          <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg text-2xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-2xl font-medium text-gray-500 uppercase tracking-wider">
                    <input className='text-2xl'  type="checkbox" />
                  </th>
                  <th className="   px-6 py-3 text-left text-3xl font-medium text-black  tracking-wider">
                    id 
                  </th>
                  <th className="px-6 py-3 text-left text-3xl font-medium text-black  tracking-wider">
                    Story Name
                  </th>
                  <th className="px-6 py-3 text-left text-3xl font-medium text-black  tracking-wider">
                    Story Info
                  </th>
                  <th className="px-6 py-3 text-left text-3xl font-medium text-black  tracking-wider">
                    Connected Database
                  </th>
                  <th className="px-6 py-3 text-left text-3xl font-medium text-black  tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-3xl font-medium text-black  tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-600">
                {currentItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-2xl">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-2xl leading-5 text-left text-gray-900">{item.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-2xl leading-5 text-center text-gray-900">{item.storyName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-2xl leading-5 text-center text-gray-900">{item.storyInfo}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-2xl leading-5 text-center text-gray-900">{item.connectedDatabase}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-2xl leading-5 text-center text-gray-900">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex space-x-4">
                        <button className="text-blue-500 hover:text-blue-700">
                          <MdEdit size={24} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <MdDelete size={24} />
                        </button>
                        <button className="text-green-500 hover:text-green-700">
                          <MdVisibility size={24} />
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
      {/* {renderPagination()} */}
      <div className="flex justify-center items-center bg-gray-800 py-2 rounded-md">
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-l-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">1</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">2</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">3...</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">11</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">12</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">13</button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    </div>
  );
}

export default Table;

