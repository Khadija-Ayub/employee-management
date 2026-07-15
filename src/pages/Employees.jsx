import Empform from "../components/employees/Empform";
import "../styles/employees.css"
import EmployeeTable from "../components/dashboard/EmployeeTable";
import { useState } from "react";
function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([
    { id: 1, fullname: "Khadija Ayub", email: "khadija@synexus.com", department: "HR", gender: "Female", joiningDate: "2026-01-12", salary: 44500, address: "Rawalpindi" },

    { id: 2, fullname: "Abdullah Asim", email: "abdullah@synexus.com", department: "IT", gender: "Male", joiningDate: "2026-01-13", salary: 55500, address: "Rawalpindi" },
    { id: 3, fullname: "Amna Faisal", email: "amna@synexus.com", department: "HR", gender: "Female", joiningDate: "2026-01-14", salary: 50000, address: "Rawalpindi" },
    { id: 4, fullname: "Hamza ", email: "hamza@synexus.com", department: "Finance", gender: "Male", joiningDate: "2026-01-15", salary: 44500, address: "Rawalpindi" },
    { id: 5, fullname: "Zarmina Atif", email: "zarmina@synexus.com", department: "HR", gender: "Female", joiningDate: "2026-01-16", salary: 40000, address: "Rawalpindi" }
  ])

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
      <EmployeeTable employees={employees} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  );
}

export default Employees