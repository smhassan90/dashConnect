
// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
// import { MdDashboard } from 'react-icons/md';
// import { IoMdPerson } from 'react-icons/io';
// import { BsPostcard } from 'react-icons/bs';
// import { FaSearchengin, FaDatabase } from 'react-icons/fa';
// import { RiDashboardHorizontalLine } from 'react-icons/ri';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//     const navigate = useNavigate();
//     const location = useLocation(); // Get the current location

//     const [isOpen, setIsOpen] = useState(true);

//     // Define a function to handle navigation
//     const handleNavigation = (path) => {
//         navigate(path);
//     };

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     // Determine the active page based on the current location
//     const isActive = (path) => location.pathname === path;

//     return (
//         <div className="flex h-screen overflow-hidden">
//             <div className={`bg-gray-100 p-2 flex flex-col gap-4 transition-all duration-300 ${isOpen ? 'w-60' : 'w-16'} fixed top-0 left-0 h-full z-50`}>
//                 <div className="flex items-center justify-between">
//                     {isOpen ? (
//                         <>
//                             <h2 className="text-2xl font-bold text-black ml-3 text-left">LOGO</h2>
//                             <AiOutlineArrowLeft className="cursor-pointer text-2xl" onClick={toggleSidebar} />
//                         </>
//                     ) : (
//                         <AiOutlineMenu className="cursor-pointer text-2xl ml-2" onClick={toggleSidebar} />
//                     )}
//                 </div>

//                 <p className={`text-gray-400 mt-3 text-base ${isOpen ? 'block' : 'hidden'}`}>Overview</p>

//                 <div
//                     className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-blue-500 p-2 rounded ${isActive('/admin/dashboard') ? 'bg-gray-300' : ''}`}
//                     onClick={() => handleNavigation('/admin/dashboard')}
//                 >
//                     <MdDashboard className={` ${isOpen ? 'text-xl' : ' text-2xl'}`} />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
//                 </div>
//                 <div
//                     className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray- p-2 rounded ${isActive('/admin/employees') ? 'bg-gray-300' : ''}`}
//                     onClick={() => handleNavigation('/admin/employees')}
//                 >
//                     <IoMdPerson className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Employees</span>
//                 </div>
//                 <div
//                     className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/admin/storyboards') ? 'bg-gray-300' : ''}`}
//                     onClick={() => handleNavigation('/admin/storyboards')}
//                 >
//                     <BsPostcard className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Story boards</span>
//                 </div>
//                 <div
//                     className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded w-18 h-10 ${isActive('/investigation') ? 'bg-gray-300' : ''}`}
//                 >
//                     <FaSearchengin className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Investigation</span>
//                 </div>
//                 <div
//                     className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/datasets') ? 'bg-gray-300' : ''}`}
//                 >
//                     <FaDatabase className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Complimentary Datasets</span>
//                 </div>
//                 <div
//                     className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/admin/integration') ? 'bg-gray-300' : ''}`}
//                     onClick={() => handleNavigation('/admin/integration')}
//                 >
//                     <RiDashboardHorizontalLine className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Integrations</span>
//                 </div>

//                 <hr className="border-t border-gray-300 w-full" />


               
//                 <div className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/admin/profile') ? 'bg-gray-300' : ''}`}>
//                     <Link to="/admin/profile" className="flex items-center gap-2">
//                         <img
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU"
//                             className="w-[55px] h-[57px] rounded-full"
//                             alt="Profile"
//                         />
//                         <span className={`font-poppins text-base font-normal leading-[30px] text-center ml-7 ${isOpen ? 'block' : 'hidden'}`}>
//                             Pritam Ghosh
//                         </span>
//                     </Link>
//                 </div>
//             </div>

//             {/* Content Area */}
//             <div className={`flex-1 h-screen overflow-y-auto p-5 transition-all duration-300 ${isOpen ? 'ml-64' : 'p-8 '}`}>
//     {/* Place your main content here */}
// </div>

//         </div>
//     );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { BsPostcard } from 'react-icons/bs';
import { FaSearchengin, FaDatabase } from 'react-icons/fa';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(true);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex h-screen overflow-hidden">
            <div
                className={`bg-gray-100 p-2 flex flex-col gap-4 transition-all duration-300 ${
                    isOpen ? 'w-60' : 'w-16'
                } fixed top-0 left-0 h-full z-50`}
            >
                <div className="flex items-center justify-between ml-4">
                    {isOpen ? (
                        <>
                            <h2 className="text-2xl font-bold text-black text-left">LOGO</h2>
                            <AiOutlineArrowLeft
                                className="cursor-pointer text-2xl"
                                onClick={toggleSidebar}
                            />
                        </>
                    ) : (
                        <AiOutlineMenu
                            className="cursor-pointer text-2xl"
                            onClick={toggleSidebar}
                        />
                    )}
                </div>

                <p className={`text-gray-400 mt-3 text-base ml-4 ${isOpen ? 'block' : 'hidden'}`}>
                    Overview
                </p>

                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-blue-500 p-2 rounded ml-4 ${
                        isActive('/admin/dashboard') ? 'bg-blue-400' : ''
                    }`}
                    onClick={() => handleNavigation('/admin/dashboard')}
                >
                    <MdDashboard className="text-xl" />
                    <span
                        className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}
                    >
                        Dashboard
                    </span>
                </div>

                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-blue-500 p-2 rounded ml-4 ${
                        isActive('/admin/employees') ? 'bg-blue-400' : ''
                    }`}
                    onClick={() => handleNavigation('/admin/employees')}
                >
                    <IoMdPerson className="text-xl" />
                    <span
                        className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}
                    >
                        Employees
                    </span>
                </div>

                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-blue-500 p-2 rounded ml-4 ${
                        isActive('/admin/storyboards') ? 'bg-blue-400' : ''
                    }`}
                    onClick={() => handleNavigation('/admin/storyboards')}
                >
                    <BsPostcard className="text-xl" />
                    <span
                        className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}
                    >
                        Story boards
                    </span>
                </div>

                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-blue-500 p-2 rounded ml-4 ${
                        isActive('/investigation') ? 'bg-blue-400' : ''
                    }`}
                >
                    <FaSearchengin className="text-xl" />
                    <span
                        className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}
                    >
                        Investigation
                    </span>
                </div>

                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-blue-500 p-2 rounded ml-4 ${
                        isActive('/datasets') ? 'bg-blue-400' : ''
                    }`}
                >
                    <FaDatabase className="text-xl" />
                    <span
                        className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}
                    >
                        Complimentary Datasets
                    </span>
                </div>

                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-blue-500 p-2 rounded ml-4 ${
                        isActive('/admin/integration') ? 'bg-blue-400' : ''
                    }`}
                    onClick={() => handleNavigation('/admin/integration')}
                >
                    <RiDashboardHorizontalLine className="text-xl" />
                    <span
                        className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}
                    >
                        Integrations
                    </span>
                </div>

                <hr className="border-t border-gray-300 w-full ml-4" />

                <div
                    className={`flex gap-2 items-center mt-8 cursor-pointer hover:bg-blue-500 p-2 rounded ml-4 ${
                        isActive('/admin/profile') ? 'bg-blue-400' : ''
                    }`}
                >
                    <Link to="/admin/profile" className="flex items-center gap-2">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU"
                            className="w-[55px] h-[57px] rounded-full"
                            alt="Profile"
                        />
                        <span
                            className={`font-poppins text-base font-normal leading-[30px] text-center ml-7 ${
                                isOpen ? 'block' : 'hidden'
                            }`}
                        >
                            Pritam Ghosh
                        </span>
                    </Link>
                </div>
            </div>

            <div
                className={`flex-1 h-screen overflow-y-auto p-5 transition-all duration-300 ${
                    isOpen ? 'ml-64' : 'p-8'
                }`}
            >
                {/* Place your main content here */}
            </div>
        </div>
    );
};

export default Sidebar;
