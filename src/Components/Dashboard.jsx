
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
  import { Link, useNavigate } from 'react-router-dom';


  const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true); // Sidebar state
    const [entries, setEntries] = useState(25);
    const navigate = useNavigate();


    const handleAddStory = () => {
      navigate('/add-story');
    };
    const handleNavigation = () => {
      navigate('/'); // Assuming your dashboard route is '/dashboard'
  };

  const StoryBoard = () => {
    navigate('/storyboards'); // Assuming your dashboard route is '/dashboard'
};

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
          <div className="flex gap-2 items-center mt-3 cursor-pointer" onClick={handleNavigation}>
            <MdDashboard />
            <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
        </div>
          <div className="flex gap-2 items-center mt-5">
            <IoMdPerson />
            <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Employees</span>
          </div>
          <div className="flex gap-2 items-center mt-5 cursor-pointer" onClick={StoryBoard}> 
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







        
        <div className={`flex-1 p-6 transition-all duration-300 ${isOpen ? 'ml-0' : 'ml-0 w-full'}`}>
  <div className="flex justify-between items-center w-full">
    <h2 className="text-2xl">Story Boards</h2>
    <div className="flex items-center space-x-4"> {/* Add space-x-4 for horizontal spacing */}
      <IoSearch className="text-2xl mr-4" /> {/* Increase icon size */}
      <IoIosNotificationsOutline className="text-2xl" /> {/* Increase icon size */}
      <Link to="/add-story">
        <button className="bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
          + Add Story
        </button>
      </Link>
    </div>
  </div>

  <hr className="border-t border-gray-300 w-full mt-8" /> {/* Changed w-100 to w-full */}

  {/* 2nd section */}
  <div className="flex flex-col md:flex-row justify-between items-center mt-12 mx-auto max-w-6xl px-4"> {/* Added max-w-6xl and px-4 */}
    <p className='font-bold text-3xl font-serif mb-2 md:mb-0'>
      Welcome Back, Pritam
    </p>
    <div className="flex items-center">
      <BsCalendar3 className="text-5xl mr-3" />
      <span className="text-2xl">{currentDate.replace(/\//g, '.')}</span> {/* Replace / with . */}
    </div>
  </div>



  <div className="flex flex-col md:flex-row gap-4 mt-12 mx-auto max-w-6xl px-4"> {/* Added max-w-6xl and px-4 */}
    <div className="bg-gray-800 p-4 rounded-[15px] shadow-md w-full md:w-72 h-44">
      <h2 className="text-white ml-3 text-3xl mb-7">Sales Board</h2>
      <div className="flex items-center gap-2">
        <span className="text-white text-3xl font-bold ml-3">23</span>
      </div>
      <div className="flex mt-4 ml-24">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">+20</div>
        <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
      </div>
    </div>
    <div className="bg-gray-800 p-4 rounded-[15px] shadow-md w-full md:w-72 h-44">
      <h2 className="text-white ml-3 text-3xl mb-7">Appointments</h2>
      <div className="flex items-center gap-2">
        <span className="text-white text-3xl font-bold ml-3">43</span>
      </div>
      <div className="flex mt-4 ml-24">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">+20</div>
        <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
      </div>
    </div>
    <div className="bg-gray-800 p-4 rounded-[15px] shadow-md w-full md:w-96 h-44">
      <h2 className="text-white font-bold ml-3 text-3xl mb-7">Information of Sales</h2>
      <div className="flex items-center gap-2">
        <span className="text-white text-3xl font-bold ml-3">43</span>
      </div>
      <div className="flex mt-4 ml-48">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">+20</div>
        <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
        <img src="https://via.placeholder.com/30" alt="Profile Pic" className="rounded-full" />
      </div>
    </div>
    <div className="bg-gray-800 p-4 rounded-[15px] shadow-md w-full md:w-[475px] h-44">
      <h2 className="text-white ml-3 text-3xl mb-7">Information of Appointments</h2>
      <div className="flex items-center gap-2">
        <span className="text-white text-3xl font-bold ml-3">43</span>
      </div>
      <div className="flex mt-4 ml-64">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">+20</div>
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
    <span className='text-2xl'>entries</span>
  </div>
  
  <Table />
</div>
</div>
    );
  }
  export default Dashboard;
