// import React from 'react'
// import { MdDashboard } from "react-icons/md";
// import { IoMdPerson } from "react-icons/io";
// import { BsPostcard } from "react-icons/bs";
// import { FaSearchengin } from "react-icons/fa6";
// import { FaDatabase } from "react-icons/fa";
// import { RiDashboardHorizontalLine } from "react-icons/ri";
// import { IoSearch } from "react-icons/io5";





// const Dashboard = () => {
//   return (
//      <div className="flex h-screen">
//     <div className="bg-gray-100 p-5 flex flex-col gap-4 w-1/4">
//       <h2 className="text-3xl text-bold ml-10 text-black ">LOGO</h2>
//       <p className='text-gray-400 ml-10 mt-7 text-1xl'>Overview</p>
//       <div className="flex gap-2 items-center ml-12 mt-2">
//         {/* <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0 1 1 0 002 0zm-9 1a1 1 0 10-2 0 1 1 0 002 0z"
//             clipRule="evenodd"
//           />
//         </svg> */}
//         <MdDashboard />
//         <span className="font-poppins text-[18px] font-normal leading-[27px]">Dashboard</span>

//       </div>
//       <div className="flex gap-2 items-center ml-12 mt-5">
//       <IoMdPerson />

//         <span className="font-poppins text-[18px] font-normal leading-[27px]">Employees</span>
//       </div>
//       <div className="flex gap-2 items-center ml-12 mt-5 ">
//       <BsPostcard />

//         <span className="font-poppins text-[18px] font-normal leading-[27px]">Story boards</span>
//       </div>

//       <div className="flex gap-2 items-center ml-12 mt-5 ">
//       <FaSearchengin />


//         <span className="font-poppins text-[18px] font-normal leading-[27px]">Investigation </span>
//       </div>
//       <div className="flex gap-2 items-center ml-12 mt-5 ">
//       <FaDatabase />


//         <span className="font-poppins text-[18px] font-normal leading-[27px]">Complimentary Datasets </span>
//       </div>
//       <div className="flex gap-2 items-center ml-12 mt-5 ">
//       <RiDashboardHorizontalLine />


//         <span className="font-poppins text-[18px] font-normal leading-[27px]">Integrations </span>
//       </div>

//       <hr className="border-t border-gray-300 w-full mt-28" />


//       <div className="flex gap-2 items-center ml-3 mt-5 ">
//       <img
//     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU'
//     className="w-[55px] h-[57px] rounded-full " // Adjusted size and made it rounded
//     alt="Profile"
//   />
//         <span className="font-poppins text-[20px] font-normal leading-[30px] text-center ml-7 "> Pritam Ghosh</span>
     
//         <div className="rounded-full border border-gray-300 p-1">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-5 w-5 text-gray-500"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//     >
//       <path d="M10 2a2 2 0 100 4 2 2 0 000-4zm0 8a2 2 0 100 4 2 2 0 000-4zm0 8a2 2 0 100 4 2 2 0 000-4z" />
//     </svg>
//   </div>
//       </div>

     

//     </div>
    



//     <div className=" p-6">
//     <div className="flex justify-between items-center w-full">
//   <h2 className="text-2xl">Story boards</h2>
//   <p className="text-left">
//     <IoSearch />
//   </p>
// </div>
// </div>

    
// </div>

  
//   )
// }

// export default Dashboard
import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { BsPostcard } from "react-icons/bs";
import { FaSearchengin } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu } from 'react-icons/ai'; // Importing menu icon
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCalendar3 } from "react-icons/bs";
import Table from './Table';



const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar state
  const [entries, setEntries] = useState(25);


  const currentDate = new Date().toLocaleDateString('en-GB'); // This will give you DD/MM/YYYY format


  const handleChange = (event) => {
    setEntries(parseInt(event.target.value));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-100 p-5 flex flex-col gap-4 transition-all duration-300 ${isOpen ? 'w-1/5' : 'w-16'}`}>
        {/* Logo and Toggle Icon */}
        <div className="flex items-center">
        <AiOutlineMenu 
            className={"cursor-pointer text-2xl  transition-all duration-300 "} 
            onClick={toggleSidebar} 
          />
          <h2 className={`text-3xl font-bold text-black ml-3 ${isOpen ? 'block' : 'hidden'}`}>LOGO</h2>
          
        </div>
        <p className={`text-gray-400 mt-7 ml-9 text-lg ${isOpen ? 'block' : 'hidden'}`}>Overview</p>

        {/* Sidebar Menu Items */}
        <div className="flex gap-2 items-center mt-3 ">
          <MdDashboard />
          <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <IoMdPerson />
          <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Employees</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <BsPostcard />
          <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Story boards</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <FaSearchengin />
          <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Investigation</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <FaDatabase />
          <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Complimentary Datasets</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <RiDashboardHorizontalLine />
          <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Integrations</span>
        </div>

        <hr className="border-t border-gray-300 w-full mt-28" />

        <div className={`flex gap-2 items-center ml-3 mt-5 ${isOpen ? 'block' : 'hidden'}`} >
      <img
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU'
    className={`w-[55px] h-[57px] rounded-full${isOpen ? 'block' : 'hidden'}`} // Adjusted size and made it rounded
    alt="Profile"
  />
  <span className="font-poppins text-[20px] font-normal leading-[30px] text-center ml-7 "> Pritam Ghosh</span>

  
  
  </div>
  


        




        
      </div>

      {/* Main Content */}
      {/* <div className={`flex-1 p-6 transition-all duration-300 ${isOpen ? 'ml-0' : 'ml-0 w-full'}`}>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-2xl">Story boards</h2>
          <span className="text-left mr-20 ml-96 flex">
            <IoSearch />
          </span>
         <span className='mr-44'><IoIosNotificationsOutline  /></span>

        </div>
      </div> */}
      {/* <div className={`flex-1 p-6 transition-all duration-300 ${isOpen ? 'ml-0' : 'ml-0 w-full'}`}>
  <div className="flex justify-between items-center w-full">
    <h2 className="text-2xl">Story boards</h2>
    <span className="flex items-center">
      <IoSearch className="mr-4" /> 
      <IoIosNotificationsOutline />
    </span>
    <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
  + Add Story
</button>
  </div>
</div> */}
<div className={`flex-1 p-6 transition-all duration-300 ${isOpen ? 'ml-0' : 'ml-0 w-full'}`}>
  <div className="flex justify-between items-center w-full">
    <h2 className="text-2xl">Story boards</h2>
    <div className="flex items-center space-x-4"> {/* Add space-x-4 for horizontal spacing */}
      <IoSearch className="text-2xl mr-4" /> {/* Increase icon size */}
      <IoIosNotificationsOutline className="text-2xl" /> {/* Increase icon size */}
      <button className="bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300"> {/* Apply border-radius */}
        + Add Story
      </button>
    </div>
  </div>
  <hr className="border-t border-gray-300 w-100 mt-8" />
  <div className="flex justify-between items-center mt-12 ml-8">
      <p className='font-bold text-3xl font-serif'>
        Welcome Back, Pritam
      </p>
      <div className="flex items-center">
        <BsCalendar3 className="text-5xl mr-2" />
        <span className="text-2xl">{currentDate.replace(/\//g, '.')}</span> {/* Replace / with . */}
      </div>
    </div>
    <div className="flex gap-4 mt-12 ml-8">
      <div className="bg-gray-800 p-4 rounded-[15px] shadow-md w-72  h-44">
        <h2 className="text-white  ml-3  text-3xl mb-7 w-13 ">Sales Board</h2>
        <div className="flex items-center gap-2">
          <span className="text-white text-3xl font-bold ml-3 ">23</span>
         
        </div>
        <div className="flex mt-4 ml-24">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">
            +20
          </div>
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        </div>
      </div>
      {/* <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <h2 className="text-white font-bold text-lg mb-2">Appointments</h2>
        <div className="flex items-center gap-2">
          <span className="text-white text-3xl font-bold">43</span>
          <div className="bg-white text-black font-bold rounded-full px-2 py-1">
            +40
          </div>
        </div>
        <div className="flex mt-4">
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        </div>
      </div> */}
            <div className="bg-gray-800 p-4 rounded-[15px] shadow-md w-72 h-44">
        <h2 className="text-white  ml-3  text-3xl mb-7 w-13 ">Appointments</h2>
        <div className="flex items-center gap-2">
          <span className="text-white text-3xl font-bold ml-3 ">43</span>
         
        </div>
        <div className="flex mt-4 ml-24">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">
            +20
          </div>
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        </div>
      </div>






      {/* <div className="bg-gray-800 p-4 rounded-md shadow-md">
 <h2 className="text-white font-bold text-lg mb-2">Leads</h2>
        <div className="flex items-center gap-2">
          <span className="text-white text-3xl font-bold">12</span>
         
        </div>
        <div className="flex mt-4">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">
            +10
          </div>
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        </div>
      </div> */}

        <div className="bg-gray-800 p-4 rounded-[15px] shadow-md w-96 h-44">
        <h2 className="text-white font-bold ml-3  text-3xl mb-7 w-13 ">Information of Sales</h2>
        <div className="flex items-center gap-2">
          <span className="text-white text-3xl font-bold ml-3 ">43</span>
         
        </div>
        <div className="flex mt-4 ml-48">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">
            +20
          </div>
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        </div>
      </div>


      <div className="bg-gray-800 p-4 rounded-[15px] shadow-md w-[475px] h-44">
        <h2 className="text-white  ml-3  text-3xl mb-7 w-15 ">Information of Appointments</h2>
        <div className="flex items-center gap-2">
          <span className="text-white text-3xl font-bold ml-3 ">43</span>
         
        </div>
        <div className="flex mt-4 ml-64">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">
            +20
          </div>
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
          <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        </div>
      </div>


      


      
      
      


      





    </div>

    <div className="flex gap-2 ml-10 mt-7 text-2xl">
      <span>Show</span>
      <select className="border rounded" value={entries} onChange={handleChange}>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <span className='text-2xl '>entries</span>
    </div>



    <Table/>




</div>





      
    </div>
  );
}

export default Dashboard;
