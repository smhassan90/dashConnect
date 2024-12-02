  import React, { useState } from 'react'
  import { IoClose } from 'react-icons/io5'; // Import the close icon
    import { IoSearch } from "react-icons/io5";
    import { SlArrowDown } from "react-icons/sl";
    import { LineChart } from '@mui/x-charts/LineChart';
  import Bar from '../Reuseable/Bar';


  function Storyboard() {
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
      setIsVisible(false);

      const handleOpen = () => {
        setIsVisible(true);
      };
      
    };
    return (
      <div className="flex">
      <div className="flex-1 "> {/* Take remaining space for content */}
        {/* Descriptive text */}
        <Bar title="Story Board" buttonText="+ Add Story" />
        <p className="text-center text-black mt-5  mobile:w-64  mobile:ml-5 mobile:text-center">
          Ask a data question, check the SQL, add it to your model
        </p>
    
        {/* Centered Search Input */}
        <div className=" mt-5 relative flex justify-center mobile:ml-5 ">
          <input
            type="text"
            className="text-sm text-gray-700 mb-4 border border-gray-300 rounded p-3 w-full max-sm mobile:w-3/4 mobile:ml-11"
            placeholder="Search a Metric..."
          />
          {/* <IoSearch className="absolute left-3 top-2 text-xl sm:text-2xl text-gray-500" /> */}
        </div>
    
        {/* Appointment Info */}
        <div className="border p-4 rounded-[12px] h-24 mt-5 flex flex-col justify-between mb-5 mobile:ml-5 mobile:h-32" >
          <div className="flex justify-between items-center"> {/* Flex container for title and button */}
            <div>
              <span className="font-bold text-lg">How many appointments do we have?</span>
              <p className="text-xl font-semibold mt-2">20</p>
            </div>
            <button
            className=" text-white  bg-black border-2 border-black font-bold py-2 px-4 rounded-[10px]"
          >
            + Add
          </button>
          </div>
        </div>
    
        {/* Additional Content Section */}
        <div className='flex flex-col sm:flex-row justify-between items-start mt-10  gap-8 mobile:ml-5'>
          {/* Appointments Chart */}
          <div className="w-full p-4 h-[330px] bg-white rounded-[12px] shadow-md mb-5 border hover:border-black transition-all duration-300  gap-6"> {/* Adjusted width */}
            <div className='flex justify-between items-center'>
              <p className="text-base sm:text-lg">Appointments</p>
              <p className='mr-10 flex items-center whitespace-nowrap text-sm sm:text-base'>
                This Month <span className="ml-1"><SlArrowDown /></span>
              </p>
            </div>
    
            <div className="w-full">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10], showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' }, show: false }]}
                yAxis={[{ showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' } }]}
                series={[{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: '#007bff' }]}
              // Adjusted width
                height={300}
                sx={{
                  '& .MuiAxis-root': {
                    display: 'none',
                  },
                }}
              />
            </div>
          </div>
    
          <div className="  mb-12 h-[330px] p-4 bg-white rounded-[12px] shadow-md border hover:border-black transition-all duration-300 ">
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
    
        
     
            <div>
      

        <div className="h-[800px] p-5 bg-white rounded-[12px] mt-5 border hover:border-black transition-all duration-300 mobile:ml-5 mobile:p-2 mobile:h-[750px]">
          <div className="flex justify-between items-center">
            <p className="text-base">View all the answers to the questions you have asked.</p>
          
            <button onClick={handleClose} 
  className="bg-black text-white rounded-[10px]  border-2 border-black font-bold w-32 flex items-center justify-center space-x-2">
       <IoClose />

    <span>CLOSE</span>
</button>

          </div>

          {/* First chart */}
          <div className="p-4 bg-white rounded-[12px] shadow-md mt-5 border hover:border-black transition-all duration-300">
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg">Appointments</p>
              <p className="ml-10 flex items-center whitespace-nowrap text-sm sm:text-base">
                This Month <span className="ml-1"><SlArrowDown /></span>
              </p>
            </div>
            <div className="w-full">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10], showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' }, show: false }]}
                yAxis={[{ showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' } }]}
                series={[{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: '#007bff' }]}
                height={250} 
                sx={{
                  '& .MuiAxis-root': {
                    display: 'none',
                  },
                }}
              />
            </div>
          </div>

          {/* Second chart */}
          <div className="p-4 bg-white rounded-[12px] shadow-md mt-5 border hover:border-black transition-all duration-300">
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg">Appointments</p>
              <p className="ml-10 flex items-center whitespace-nowrap text-sm sm:text-base">
                This Month <span className="ml-1"><SlArrowDown /></span>
              </p>
            </div>
            <div className="w-full h-full">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10], showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' }, show: false }]}
                yAxis={[{ showGrid: true, grid: { stroke: '#ccc', strokeDasharray: '5 5' } }]}
                series={[{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: '#82e0aa' }]}
                height={250} 
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


    </div>
    )
  }

  export default Storyboard
