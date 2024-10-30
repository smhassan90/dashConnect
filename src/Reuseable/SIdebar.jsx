
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { BsPostcard } from 'react-icons/bs';
import { FaSearchengin, FaDatabase } from 'react-icons/fa';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location

    const [isOpen, setIsOpen] = useState(true);

    // Define a function to handle navigation
    const handleNavigation = (path) => {
        navigate(path);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Determine the active page based on the current location
    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex h-screen overflow-hidden">
            <div className={`bg-gray-100 p-5 flex flex-col gap-4 transition-all duration-300 ${isOpen ? 'w-60' : 'w-16'} fixed top-0 left-0 h-full z-50`}>
                <div className="flex items-center justify-between">
                    {isOpen ? (
                        <>
                            <h2 className="text-2xl font-bold text-black ml-3 text-left">LOGO</h2>
                            <AiOutlineArrowLeft className="cursor-pointer text-2xl" onClick={toggleSidebar} />
                        </>
                    ) : (
                        <AiOutlineMenu className="cursor-pointer text-2xl" onClick={toggleSidebar} />
                    )}
                </div>

                <p className={`text-gray-400 mt-3 text-base ${isOpen ? 'block' : 'hidden'}`}>Overview</p>

                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/admin/dashboard') ? 'bg-gray-300' : ''}`}
                    onClick={() => handleNavigation('/admin/dashboard')}
                >
                    <MdDashboard className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
                    <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
                </div>
                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/admin/employees') ? 'bg-gray-300' : ''}`}
                    onClick={() => handleNavigation('/admin/employees')}
                >
                    <IoMdPerson className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
                    <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Employees</span>
                </div>
                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/admin/storyboards') ? 'bg-gray-300' : ''}`}
                    onClick={() => handleNavigation('/admin/storyboards')}
                >
                    <BsPostcard className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
                    <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Story boards</span>
                </div>
                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/investigation') ? 'bg-gray-300' : ''}`}
                >
                    <FaSearchengin className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
                    <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Investigation</span>
                </div>
                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/datasets') ? 'bg-gray-300' : ''}`}
                >
                    <FaDatabase className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
                    <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Complimentary Datasets</span>
                </div>
                <div
                    className={`flex gap-2 items-center mt-1 cursor-pointer hover:bg-gray-300 p-2 rounded ${isActive('/integrations') ? 'bg-gray-300' : ''}`}
                    onClick={() => handleNavigation('/integrations')}
                >
                    <RiDashboardHorizontalLine className={`text-xl ${isOpen ? '' : 'text-2xl'}`} />
                    <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Integrations</span>
                </div>

                <hr className="border-t border-gray-300 w-full" />

                <div className={`flex gap-2 items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU"
                        className="w-[55px] h-[57px] rounded-full"
                        alt="Profile"
                    />
                    <span className="font-poppins text-base font-normal leading-[30px] text-center ml-7">Pritam Ghosh</span>
                </div>
            </div>

            {/* Content Area */}
            <div className={`flex-1 h-screen overflow-y-auto p-3 transition-all duration-300 ${isOpen ? 'ml-52' : 'ml-7'}`}>
    {/* Place your main content here */}
</div>

        </div>
    );
};

export default Sidebar;
