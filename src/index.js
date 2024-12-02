
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Sidebar from "./Reuseable/Sidebar";
import Dashboard from "./views/Dashboard";
import dashboardRoutes from "./routes";
import Login from "./Components/Login";
import Register from "./Components/Register";

// Check if user is logged in
const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

const App = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      {/* Admin routes with authentication check */}
      <Route
        path="/admin/*"
        element={
          isAuthenticated() ? (
            <div className="flex h-screen">
              <Sidebar className="w-60 fixed top-0 left-0 h-full bg-gray-800 text-white" />
              <div className="p-4 w-full">
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  {dashboardRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                  ))}
                </Routes>
              </div>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);

