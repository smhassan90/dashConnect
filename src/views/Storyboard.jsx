import React from 'react'

  import { IoSearch } from "react-icons/io5";
  import { SlArrowDown } from "react-icons/sl";
  import { LineChart } from '@mui/x-charts/LineChart';


function Storyboard() {
  return (
    <div className="flex">
    <div className="flex-1 p-4"> {/* Take remaining space for content */}
      {/* Descriptive text */}
      <p className="text-center text-black mt-4 sm:mt-5 text-base sm:text-lg px-2 sm:px-16">
        Ask a data question, check the SQL, add it to your model
      </p>
  
      {/* Centered Search Input */}
      <div className="mb-4 mt-5 relative flex justify-center w-96 mx-auto">
        <input
          type="text"
          className="w-full p-2 pl-10 pr-3 border rounded-[12px] focus:outline-none"
          placeholder="Search a Metric..."
        />
        <IoSearch className="absolute left-3 top-2 text-xl sm:text-2xl text-gray-500" />
      </div>
  
      {/* Appointment Info */}
      <div className="border p-4 rounded-[12px] h-24 mt-7 flex flex-col justify-between mb-5">
        <div className="flex justify-between items-center"> {/* Flex container for title and button */}
          <div>
            <span className="font-bold text-lg">How many appointments do we have?</span>
            <p className="text-xl font-semibold mt-2">20</p>
          </div>
          <CustomButton text="+ Add" />
        </div>
      </div>
  
      {/* Additional Content Section */}
      <div className='flex flex-col sm:flex-row justify-between items-start mt-10'>
        {/* Appointments Chart */}
        <div className="w-full sm:w-[700px] p-4 h-[330px] bg-white rounded-[12px] shadow-md mb-5 border hover:border-blue-500 transition-all duration-300"> {/* Adjusted width */}
          <div className='flex justify-between items-center'>
            <p className="text-base sm:text-lg">Appointments</p>
            <p className='mr-10 flex items-center whitespace-nowrap text-sm sm:text-base'>
              This Month <span className="ml-1"><SlArrowDown /></span>
            </p>
          </div>
  
          <div className="w-full h-full">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10], showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' }, show: false }]}
              yAxis={[{ showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' } }]}
              series={[{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: '#007bff' }]}
              width={window.innerWidth < 640 ? window.innerWidth - 40 : 700} // Adjusted width
              height={300}
              sx={{
                '& .MuiAxis-root': {
                  display: 'none',
                },
              }}
            />
          </div>
        </div>
  
        {/* SQL Statement Section */}
        <div className="w-full sm:w-[280px] mb-12 h-[330px] p-4 bg-white rounded-[12px] shadow-md border hover:border-blue-500 transition-all duration-300 ml-5">
          <div className='flex justify-between items-center'>
            <p className='h-10 flex items-center whitespace-nowrap text-sm sm:text-base'>
              SQL Statement <span className="ml-1"><SlArrowDown /></span>
            </p>
            <button className='w-20 h-9 bg-slate-400 rounded-[16px]'>Re-run</button>
          </div>
          <hr className="border-t border-gray-300 mt-2" />
          <p className='mt-4 text-sm sm:text-base'>
            CREATE TABLE IF NOT EXISTS Customer (<br />
            CustID int NOT NULL,<br />
            Name varchar,<br />
            Email varchar,<br />
            DOB date,<br />
            CONSTRAINT customer PRIMARY KEY (CustID)<br />
            )
          </p>
        </div>
      </div>
  
      {/* New Content Section */}
      <div className="ml-1 mr-5 w-full mb-4 h-[800px] p-4 bg-white rounded-[12px] shadow-md mt-5 border hover:border-blue-500 transition-all duration-300">
        <div className='flex justify-between items-center'>
          <p className="text-base sm:text-lg">View all the answers to the questions you have asked.</p>
         <CustomButton text="Close" /> 
        </div>
  
        {/* First LineChart */}
        <div className="w-full p-4 bg-white rounded-[12px] shadow-md mt-5 border hover:border-blue-500 transition-all duration-300">
          <div className='flex justify-between items-center'>
            <p className="text-base sm:text-lg">Appointments</p>
            <p className='mr-10 flex items-center whitespace-nowrap text-sm sm:text-base'>
              This Month <span className="ml-1"><SlArrowDown /></span>
            </p>
          </div>
  
          <div className="w-auto">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10], showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' }, show: false }]}
              yAxis={[{ showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' } }]}
              series={[{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: '#007bff' }]}
              width={window.innerWidth < 640 ? window.innerWidth - 40 : 900} // Adjusted width
              height={250} // Adjusted height
              sx={{
                '& .MuiAxis-root': {
                  display: 'none',
                },
              }}
            />
          </div>
        </div>
  
        {/* Second LineChart */}
        <div className="w-full p-4 bg-white rounded-[12px] shadow-md mt-14 border hover:border-blue-500 transition-all duration-300">
          <div className='flex justify-between items-center'>
            <p className="text-base sm:text-lg">Appointments</p>
            <p className='mr-10 flex items-center whitespace-nowrap text-sm sm:text-base'>
              This Month <span className="ml-1"><SlArrowDown /></span>
            </p>
          </div>
  
          <div className="w-full h-full">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10], showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' }, show: false }]}
              yAxis={[{ showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' } }]}
              series={[{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: '#82e0aa' }]}
              width={window.innerWidth < 640 ? window.innerWidth - 40 : 900} // Adjusted width
              height={250} // Adjusted height
              sx={{
                '& .MuiAxis-root': {
                  display: 'none',
                },
              }}
            />
          </div>
        </div>  
      </div>
    </div>
  </div>
  )
}

export default Storyboard