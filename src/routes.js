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
// import Dashboard from "views/Dashboard";
// import Employees from "views/employees.js";
// import storyboards from "views/storyboards.js";
// import integration from "views/integration.js";
// import complementoryDataset from "views/complementoryDataset.js";
// import investigation from "views/investigation.js";

import Register from "./Components/Register";
import Dashboard from "./views/Dashboard";
import Employees from "./views/Employees";
import Integration from "./views/Integration";
import Investigation from "./views/Investigation";
import Profile from "./views/Profile";
import Storyboard from "./views/Storyboard";




const dashboardRoutes = [
 {
    upgrade: true,
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-alien-33",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/employees",
    name: "Employees",
    icon: "nc-icon nc-chart-pie-35",
    component: Employees,
    layout: "/admin"
  },
  {
    path: "/storyboards",
    name: "Story Boards",
    icon: "nc-icon nc-circle-09",
    component: Storyboard,
    layout: "/admin"
  },
  {
    path: "/integration",
    name: "integration",
    icon: "nc-icon nc-notes",
    component: Integration,
    layout: "/admin"
  },
  {
    path: "/investigation",
    name: "investigation",
    icon: "nc-icon nc-pin-3",
    component: Investigation,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "profile",
    icon: "nc-icon nc-pin-3",
    component: Profile,
    layout: "/admin"
  },
  
 
];

export default dashboardRoutes;
