import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'; // Make sure to import all required icons
import { MdDashboard } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { BsPostcard } from 'react-icons/bs';
import { FaSearchengin, FaDatabase } from 'react-icons/fa';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {


     
    const navigate =useNavigate();

    const handleNavigation = () => {
        navigate('/'); // Assuming your dashboard route is '/dashboard'
    };

    const storyBoardName = ()=>{
        navigate('/')
    }







    const [isOpen, setIsOpen] = useState(true); // Sidebar state

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggling the sidebar open/close state
    };

    return (
        <div>
            <div className={`bg-gray-100 p-5 flex flex-col gap-4 transition-all duration-300 
                ${isOpen ? 'w-64' : 'w-16'} 
                sm:relative fixed top-0 left-0 h-full z-50 sm:h-auto`}
            >
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
                <div className="flex gap-2 items-center mt-3 cursor-pointer">
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU"
                        className="w-[55px] h-[57px] rounded-full"
                        alt="Profile"
                    />
                    <span className="font-poppins text-[20px] font-normal leading-[30px] text-center ml-7">
                        Pritam Ghosh
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
