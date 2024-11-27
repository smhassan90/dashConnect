


// import React from 'react';
// import { IoSearch } from "react-icons/io5";
// import { IoIosNotificationsOutline } from "react-icons/io";

// const Bar = ({ title, onAddStory, buttonText }) => {
//   return (
//     <div>
//       <div className="flex justify-between items-center w-full p-4 mobile:w-40 mobile:ml-12">
//         <h2 className="text-2xl mobile:text-left">{title}</h2> {/* Title on the left */}
//         <div className="flex items-center space-x-4"> 
//           <IoSearch className="text-2xl mobile:ml-3" />
//           <IoIosNotificationsOutline className="text-4xl" />
//           <span className="absolute  right-44  mb-4 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
//               2
//             </span>
//           <button
//             onClick={onAddStory} 
//             className="bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300"
//           >
//             {buttonText} {/* Use the dynamic button text here */}
//           </button>
//         </div>
//       </div>
//       <hr className="mt-2 border-t border-gray-300" /> {/* Horizontal line with margin */}
//     </div>
//   );
// };

// export default Bar;
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

const Bar = ({ title, type, onAddStory, buttonText }) => {
  return (
    <div>
      <div className="flex justify-between items-center w-full p-4 mobile:w-40 gap-2">
        <h2 className="text-2xl mobile:text-right">{title}</h2>
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
              <button
                onClick={onAddStory}
                className="bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300"
              >
                {buttonText}
              </button>
            </>
          )}
        </div>
      </div>
      <hr className="mt-2 border-t border-gray-300" />
    </div>
  );
};

export default Bar;
