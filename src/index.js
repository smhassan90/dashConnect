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
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

import AdminLayout from "./layouts/admin";
import Dashboard from "./views/Dashboard";
import dashboardRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
export function upper() {
  return (<div>upper</div>);
}

root.render(
  <Router>
    <Routes>
      <Route path="/admin" element={<Dashboard />} />
      {dashboardRoutes.map((route, index) => (
          <Route
            key={index}
            path={`${route.layout}${route.path}`} // Ensure the full path is used
            element={<route.component />}
          />
        ))}
    </Routes>
  </Router>
);