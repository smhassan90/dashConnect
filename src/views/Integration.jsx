// // import React from 'react'

// // import { IoSearch } from 'react-icons/io5'
// // import imag4 from '../assests/image4.png' 
// // import imag5 from '../assests/image5.png'
// // import Bar from '../Reuseable/Bar';
// // const integrations = [
// //         {
// //           name: 'Acuity',
// //           icon:'https://static.wixstatic.com/media/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png/v1/fill/w_220,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png',
// //           description: 'You can setup your acuity account as source of data here',
// //         },
// //         {
// //           name: 'Xero',
// //           icon: imag5 ,
// //           description: 'You can set up your Xero account as a source of data here.',
// //         },
// //         {
// //           name: 'MYOB',
// //           icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
// //           description: 'You can set up your QuickBooks account as a source of data here.',
// //         },
// //         {
// //           name: 'MYOB',
// //           icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
// //           description: 'You can set up your Square account as a source of data here.',
// //         },
// //       ];
      

// // function Integration() {
// //   return (
// //     <div className="">

    
// //         {/* <Bar title="Integeration"/> */}
// //         <Bar title="Integration" type="search" />

       
// //         <div className="mt-10 bg-custom-gray text-white p-4 rounded-lg  h-[200px] flex items-center mobile:w-80 mobile:h-20">
// // {/* Search Bar Container */}
// // <div className=" w-full h-[35px]  mobile:w-full">
// //   <input
// //     type="text"
// //     className="bg-white rounded-[12px]  w-full h-full pl-10 pr-20 mobile:w-full"
// //     placeholder="Search Integration..."
// //   />
// //   <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
// //     <IoSearch className="text-2xl" />
// //   </span>
// // </div>

// // {/* Image */}
// // <img
// //   src="https://cdn-bleeo.nitrocdn.com/AaeMEdZeBsunREidvDPNNmqpWUCXDbiq/assets/images/optimized/rev-b3c35fe/www.lazzarospallanzani.it/wp-content/uploads/2021/02/dolori-smart-working-blog-copertina-400x250.jpg"
// //   alt="Integration"
// //   className="ml-16  h-[250px] rounded-lg mobile:hidden" 
// // />
// // </div> 


// // <div class="flex gap-7 mt-10 ml-5">
// //   <p class="category group cursor-pointer relative pb-1 text-gray-600 hover:text-blue-500">
// //       ALL
// //       <span class="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
// //   </p>
 
// // </div>
// // <hr className="mt-2 border-t border-gray-500" /> {/* Horizontal line with margin */}


// // <div className="">
// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
// //       {integrations.map((integration, index) => (
// //         <div key={index} className="bg-gray-700 rounded-lg shadow-md  text-white h-48  flex flex-col  mt-4 mobile:w-72 mobile:ml-5" >
// //     <div className="flex items-center mb-2">
// //   <img
// //     src={integration.icon}
// //     alt={`${integration.icon} Icon`}
// //     className="w-32 h-32 mt-5"  
// //   />
// //   <div className="ml-5 w-full m-auto "> 
// //     <h3 className="text-lg text-left  mb-1 font-sans font-bold">Integrate With {integration.name}</h3>
// //     <p className="text-sm text-left mt-3 text-white"> 
// //       {integration.description}.

// //     </p>
    
// //   </div>
  
// // </div>
// // <button className= "  mr-3 text-right   text-white font-bold  rounded-md text-sm">
// //             View Now >>>
// //           </button> 
          
           
// //         </div>
// //       ))}
// //     </div>
// //   </div>




        
    
// //   </div>
// //   )
// // }

// // export default Integration
// // import React from 'react';
// // import { IoSearch } from 'react-icons/io5';
// // import imag5 from '../assests/image5.png';
// // import Bar from '../Reuseable/Bar';

// // const integrations = [
// //   {
// //     name: 'Acuity',
// //     icon:
// //       'https://static.wixstatic.com/media/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png/v1/fill/w_220,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png',
// //     description: 'You can setup your acuity account as source of data here',
// //   },
// //   {
// //     name: 'Xero',
// //     icon: imag5,
// //     description: 'You can set up your Xero account as a source of data here.',
// //   },
// //   {
// //     name: 'MYOB',
// //     icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
// //     description: 'You can set up your QuickBooks account as a source of data here.',
// //   },
// //   {
// //     name: 'MYOB',
// //     icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
// //     description: 'You can set up your Square account as a source of data here.',
// //   },
// // ];

// // function Integration() {
// //   return (
// //     <div className="">
// //       {/* <Bar title="Integeration"/> */}
// //       <Bar title="Integration" type="search" />

// //       {/* Search Bar Container */}
// //       <div className="mt-10 bg-custom-gray text-white p-4 rounded-lg h-[200px] flex items-center mobile:w-80 mobile:h-20">
// //         <div className="w-full h-[35px] mobile:w-full relative">
// //           <input
// //             type="text"
// //             className="bg-white rounded-[12px] w-full h-full pl-10 pr-20 mobile:w-full"
// //             placeholder="Search Integration..."
// //           />
// //           <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
// //             <IoSearch className="text-2xl" />
// //           </span>
// //         </div>

// //         {/* Image */}
// //         <img
// //           src="https://cdn-bleeo.nitrocdn.com/AaeMEdZeBsunREidvDPNNmqpWUCXDbiq/assets/images/optimized/rev-b3c35fe/www.lazzarospallanzani.it/wp-content/uploads/2021/02/dolori-smart-working-blog-copertina-400x250.jpg"
// //           alt="Integration"
// //           className="ml-16 h-[250px] rounded-lg mobile:hidden"
// //         />
// //       </div>

// //       <div className="flex gap-7 mt-10 ml-5">
// //         <p className="category group cursor-pointer relative pb-1 text-gray-600 hover:text-blue-500">
// //           ALL
// //           <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
// //         </p>
// //       </div>
// //       <hr className="mt-2 border-t border-gray-500" /> {/* Horizontal line with margin */}

// //       <div className="mt-2">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
// //           {integrations.map((integration, index) => (
// //             <div
// //               key={index}
// //               className="bg-gray-700 rounded-lg shadow-md text-white h-48 flex flex-col mt-4 mobile:w-72 mobile:ml-5"
// //             >
// //               <div className="flex items-center mb-2">
// //                 <img
// //                   src={integration.icon}
// //                   alt={`${integration.icon} Icon`}
// //                   className="w-32 h-32 mt-5"
// //                 />
// //                 <div className="ml-5 w-full m-auto">
// //                   <h3 className="text-lg text-left mb-1 font-sans font-bold">
// //                     Integrate With {integration.name}
// //                   </h3>
// //                   <p className="text-sm text-left mt-3 text-white">
// //                     {integration.description}.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className=" mt-auto px-4 pb-4">
// //                 {/* Button with equal spacing */}
// //                 <button className="  mr-12 text-right text-white font-bold rounded-md text-sm">
// //                   View Now >>>
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Integration;
// import React from 'react';
// import { IoSearch } from 'react-icons/io5';
// import imag5 from '../assests/image5.png';
// import Bar from '../Reuseable/Bar';
// import image from "../assests/dolori-smart-working-blog-copertina-400x250-removebg-preview.png"

// const integrations = [
//   {
//     name: 'Acuity',
//     icon:
//       'https://static.wixstatic.com/media/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png/v1/fill/w_220,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png',
//     description: 'You can setup your acuity account as source of data here',
//   },
//   {
//     name: 'Xero',
//     icon: imag5,
//     description: 'You can set up your Xero account as a source of data here.',
//   },
//   {
//     name: 'MYOB',
//     icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
//     description: 'You can set up your QuickBooks account as a source of data here.',
//   },
//   {
//     name: 'MYOB',
//     icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
//     description: 'You can set up your Square account as a source of data here.',
//   },
// ];

// function Integration() {
//   return (
//     <div className="">
//       <Bar title="Integration" type="search" />

//       {/* Search Bar Container */}
//       <div className="mt-20 bg-custom-gray text-white p-4 rounded-lg h-[200px] flex items-center mobile:w-full mobile:h-20">
//         <div className="w-full h-[35px] mobile:w-[200px] relative ">
//           <input
//             type="text"
//             className="bg-white rounded-[12px] w-full h-full pl-10 pr-20 mobile:w-full"
//             placeholder="Search Integration..."
//           />
//           <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
//             <IoSearch className="text-2xl" />
//           </span>
//         </div>

//         {/* Image */}
//         <img
//           src={image}
//           alt="Integration"
//           className="ml-16 h-[260px] mr-5 mb-20 rounded-lg mobile:hidden"
//         />
//       </div>

//       <div className="flex gap-7 mt-10 ml-5 mobile:w-full">
//         <p className="category group cursor-pointer relative pb-1 text-gray-600 hover:text-blue-500">
//           ALL
//           <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//         </p>
//       </div>
//       <hr className="mt-2 border-t border-gray-500" /> {/* Horizontal line with margin */}

//       <div className="mt-3">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
//           {integrations.map((integration, index) => (
//             <div
//               key={index}
//               className="bg-gray-700 rounded-lg shadow-md text-white h-48 flex flex-col mt-4 mobile:w-72 mobile:ml-5"
//             >
//               <div className="flex items-center mb-2">
//                 <img
//                   src={integration.icon}
//                   alt={`${integration.icon} Icon`}
//                   className="w-32 h-32 mt-8 ml-10"
//                 />
//                 <div className="ml-5 w-full m-auto">
//                   <h3 className="text-lg text-left mb-1 font-sans font-bold">
//                     Integrate With {integration.name}
//                   </h3>
//                   <p className="text-sm text-left mt-3 text-white">
//                     {integration.description}.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-auto px-4 pb-4 flex justify-end">
//                 {/* Button aligned to the right */}
//                 <button className="text-white font-bold rounded-md text-sm">
//                   View Now >>>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Integration;
// import React from 'react';
// import { IoSearch } from 'react-icons/io5';
// import imag5 from '../assests/image5.png';
// import Bar from '../Reuseable/Bar';
// import image from "../assests/dolori-smart-working-blog-copertina-400x250-removebg-preview.png";

// const integrations = [
//   {
//     name: 'Acuity',
//     icon:
//       'https://static.wixstatic.com/media/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png/v1/fill/w_220,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png',
//     description: 'You can setup your acuity account as source of data here',
//   },
//   {
//     name: 'Xero',
//     icon: imag5,
//     description: 'You can set up your Xero account as a source of data here.',
//   },
//   {
//     name: 'MYOB',
//     icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
//     description: 'You can set up your QuickBooks account as a source of data here.',
//   },
//   {
//     name: 'MYOB',
//     icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
//     description: 'You can set up your Square account as a source of data here.',
//   },
// ];

// function Integration() {
//   return (
//     <div className="mobile:w-[400px] mobile:ml-20">
//       <Bar title="Integration" type="search" />

//       {/* Search Bar Container */}
//       <div className="mt-12 bg-custom-gray text-white p-4 rounded-lg h-[200px] flex items-center mobile:h-20 mobile:w-[
//       400px] ">
//         <div className="w-full h-[35px] mobile:w-[400px] relative">
//           <input
//             type="text"
//             className="bg-white rounded-[12px] w-full h-full pl-10 pr-20 mobile:w-full"
//             placeholder="Search Integration..."
//           />
//           <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
//             <IoSearch className="text-2xl" />
//           </span>
//         </div>

//         {/* Image */}
//         <img
//           src={image}
//           alt="Integration"
//           className="ml-16  mb-16 h-[260px] rounded-lg mobile:hidden mobile:w-36 mobile:h-36"
//         />
//       </div>

//       {/* Category filter */}
//       <div className="flex gap-7 mt-10 ml-5  ">
//         <p className="mobile:w-[700px] category group cursor-pointer relative pb-1 text-gray-600 hover:text-blue-500">
//           ALL
//           <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//         </p>
//       </div>

//       <hr className="mt-2 border-t border-gray-500 mobile:w-[500px`]" /> {/* Horizontal line with margin */}

//       <div className="mt-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
//           {integrations.map((integration, index) => (
//             // <div
//             //   key={index}
//             //   className="bg-gray-700 rounded-lg shadow-md text-white h-48 flex flex-col mt-4 mobile:w-full mobile:mb-4"
//             // >
// <div
//   key={index}
//   className="bg-cover bg-center text-white h-48 flex flex-col mt-4 mobile:w-full mobile:mb-4"
//   style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/geometric-dark-message-board-wallpaper-with-copy-space-modern-designs_796268-123.jpg')" }}
// >

//               <div className="flex items-center mb-2">
//                 <img
//                   src={integration.icon}
//                   alt={`${integration.icon} Icon`}
//                   className="w-32 h-32 mt-8 ml-2
//                   mobile:w-24 mobile:h-24"
//                 />
//                 <div className="ml-5 w-full">
//                   <h3 className="text-lg text-left mb-1 font-sans font-bold">
//                     Integrate With {integration.name}
//                   </h3>
//                   <p className="text-sm text-left mt-3 text-white">
//                     {integration.description}.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-auto px-4 pb-4 flex justify-end">
//                 {/* Button aligned to the right */}
//                 <button className=" bg-blue-500 w-20 text-white font-bold rounded-md text-sm">
//                   Connect 
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Integration;
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import imag5 from '../assests/image5.png';
import Bar from '../Reuseable/Bar';
import image from '../assests/dolori-smart-working-blog-copertina-400x250-removebg-preview.png';

const integrations = [
  {
    name: 'Acuity',
    icon:
      'https://static.wixstatic.com/media/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png/v1/fill/w_220,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png',
    description: 'You can setup your acuity account as source of data here',
  },
  {
    name: 'Xero',
    icon: imag5,
    description: 'You can set up your Xero account as a source of data here.',
  },
  {
    name: 'MYOB',
    icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
    description: 'You can set up your QuickBooks account as a source of data here.',
  },
  {
    name: 'MYOB',
    icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
    description: 'You can set up your Square account as a source of data here.',
  },
];

function Integration() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="mobile:w-[400px] mobile:ml-20">
      <Bar title="Integration" type="search" />

      {/* Search Bar Container */}
      <div className="mt-12 bg-custom-gray text-white p-4 rounded-lg h-[200px] flex items-center mobile:h-20 mobile:w-[400px]">
        <div className="w-full h-[35px] mobile:w-[400px] relative">
          <input
            type="text"
            className="bg-white rounded-[12px] w-full h-full pl-10 pr-20 mobile:w-full"
            placeholder="Search Integration..."
          />
          <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
            <IoSearch className="text-2xl" />
          </span>
        </div>

        {/* Image */}
        <img
          src={image}
          alt="Integration"
          className="ml-16 mb-16 h-[260px] rounded-lg mobile:hidden mobile:w-36 mobile:h-36"
        />
      </div>

      {/* Integrations List */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className="bg-cover bg-center text-white h-48 flex flex-col mt-4 mobile:w-full mobile:mb-4"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-vector/geometric-dark-message-board-wallpaper-with-copy-space-modern-designs_796268-123.jpg')",
            }}
          >
            <div className="flex items-center mb-2">
              <img
                src={integration.icon}
                alt={`${integration.icon} Icon`}
                className="w-32 h-32 mt-8 ml-2 mobile:w-24 mobile:h-24"
              />
              <div className="ml-5 w-full">
                <h3 className="text-lg text-left mb-1 font-sans font-bold">
                  Integrate With {integration.name}
                </h3>
                <p className="text-sm text-left mt-3 text-white">
                  {integration.description}.
                </p>
              </div>
            </div>
            <div className="mt-auto px-4 pb-4 flex justify-end">
              <button
                className="bg-blue-500 w-20 text-white font-bold rounded-md text-sm"
                onClick={handleOpenModal}
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className=" ml-36 mt-24 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96 relative text-center">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-lg text-center font-bold mb-4">Connect Integration</h2>
            <button className="text-center bg-green-500 text-white px-4 py-2 rounded-md mr-4">
              Test
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Connect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Integration;
