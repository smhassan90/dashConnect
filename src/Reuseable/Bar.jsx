import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Bar = ({ title }) => {
  return (
    <div>
      <div className="flex justify-between items-center w-full p-4">
        <h2 className="text-2xl">{title}</h2> {/* Title on the left */}
        <div className="flex items-center space-x-4"> {/* Icons and button container */}
          <IoSearch className="text-2xl" />
          <IoIosNotificationsOutline className="text-2xl" />
          <Link to="/add-story">
            <button className="bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
              + Add Story
            </button>
          </Link>
        </div>
      </div>
      <hr className="mt-2 border-t border-gray-300" /> {/* Horizontal line with margin */}
    </div>
  );
};

export default Bar;