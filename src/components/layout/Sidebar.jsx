import { NavLink } from "react-router-dom"
import { FaUsers } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { BsCalendarCheck } from "react-icons/bs";
import "../../styles/sidebar.css";
import logo from "../../assets/logo.jpg";


const menuItems =[
    {   icon: <MdDashboard/> ,
        title:"Dashboard",
        path: "/"
    },
    {   icon: <FaUsers/>,
        title:"Employees",
        path: "/Employees"
    },
    {   icon: <MdApartment/>,
        title:"Departments",
        path: "/Departments"
    },
    {   icon: <BsCalendarCheck/>,
        title:"Attendance",
        path: "/Attendance"
    },
    {   icon: <IoSettingsSharp/>,
        title:"Settings",
        path: "/Settings"
    },
    {   icon: <FiLogOut/>,
        title:"Logout",
        path: "/",
        bottom: true
    }


]

function Sidebar({collapsed})
{
    return(

         <aside className={collapsed ? " sidebar collapsed" : "sidebar"} >
          <div className="sidebar-logo">
                <img  src={logo} alt="logo"/>
        </div>
          <ul className="sidebar-list" >
              {menuItems.map((item)=>(
                <li key={item.title}  className={item.bottom ? "logout-item" : ""} >
                    <NavLink  to={item.path}
                    className={({isActive})=>
                       isActive ? "active-link" : "sidebar-link" }>
                        {item.icon}
                        <span>{item.title}</span>
                        </NavLink>   

                </li>

              ))

              }
          </ul>
         </aside>
    );
}

export default Sidebar