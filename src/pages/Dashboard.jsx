import StatCard from "../components/dashboard/StatCard";
import { FaUsers } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import EmployeeTable from "../components/dashboard/EmployeeTable";

function Dashboard()
{
const employees = [
  {
    id: 1,
    name: "Abdullah Asim",
    department: "HR",
    status: "Present",
    email: "abdullah@company.com",
  },
  {
    id: 2,
    name: "Khadija Ayub",
    department: "IT",
    status: "Present",
    email: "khadija@company.com",
  },
  {
    id: 3,
    name: "Zarmina Atif",
    department: "Finance",
    status: "Absent",
    email: "za@company.com",
  },
  {
    id: 4,
    name: "Hamza ",
    department: "Marketing",
    status: "Present",
    email: "ha@company.com",
  },
  {
    id: 5,
    name: "Umaima ",
    department: "Operations",
    status: "Leave",
    email: "umaima1@company.com",
  }
];

    return (
        <div className="dashboard">
         <h1>Welcome Back!</h1>
         <p>Manage your employees and monitor company activities.</p>
         <div className="stat-container" >
          <StatCard  
          icon={<FaUsers/>}
          title="Total Employees"
          number={245}
          />
          <StatCard  
          icon={<MdApartment/>}
          title="Departments"
          number={10}
          />
          <StatCard  
          icon={<BsCalendarCheck/>}
          title="Attendance Today "
          number={220}
          />
          <StatCard  
          icon={<HiUserAdd/>}
          title="New Hires"
          number={20}
          />


         </div>
         <EmployeeTable employees={employees}/>
        </div>
    );
}

export  default Dashboard