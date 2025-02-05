import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import { IoSearch } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { LineChart } from "@mui/x-charts/LineChart";
import Bar from "../Reuseable/Bar";
import { ResizableBox } from "react-resizable";
import Draggable from "react-draggable";
import "react-resizable/css/styles.css";
import CustomButton from "../Components/Button";
import DraggableCharts from "../Reuseable/DraggableChart";

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
      <div className="flex-1 ">
        {" "}
        {/* Take remaining space for content */}
        {/* Descriptive text */}
        <Bar title="Story Board" buttonText="+ Add Story" />
        <p className="text-center text-black mt-5  mobile:w-64  mobile:ml-5 mobile:text-center">
          Ask a data question, check the SQL, add it to your model <a  className="text-blue-500" href="">More Suggestion</a>
        </p>
        <div className="mt-5 rounded-[10px] ml-7 relative flex justify-center mobile:ml-5">
          <input
            type="text"
            className="bg-white text-gray-700 mb-4 border rounded-[10px] border-gray-300 w-full  p-3 pl-10 mobile:w-full"
            placeholder="Search Integration..."
          />
          <span className="absolute mt-6 right-3 transform -translate-y-1/2 text-gray-500">
            <IoSearch className="text-2xl" />
          </span>
        </div>
        {/* Appointment Info */}
        <div className="border p-4 ml-7 rounded-[14px] h-24 mt-5 flex flex-col justify-between mb-5 mobile:ml-5 mobile:h-32">
          <div className="flex justify-between items-center">
            {" "}
            {/* Flex container for title and button */}
            <div>
              <span className="font-bold text-lg">
                How many appointments do we have?
              </span>
              <p className="text-xl font-semibold mt-2">20</p>
            </div>
           
            <CustomButton text="+ Add" />
          </div>
        </div>
        {/* Additional Content Section */}
        <div className="flex flex-col ml-7 sm:flex-row justify-between items-start mt-10  gap-8 mobile:ml-5">
          {/* Appointments Chart */}
          <div className="w-full p-4 h-[330px] bg-white rounded-[14px] shadow-md mb-5 border hover:border-black transition-all duration-300  gap-6">
            {" "}
            {/* Adjusted width */}
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg">Appointments</p>
              <p className="mr-10 flex items-center whitespace-nowrap text-sm sm:text-base">
                This Month{" "}
                <span className="ml-1">
                  <SlArrowDown />
                </span>
              </p>
            </div>
            <div className="w-full ">
              <LineChart
                xAxis={[
                  {
                    data: [1, 2, 3, 5, 8, 10],
                    showGrid: true,
                    grid: { stroke: "#ccc", strokeDasharray: "5 5" },
                    show: false,
                  },
                ]}
                yAxis={[
                  {
                    showGrid: true,
                    grid: { stroke: "#ccc", strokeDasharray: "5 5" },
                  },
                ]}
                series={[
                  {
                    data: [2, 6, 2, 8.5, 1.5, 5],
                    area: true,
                    color: "#007bff",
                  },
                ]}
                // Adjusted width
                height={300}
                sx={{
                  "& .MuiAxis-root": {
                    display: "none",
                  },
                }}
              />
            </div>
          </div>

          <div className=" ml-7 mb-12 h-[330px] p-4 bg-white rounded-[14px] shadow-md border hover:border-black transition-all duration-300 ">
            <div className="flex justify-between items-center">
              <p className="h-10 flex items-center whitespace-nowrap text-sm sm:text-base">
                SQL Statement{" "}
                <span className="ml-1">
                  <SlArrowDown />
                </span>
              </p>
              <button className="w-20 h-9 bg-slate-400 rounded-[16px]">
                Re-run
              </button>
            </div>
            <hr className="border-t border-gray-300 mt-2" />
            <p className="mt-4 text-sm sm:text-base">
              CREATE TABLE IF NOT EXISTS Customer (<br />
              CustID int NOT NULL,
              <br />
              Name varchar,
              <br />
              Email varchar,
              <br />
              DOB date,
              <br />
              CONSTRAINT customer PRIMARY KEY (CustID)
              <br />)
            </p>
          </div>
        </div>
        <div>
          <DraggableCharts />
        </div>
      </div>
    </div>
  );
}

export default Storyboard;
