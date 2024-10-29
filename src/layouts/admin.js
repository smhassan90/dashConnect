import React from "react";
import { Routes, Route } from 'react-router-dom';
import dashboardRoutes from "../routes";
import Dashboard from "../views/Dashboard";

function AdminLayout() {

  console.log(`Route Path: ${Route.layout}${Route.path}`);
  return (
    <div className="admin-layout">
    
      <Routes>
      <Route
            key={index}
            path={"admin/dashboard"} // Ensure the full path is used
            element={<Dashboard />}
          />
        {/* {dashboardRoutes.map((route, index) => (
          <Route
            key={index}
            path={`${route.layout}${route.path}`} // Ensure the full path is used
            element={<route.component />}
          />
        ))} */}
      </Routes>
    </div>
  );
}

export default AdminLayout;