
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import CustomButton from '../Components/Button';

const Bar = ({ title, type, onAddStory, buttonText }) => {
  return (
    <div>
      <div className="flex justify-between items-center w-full p-4 mobile:w-40 gap-2">
        <h2 className="text-custom-20 font-normal mobile:text-right">{title}</h2>
        <div className="flex items-center space-x-4 relative">
        {type === "search" ? (
  <div className="relative w-72 flex items-center"> {/* Flex container to align items horizontally */}
    {/* Search Bar */}
    <input
      type="text"
      className="bg-gray-200 rounded-full w-full mr-12 h-10 pl-10 pr-4 text-gray-700 focus:outline-none"
      placeholder="Search..."
    />
    {/* Bell Icon */}
    <div className="absolute right-3 flex items-center">
    <IoSearch className="text-2xl" />

      <IoIosNotificationsOutline className="text-4xl ml-3" />
      <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
        2
      </span>
    </div>
  </div>
            
          ) : (
            <>
              <IoSearch className="text-2xl mobile:ml-3" />
              <div className="relative">
                <IoIosNotificationsOutline className="text-4xl" />
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </div>
             
              <CustomButton text={buttonText} onClick={onAddStory}  />
            </>
          )}
        </div>
      </div>
      <hr className="mt-2 border-t border-gray-300" />
    </div>
  );
  
};

export default Bar;