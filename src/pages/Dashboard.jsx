import StatCard from "../components/dashboard/StatCard";
import { FaUsers } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import "../styles/dashboard/dashboard.css";

function Dashboard()
{


    return (
        <div className="dashboard">
         <h1>Welcome Back!</h1>
         <p>Manage your employees and monitor company activities.</p>
         <div className="stat-container" >
          <StatCard   
          icon={<FaUsers/>}
          title="Total Employees"
          number={211}
          />
          <StatCard  
          icon={<MdApartment/>}
          title="Departments"
          number={6}
          />
          <StatCard  
          icon={<BsCalendarCheck/>}
          title="Attendance Today "
          number={190}
          />
          <StatCard  
          icon={<HiUserAdd/>}
          title="New Hires"
          number={20}
          />


         </div>
         
        </div>
    );
}

export  default Dashboard