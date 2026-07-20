import Empform from "../components/employees/Empform";
import "../styles/employees.css"
import EmployeeTable from "../components/dashboard/EmployeeTable";
import { useState , useEffect } from "react";
function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [loading , setLoading ] = useState(false);
  const [error , setError ] = useState("");

  useEffect( ()=>{
    async function fetchEmployees() {
      try{
            const response = await fetch("https://dummyjson.com/users");
            if(!response.ok){
              throw new error("Failed to fetch data. ")
            }
            const data =await response.json();
            const transformedEmployees = data.users.map((user)=>({
              id : user.id,
              fullname : `${user.firstName} ${user.lastName} `,
              email : user.email,
              department : user.company.department,
              gender : user.gender,
              joiningDate : "N/A",
              salary : Math.floor(Math.random() * 50000) + 30000,
              address: `${user.address.city} , ${user.address.state}`
            }));
            setEmployees(transformedEmployees);
      }    
      catch(error)
      {
        setError("Failed to fetch employees.");
      }
      finally{
        setLoading(false);
      }
      
    }
    fetchEmployees();
  } , []);

  function handleAddEmployee(newEmployee) {
    const empWithId = {
      ...newEmployee,
      id: employees.length + 1
    }
    setEmployees(
      [
        ...employees,
        empWithId
      ]
    );
  }
  function handleDelete(id) {
    setEmployees(
      employees.filter((employee) => (
        employee.id !== id
      ))
    )
  }
  function handleUpdate(employee) {
    setSelectedEmployee(employee);
  }
  function handleUpdateEmployee(updatedEmployee) {
    setEmployees(
      employees.map((employee) => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return employee;
      })
    );
  }
   function clearSelectedEmployee(){
    setSelectedEmployee(null);
   }
  return (
    <div className="emp-main" >
      <Empform handleAddEmployee={handleAddEmployee} selectedEmployee={selectedEmployee} handleUpdateEmployee={handleUpdateEmployee} clearSelectedEmployee={clearSelectedEmployee} />
      <EmployeeTable employees={employees} loading={loading} error={error}  handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  );
}

export default Employees