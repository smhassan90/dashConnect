
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { BsPostcard } from "react-icons/bs";
import { FaSearchengin, FaDatabase } from "react-icons/fa";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  const [isOpen, setIsOpen] = useState(true);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    console.log(storedUser); // Verify user data here
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`bg-gray-100 p-2 flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        } fixed top-0 left-0 h-full z-50`}
      >
        <div className="flex items-center justify-between ml-6 mt-6">
          {isOpen ? (
            <>
              <h2 className="text-custom-22 font-medium text-black text-left">
                LOGO
              </h2>
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

        <p
          className={`text-[#434343] mt-4 text-custom-14 ml-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Overview
        </p>

        {/* Dashboard Item */}
        <div
          className={`flex gap-2 items-center mt-1 cursor-pointer ${
            isOpen
              ? "hover:bg-black hover:text-white p-2 rounded-10"
              : "hover:bg-black hover:text-white p-2 rounded-10 w-[40px] justify-center" // Shrink and center the background
          } ml-4 ${isActive("/admin/dashboard") ? "bg-black text-white" : ""}`}
          onClick={() => handleNavigation("/admin/dashboard")}
        >
          <MdDashboard className="text-custom-14" />
          <span
            className={`font-poppins font-normal text-custom-14 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Dashboard
          </span>
        </div>

        {/* Employees Item */}
        <div
          className={`flex gap-2 items-center mt-1 cursor-pointer ${
            isOpen
              ? "hover:bg-black hover:text-white p-2 rounded-10"
              : "hover:bg-black hover:text-white p-2 rounded-10 w-[40px] justify-center" // Shrink and center the background
          } ml-4 ${isActive("/admin/employees") ? "bg-black text-white" : ""}`}
          onClick={() => handleNavigation("/admin/employees")}
        >
          <IoMdPerson className="text-custom-14" />
          <span
            className={`font-poppins font-normal text-custom-14 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Employees
          </span>
        </div>

        {/* Storyboards Item */}
        <div
          className={`flex gap-2 items-center mt-1 cursor-pointer ${
            isOpen
              ? "hover:bg-black hover:text-white p-2 rounded-10"
              : "hover:bg-black hover:text-white p-2 rounded-10 w-[40px] justify-center" // Shrink and center the background
          } ml-4 ${
            isActive("/admin/storyboards") ? "bg-black text-white" : ""
          }`}
          onClick={() => handleNavigation("/admin/storyboards")}
        >
          <BsPostcard className="text-custom-14" />
          <span
            className={`font-poppins font-normal text-custom-14 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Story boards
          </span>
        </div>

        {/* Investigation Item */}
        <div
          className={`flex gap-2 items-center mt-1 cursor-pointer ${
            isOpen
              ? "hover:bg-black hover:text-white p-2 rounded-10"
              : "hover:bg-black hover:text-white p-2 rounded-10 w-[40px] justify-center" // Shrink and center the background
          } ml-4 ${isActive("/investigation") ? "bg-black text-white" : ""}`}
        >
          <FaSearchengin className="text-custom-14" />
          <span
            className={`font-poppins font-normal text-custom-14 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Investigation
          </span>
        </div>

        {/* Complimentary Datasets Item */}
        <div
          className={`flex gap-2 items-center mt-1 cursor-pointer ${
            isOpen
              ? "hover:bg-black hover:text-white p-2 rounded-10"
              : "hover:bg-black hover:text-white p-2 rounded-10 w-[40px] justify-center" // Shrink and center the background
          } ml-4 ${isActive("/datasets") ? "bg-black text-white" : ""}`}
        >
          <FaDatabase className="text-custom-14" />
          <span
            className={`font-poppins font-normal text-custom-14 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Complimentary Datasets
          </span>
        </div>

        {/* Integrations Item */}
        <div
          className={`flex gap-2 items-center mt-1 cursor-pointer ${
            isOpen
              ? "hover:bg-black hover:text-white p-2 rounded-10"
              : "hover:bg-black hover:text-white p-2 rounded-10 w-[40px] justify-center" // Shrink and center the background
          } ml-4 ${
            isActive("/admin/integration") ? "bg-black text-white" : ""
          }`}
          onClick={() => handleNavigation("/admin/integration")}
        >
          <RiDashboardHorizontalLine className="text-custom-14" />
          <span
            className={`font-poppins font-normal text-custom-14 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Integrations
          </span>
        </div>
        <hr className="border-t border-gray-300 w-full mt-16" />


        <div
          className={`fixed bottom-0 left-0 flex gap-2 items-center mt-4 cursor-pointer hover:bg-black hover:text-white p-2 rounded-10 ml-3 ${
            isActive("/admin/profile") ? "bg-black text-white " : ""
          }`}
        >

          {/* <Link to="/admin/profile" className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU"
              className="w-[50px] object-cover h-[57px] rounded-full"
              alt="Profile"
            />
            <span
              className={`font-poppins text-custom-14 font-normal leading-[30px] text-center ml-7 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Pritam Ghosh
            </span>
          </Link> */}
                  <Link to="/admin/profile" className="flex items-center gap-2">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU"
                className="w-[50px] object-cover h-[57px] rounded-full"
                alt="Profile"
            />
            <span
                className={`font-poppins text-custom-14 font-normal leading-[30px] text-center ml-7 ${
                    isOpen ? "block" : "hidden"
                }`}
            >
        {user && user.firstName ? user.firstName : "Guest"}

            </span>
        </Link>

        </div>
      </div>

      <div
        className={`flex-1 h-screen overflow-y-auto p-5 transition-all duration-300 ${
          isOpen ? "ml-64" : "p-8"
        }`}
      >
        {/* Main Content */}
      </div>
    </div>
  );
};

export default Sidebar;