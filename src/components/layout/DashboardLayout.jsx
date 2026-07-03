import Sidebar from "./Sidebar";
import Header from "./Header";
import {Outlet } from 'react-router-dom';

function DashboardLayout()
{
    return(
        <div className="Dashboard-layout">
             <Sidebar/>

        <div className="main-content">
        <Header/>
        <Outlet/>
         </div>
        </div>
        
    );
}

export default DashboardLayout