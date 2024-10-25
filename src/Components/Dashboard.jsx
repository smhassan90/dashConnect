
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (

<div className="overflow-hidden"> 
<div className="flex">
  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
  <div className="flex-1 p-4 sm:ml-0 ml-[45px]"> {/* Adds 45px margin-left only on mobile */}
    
    {/* Bar Component */}
    <Bar title="Story Board" />


      
     <div className="flex flex-col md:flex-row justify-between items-center mt-4 mx-auto max-w-7xl px-4">
  <p className="text-2xl font-serif m-0 md:mr-4 whitespace-nowrap">
    Welcome Back, Pritam
  </p>
  <div className="flex items-center">
    <BsCalendar3 className="text-xl mr-2" /> {/* Adjusted icon size and margin */}
    <span className="text-xl">{currentDate.replace(/\//g, '.')}</span> {/* Adjusted text size */}
  </div>
</div>







    {/* Dashboard Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mx-auto px-2">
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
    <div className="flex gap-2  mt-7 text-2xl  mx-auto max-w-7xl px-4">
          <span>Show</span>
          <select className="border rounded" value={entries} onChange={handleChange}>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className='text-2xl'>entries</span>
        </div>
      <Table/>
  </div>
    
     

</div>




        

        

       

        
        
        {/* <Table /> */}
       </div>
    
  );
}

export default Dashboard;
