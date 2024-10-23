import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
  import { IoMdPerson } from "react-icons/io";
  import { BsPostcard } from "react-icons/bs";
  import { FaSearchengin } from "react-icons/fa6";
  import { FaDatabase } from "react-icons/fa";
  import { RiDashboardHorizontalLine } from "react-icons/ri";
  import { IoSearch } from "react-icons/io5";
  import { AiOutlineMenu } from 'react-icons/ai'; // Importing menu icon
  import { IoIosNotificationsOutline } from "react-icons/io";
  import { SlArrowDown } from "react-icons/sl";

  import { BsCalendar3 } from "react-icons/bs";
  import Table from './Table';
  import { LineChart } from '@mui/x-charts/LineChart';
//   import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';


  import { Link, useNavigate } from 'react-router-dom';

const Storyboards = () => {
    const [isOpen, setIsOpen] = useState(true); // Sidebar state

    const [sql, setSql] = useState(`
        CREATE TABLE IF NOT EXISTS Customer(
        CustID int NOT NULL,
        Name varchar,
        Email varchar,
        DOB date,
        CONSTRAINT customer PRIMARY KEY
        );
        `);
        const handleReRun = () => {
            // Handle the re-run logic here
            console.log('Re-running SQL statement:', sql);
          };


        const handleSqlChange = (event) => {
            setSql(event.target.value);
          };
      
   
    const navigate =useNavigate();

    const handleNavigation = () => {
        navigate('/'); // Assuming your dashboard route is '/dashboard'
    };

    const storyBoardName = ()=>{
        navigate('/')
    }


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
//       const [metrics, setMetrics] = useState([]);

//   const handleAddMetric = () => {
//     setMetrics([...metrics, { name: 'How Many appointments do we have ?', value: 20 }]);
//   };
  
     
  return (
    <div className="flex h-screen ">
    {/* Sidebar */}
    <div className={`bg-gray-100 p-5 flex flex-col gap-4 transition-all duration-300 
                    ${isOpen ? 'w-64' : 'w-16'} 
                    sm:relative fixed top-0 left-0 h-full z-50 sm:h-auto`}>
        {/* Logo and Toggle Icon */}
        <div className="">
            <AiOutlineMenu
                className="cursor-pointer text-2xl transition-all duration-300"
                onClick={toggleSidebar}
            />  
        </div>
        <h2 className={`text-3xl font-bold text-black ml-3 ${isOpen ? 'block' : 'hidden'}`}>LOGO</h2>

     
        <p className={`text-gray-400 mt-7 text-lg ${isOpen ? 'block' : 'hidden'}`}>Overview</p>

        {/* Sidebar Menu Items */}
        <div className="flex gap-2 items-center mt-3 cursor-pointer" onClick={handleNavigation}>
            <MdDashboard className="text-2xl" />
            <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
            <IoMdPerson className="text-2xl" />
            <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Employees</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
            <BsPostcard className="text-2xl" />
            <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Story boards</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
            <FaSearchengin className="text-2xl" />
            <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Investigation</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
            <FaDatabase className="text-2xl" />
            <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Complimentary Datasets</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
            <RiDashboardHorizontalLine className="text-2xl" />
            <span className={`font-poppins text-lg ${isOpen ? 'block' : 'hidden'}`}>Integrations</span>
        </div>

        <hr className="border-t border-gray-300 w-full mt-28" />

        <div className={`flex gap-2 items-center mt-5 ${isOpen ? 'block' : 'hidden'}`}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU'
                className="w-[55px] h-[57px] rounded-full"
                alt="Profile"
            />
            <span className="font-poppins text-[20px] font-normal leading-[30px] text-center ml-7">Pritam Ghosh</span>
        </div>
    </div>

    {/* Main Content */}
    
    <div className={`flex-1 p-4 sm:p-6 transition-all duration-300 text-center sm:text-left ${isOpen ? 'ml-0' : 'ml-0 w-full'}`}>
  {/* Flex container for the title and action buttons */}
  <div className="flex flex-col sm:flex-row justify-between items-center w-full">
    
    {/* Title - Adjusting text for better visibility */}
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left mb-4 sm:mb-0 break-words w-full px-2 sm:px-10 ml-0 sm:ml-0 md:ml-0 lg:ml-0 mobile:ml-[140px] mobile:text-xl">
  Story Boards > Information of appointments
</h2>


    
    {/* Icon and button container */}
    <div className="flex items-center space-x-2 sm:space-x-4 justify-center sm:justify-end w-full sm:w-auto">
      {/* Search Icon with adjusted size */}
      <IoSearch className="text-xl sm:text-2xl" />
      {/* Notifications Icon with adjusted size */}
      <IoIosNotificationsOutline className="text-xl sm:text-2xl" />
      {/* Add Story button with larger padding for mobile */}
      <Link to="/add-story">
      <button className="bg-black text-white font-bold w-[110px] sm:w-32 py-1.5 px-3 rounded-full hover:bg-gray-800 transition duration-300 text-sm sm:text-base">
  + Add Story
</button>

      </Link>
    </div>
  </div>

  {/* Horizontal line */}
  <hr className="border-t border-gray-300 w-full mt-6" />

  <p className="text-center text-black mt-4 sm:mt-5 text-base sm:text-lg px-2 sm:px-16 text-sm w-full sm:w-auto ml-0 sm:ml-40 w-[300px] ml-[43px] sm:w-auto sm:ml-0">
  Ask a data question, check the SQL, add it to your model
</p>



  <div className="container mx-auto p-4">
    {/* <div className="mb-4 mt-5 relative">
      <input
        type="text"
        className="w-full p-2 pl-10 pr-3 border rounded-[12px] focus:outline-none"
        placeholder="Search a Metric..."
      />
      <IoSearch className="absolute left-3 top-2 text-xl sm:text-2xl text-gray-500" />
    </div> */}
    <div className="mb-4 mt-5 relative sm:w-full sm:ml-35px mobile:w-[250px] mobile:ml-[45px]">
    <input
  type="text"
  className="w-full p-2 pl-10 pr-3 border rounded-[12px] focus:outline-none sm:w-full sm:ml-35px mobile:w-[250px] mobile:ml-[45px]"
  placeholder="Search a Metric..."
/>

  <IoSearch className="absolute left-3 top-2 text-xl sm:text-2xl text-gray-500  sm:w-auto sm:ml-0" />
</div>


<div className="border p-4 w-full rounded-[12px] h-36 mt-7 sm:w-full sm:ml-0 sm:h-36 mobile:w-[330px] mobile:ml-[30px] mobile:h-[180px]">
      <ul>
        <li className="mb-2">
          <span className="font-bold">How Many appointments do we have?</span><br />
          <p className='mt-5'>20</p>
        </li>
      </ul>
      <button className="bg-gray-800 text-white font-bold py-2 px-5 rounded-[12px] mb-4">
        + Add
      </button>
    </div>
  </div>

  <div className='flex flex-col sm:flex-row justify-between items-start'>
    <div className="w-full sm:w-[900px] p-4 bg-white rounded-[12px] shadow-md mt-5 border hover:border-blue-500 transition-all duration-300">
      <div className='flex justify-between items-center'>
        <p className="text-base sm:text-lg">Appointments</p>
        <p className='mr-10 flex items-center whitespace-nowrap text-sm sm:text-base'>
          This Month <span className="ml-1"><SlArrowDown /></span>
        </p>
      </div>

      {/* Adjusted LineChart to be responsive */}
      <div className="w-full">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10], showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' }, show: false }]}
          yAxis={[{ showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' } }]}
          series={[{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: '#007bff' }]}
          width={window.innerWidth < 640 ? window.innerWidth - 40 : 900} // Responsive width based on screen size
          height={300}
          sx={{
            '& .MuiAxis-root': {
              display: 'none',
            },
          }}
        />
      </div>
    </div>

    <div className="w-full sm:w-[400px] p-4 bg-white rounded-[12px] shadow-md mt-5 border hover:border-blue-500 transition-all duration-300">
      <div className='flex justify-between items-center'>
        <p className='mr-10 flex items-center whitespace-nowrap text-sm sm:text-base'>SQL Statement <span className="ml-1"><SlArrowDown /></span></p>
        <button className='w-20 h-12 bg-slate-400 rounded-[16px]'>Re-run</button>
      </div>
      <hr className="border-t border-gray-300 mt-2" />
      <p className='mt-4 text-sm sm:text-base'>CREATE TABLE IF NOT EXISTS Customer ( <br /> CustID int NOT NULL,<br /> Name varchar <br /> Email varchar <br /> DOB date,<br /> CONSTRAINT customer PRIMARY KEY )</p>
    </div>
  </div>
</div>



</div>

 )
}

export default Storyboards;
