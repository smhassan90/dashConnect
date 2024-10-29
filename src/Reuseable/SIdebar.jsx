// // import React, { useState } from 'react';
// // import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
// // import { MdDashboard } from 'react-icons/md';
// // import { IoMdPerson } from 'react-icons/io';
// // import { BsPostcard } from 'react-icons/bs';
// // import { FaSearchengin, FaDatabase } from 'react-icons/fa';
// // import { RiDashboardHorizontalLine } from 'react-icons/ri';
// // import { useNavigate } from 'react-router-dom';

// // const Sidebar = () => {
// //     const navigate = useNavigate();

// //     const handleNavigation = () => {
// //         navigate('/'); // Your dashboard route
// //     };
// //     const storyBoardNavigation =()=>{
// //         navigate("storyboards")
// //     }
// //     const integrationsNavigation =()=>{
// //         navigate("/integrations")
// //     }
// //     const empolyess =()=>{
// //         navigate("/employess")
// //     }

// //     const [isOpen, setIsOpen] = useState(true); // Sidebar state

// //     const toggleSidebar = () => {
// //         setIsOpen(!isOpen); // Toggle sidebar state
// //     };

// //     return (
// //         <div>
// //             <div className={`bg-gray-100 p-5 flex flex-col gap-4 transition-all duration-300 h-full
// //                 ${isOpen ? 'w-60' : 'w-16'} 
// //                 sm:relative fixed top-0 left-0 h-full z-50 sm:h-auto`}
// //             >
// //                 {/* Logo and Toggle Icon */}
// //                 <div className="flex items-center justify-between">
// //                     {isOpen ? (
// //                         <>
// //                             <h2 className="text-2xl font-bold text-black ml-3 text-left">LOGO</h2>
// //                             <AiOutlineArrowLeft
// //                                 className="cursor-pointer text-2xl"
// //                                 onClick={toggleSidebar}
// //                             />
// //                         </>
// //                     ) : (
// //                         <AiOutlineMenu
// //                             className="cursor-pointer text-2xl"
// //                             onClick={toggleSidebar}
// //                         />
// //                     )}
// //                 </div>

// //                 <p className={`text-gray-400 mt-7 text-base ${isOpen ? 'block' : 'hidden'}`}>Overview</p>

// //                 {/* Sidebar Menu Items */}
// //                 <div className="flex gap-2 items-center mt-3 cursor-pointer" onClick={handleNavigation}>
// //                     <MdDashboard className="text-xl" />
// //                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
// //                 </div>
// //                 <div className="flex gap-2 items-center mt-5 cursor-pointer" onClick={empolyess}>
// //                     <IoMdPerson className="text-xl" />
// //                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Employees</span>
// //                 </div>
// //                 <div className="flex gap-2 items-center mt-5 cursor-pointer" onClick={storyBoardNavigation}>
// //                     <BsPostcard className="text-xl" />
// //                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Story boards</span>
// //                 </div>
// //                 <div className="flex gap-2 items-center mt-5 cursor-pointer " >
// //                     <FaSearchengin className="text-xl" />
// //                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Investigation</span>
// //                 </div>
// //                 <div className="flex gap-2 items-center mt-5">
// //                     <FaDatabase className="text-xl" />
// //                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Complimentary Datasets</span>
// //                 </div>
// //                 <div className="flex gap-2 items-center mt-5 cursor-pointer"onClick={integrationsNavigation}>
// //                     <RiDashboardHorizontalLine className="text-xl" />
// //                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Integrations</span>
// //                 </div>

// //                 <hr className="border-t border-gray-300 w-full mt-28" />

// //                 <div className={`flex gap-2 items-center mt-5 ${isOpen ? 'block' : 'hidden'}`}>
// //                     <img
// //                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU"
// //                         className="w-[55px] h-[57px] rounded-full"
// //                         alt="Profile"
// //                     />
// //                     <span className="font-poppins text-base font-normal leading-[30px] text-center ml-7">
// //                         Pritam Ghosh
// //                     </span>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Sidebar;


// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
// import { MdDashboard } from 'react-icons/md';
// import { IoMdPerson } from 'react-icons/io';
// import { BsPostcard } from 'react-icons/bs';
// import { FaSearchengin, FaDatabase } from 'react-icons/fa';
// import { RiDashboardHorizontalLine } from 'react-icons/ri';
// import { useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//     const navigate = useNavigate();

//     const handleNavigation = () => {
//         navigate('/'); // Your dashboard route
//     };

//     const storyBoardNavigation = () => {
//         navigate("storyboards");
//     };

//     const integrationsNavigation = () => {
//         navigate("/integrations");
//     };

//     const empolyess = () => {
//         navigate("/employess");
//     };

//     const [isOpen, setIsOpen] = useState(true); // Sidebar state

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen); // Toggle sidebar state
//     };

//     const handleLogout = () => {
//         // Add your logout logic here
//         console.log('User logged out');
//     };

//     return (
//         <div>
//             <div className={`bg-gray-100 p-5 flex flex-col gap-4 transition-all duration-300
//                 ${isOpen ? 'w-60' : 'w-16'} 
//                 sm:relative fixed top-0 left-0 h-full z-50 sm:h-auto`}
//             >
//                 {/* Logo and Toggle Icon */}
//                 <div className="flex items-center justify-between">
//                     {isOpen ? (
//                         <>
//                             <h2 className="text-2xl font-bold text-black ml-3 text-left">LOGO</h2>
//                             <AiOutlineArrowLeft
//                                 className="cursor-pointer text-2xl"
//                                 onClick={toggleSidebar}
//                             />
//                         </>
//                     ) : (
//                         <AiOutlineMenu
//                             className="cursor-pointer text-2xl"
//                             onClick={toggleSidebar}
//                         />
//                     )}
//                 </div>

//                 <p className={`text-gray-400 mt-7 text-base ${isOpen ? 'block' : 'hidden'}`}>Overview</p>

//                 {/* Sidebar Menu Items */}
//                 <div className="flex gap-2 items-center mt-3 cursor-pointer" onClick={handleNavigation}>
//                     <MdDashboard className="text-xl" />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
//                 </div>
//                 <div className="flex gap-2 items-center mt-5 cursor-pointer" onClick={empolyess}>
//                     <IoMdPerson className="text-xl" />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Employees</span>
//                 </div>
//                 <div className="flex gap-2 items-center mt-5 cursor-pointer" onClick={storyBoardNavigation}>
//                     <BsPostcard className="text-xl" />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Story boards</span>
//                 </div>
//                 <div className="flex gap-2 items-center mt-5 cursor-pointer">
//                     <FaSearchengin className="text-xl" />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Investigation</span>
//                 </div>
//                 <div className="flex gap-2 items-center mt-5">
//                     <FaDatabase className="text-xl" />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Complimentary Datasets</span>
//                 </div>
//                 <div className="flex gap-2 items-center mt-5 cursor-pointer" onClick={integrationsNavigation}>
//                     <RiDashboardHorizontalLine className="text-xl" />
//                     <span className={`font-poppins text-base ${isOpen ? 'block' : 'hidden'}`}>Integrations</span>
//                 </div>

//                 <hr className="border-t border-gray-300 w-full mt-28" />

//                 {/* User Info Section */}
//                 <div className={`flex gap-2 items-center mt-5 ${isOpen ? 'block' : 'hidden'}`}>
//                     <img
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-F4ROquOZPV5XtKKC3WUjmDGnDbW7nBbA0b2b-qpY3Lo6N2xk-IGNNl1R7kPUgv0DyQ&usqp=CAU"
//                         className="w-[55px] h-[57px] rounded-full"
//                         alt="Profile"
//                     />
//                     <span className="font-poppins text-base font-normal leading-[30px] text-center ml-7">
//                         Pritam Ghosh
//                     </span>
//                 </div>

//                 {/* Logout Button */}
//                 {isOpen && (
//                     <button
//                         onClick={handleLogout}
//                         className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
//                     >
//                         Logout
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Sidebar;
/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

// import { Nav } from "react-bootstrap";


function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              {/* <img src={require("assets/img/reactlogo.png")} alt="..." /> */}
            </div>
          </a>
          <a className="simple-text" href="http://www.creative-tim.com">
            Creative Tim
          </a>
        </div>
        {/* <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav> */}
      </div>
    </div>
  );
}

export default Sidebar;
