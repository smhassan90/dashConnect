
import React, { useState } from 'react';

import { BsCalendar3 } from "react-icons/bs";
import Table from './Table';
import { Link, useNavigate } from 'react-router-dom';
import DashboardCard from "../Reuseable/DashboardCard ";
import Bar from '../Reuseable/Bar';
import Sidebar from '../Reuseable/SIdebar';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [entries, setEntries] = useState(25);
  const navigate = useNavigate();

  const handleAddStory = () => {
    navigate('/add-story');
  };

  const handleNavigation = () => {
    navigate('/'); 
  };

  const StoryBoard = () => {
    navigate('/storyboards'); 
  };

  const currentDate = new Date().toLocaleDateString('en-GB'); 

  const handleChange = (event) => {
    setEntries(parseInt(event.target.value));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
//     <div className=""> {/* Use overflow-hidden here */}
//     <div className='flex'>
//   <Sidebar />
//   <div className='flex-1 p-4'>
//     {/* Bar Component */}
//     <Bar title={"Story Board"} />

//     {/* Dashboard Cards Section */}
//     <div className="flex flex-col md:flex-row gap-4 mt-12 mx-auto max-w-6xl px-4">
//       <DashboardCard 
//         title="Sales Board" 
//         value={23} 
//         additionalCount="+20" 
//         imgSrc="https://via.placeholder.com/30" 
//       />
//       <DashboardCard 
//         title="Appointments" 
//         value={43} 
//         additionalCount="+20" 
//         imgSrc="https://via.placeholder.com/30" 
//       />
//       <DashboardCard 
//         title="Information of Sales" 
//         value={43} 
//         additionalCount="+20" 
//         imgSrc="https://via.placeholder.com/30" 
//       />
//       <DashboardCard 
//         title="Information of Appointments" 
//         value={43} 
//         additionalCount="+20" 
//         imgSrc="https://via.placeholder.com/30" 
//       />
//     </div>
//   </div>
// </div>
<div className="overflow-hidden"> {/* Use overflow-hidden here */}
  <div className='flex'>
    <Sidebar />
    <div className='flex-1 p-4'>
      {/* Bar Component */}
      <Bar title={"Story Board"} />

      {/* Dashboard Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mx-auto  px-2">
        <DashboardCard 
          title="Sales Board" 
          value={23} 
          additionalCount="+20" 
          imgSrc="https://via.placeholder.com/30" 
        />
        <DashboardCard 
          title="Appointments" 
          value={43} 
          additionalCount="+20" 
          imgSrc="https://via.placeholder.com/30" 
        />
        <DashboardCard 
          title="Information of Sales" 
          value={43} 
          additionalCount="+20" 
          imgSrc="https://via.placeholder.com/30" 
        />
        <DashboardCard 
          title="Information of Appointments" 
          value={43} 
          additionalCount="+20" 
          imgSrc="https://via.placeholder.com/30" 
        />
      </div>
    </div>
  </div>




        

        {/* 2nd section */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center mt-12 mx-auto max-w-6xl px-4">
          <p className='font-bold text-3xl font-serif mb-2 md:mb-0'>
            Welcome Back, Pritam
          </p>
          <div className="flex items-center">
            <BsCalendar3 className="text-5xl mr-3" />
            <span className="text-2xl">{currentDate.replace(/\//g, '.')}</span>
          </div>
        </div> */}

       

        {/* <div className="flex gap-2 ml-10 mt-7 text-2xl">
          <span>Show</span>
          <select className="border rounded" value={entries} onChange={handleChange}>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className='text-2xl'>entries</span>
        </div> */}
        
        {/* <Table /> */}
       </div>
    
  );
}

export default Dashboard;
