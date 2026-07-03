import {Routes , Route} from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout"
import Attendance from "../pages/Attendance"
import Dashboard from "../pages/Dashboard"
import Departments from "../pages/Departments"
import Employees from "../pages/Employees"
import Settings from "../pages/Settings"


function AppRoutes(){
    return(
        <Routes>
        <Route path="/"  element={<DashboardLayout/>}>

        <Route index element={<Dashboard/>}/>
        <Route path="Attendance" element={<Attendance/>}/>
        <Route  path="Departments" element={<Departments/>} />
        <Route  path="Employees" element={<Employees/>} />
        <Route  path="Settings" element={<Settings/>} />
        
        </Route>

        </Routes>
    );
}
export default AppRoutes