import Sidebar from "./Sidebar";
import Header from "./Header";
import {Outlet } from 'react-router-dom';
import { useState } from "react";
import "../../styles/dashboardLayout.css";

function DashboardLayout()
{

    const [collapsed, setCollapsed] =useState(false);
    return(
         

        <div className="Dashboard-layout">
             <Sidebar collapsed={collapsed} />

        <div className="main-content">
        <Header  collapsed={collapsed} setCollapsed={setCollapsed} />
        <Outlet/>
         </div>
        </div>
        
    );
}

export default DashboardLayout