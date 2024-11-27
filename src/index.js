
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Sidebar from "./Reuseable/Sidebar";  // Adjust path if necessary
// import Dashboard from "./views/Dashboard";
// import dashboardRoutes from "./routes";
// import Login from "./Components/Login";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Router>
//     {/* <Route path="/signup" element={<Login/>}/> */}
//     <div className="flex h-screen">
//       {/* Sidebar: fixed position */}
//       <Sidebar className="w-60 fixed top-0 left-0 h-full bg-gray-800 text-white" />

//       {/* Main content area */}
//       <div className="p-4 w-full">
//         <Routes>
          
//           {/* Render /admin routes with the sidebar always visible */}
//           <Route path="/admin/dashboard" element={<Dashboard />} />
//           {dashboardRoutes.map((route, index) => (
//             <Route
//               key={index}
//               path={`/admin${route.path}`}
//               element={<route.component />}
//             />
//           ))}
//         </Routes>
//       </div>
//     </div>
//   </Router>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from "./Reuseable/Sidebar";  // Adjust path if necessary
import Dashboard from "./views/Dashboard";
import dashboardRoutes from "./routes";
import Login from "./Components/Login";
import Signup from "./Components/Register"; // Assuming you have a Signup component
import Register from "./Components/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      {/* Auth routes without Sidebar */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      {/* Admin layout with Sidebar */}
      <Route
        path="/admin/*"
        element={
          <div className="flex h-screen">
            {/* Sidebar: fixed position */}
            <Sidebar className="w-60 fixed top-0 left-0 h-full bg-gray-800 text-white" />

            {/* Main content area */}
            <div className="p-4 w-full">
              <Routes>
                {/* Render /admin routes with the sidebar always visible */}
                <Route path="dashboard" element={<Dashboard />} />
                {dashboardRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </div>
          </div>
        }
      />
    </Routes>
  </Router>
);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Sidebar from "./Reuseable/Sidebar";
// import Dashboard from "./views/Dashboard";
// import dashboardRoutes from "./routes";
// import Login from "./Components/Login";
// import Register from "./Components/Register";

// // Check if user is logged in
// const isAuthenticated = () => {
//   return localStorage.getItem("isLoggedIn") === "true";
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Router>
//     <Routes>
//       {/* Public routes */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Register />} />

//       {/* Admin routes with authentication check */}
//       <Route
//         path="/admin/*"
//         element={
//           isAuthenticated() ? (
//             <div className="flex h-screen">
//               <Sidebar className="w-60 fixed top-0 left-0 h-full bg-gray-800 text-white" />
//               <div className="p-4 w-full">
//                 <Routes>
//                   <Route path="dashboard" element={<Dashboard />} />
//                   {dashboardRoutes.map((route, index) => (
//                     <Route
//                       key={index}
//                       path={route.path}
//                       element={<route.component />}
//                     />
//                   ))}
//                 </Routes>
//               </div>
//             </div>
//           ) : (
//             <Navigate to="/login" replace />
//           )
//         }
//       />
//     </Routes>
//   </Router>
// );
