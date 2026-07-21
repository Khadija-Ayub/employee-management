import Empform from "../components/employees/Empform";
import "../styles/employees.css"
import EmployeeTable from "../components/dashboard/EmployeeTable";
import { useState, useEffect } from "react";


function Employees() {
  //employee data
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);

  //api states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //search and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  //sorting
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  //Search Employee
  const filteredEmployees = employees.filter((employee) =>
    employee.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

 const sortedEmployees = [...filteredEmployees];
  
  // Fetching Api 
  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch data. ")
        }
        const data = await response.json();
        const transformedEmployees = data.users.map((user) => ({
          id: user.id,
          fullname: `${user.firstName} ${user.lastName} `,
          email: user.email,
          department: user.company.department,
          gender: user.gender,
          joiningDate: "N/A",
          salary: Math.floor(Math.random() * 50000) + 30000,
          address: `${user.address.city} , ${user.address.state}`
        }));
        setEmployees(transformedEmployees);
      }
      catch (error) {
        setError("Failed to fetch employees.");
      }
      finally {
        setLoading(false);
      }

    }
    fetchEmployees();
  }, []);

  //Add employee
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

  //Delete Employee
  function handleDelete(id) {
    setEmployees(
      employees.filter((employee) => (
        employee.id !== id
      ))
    )
  }

  //Update Employee
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
  function clearSelectedEmployee() {
    setSelectedEmployee(null);
  }
 
  //sorting
  function handleSort(field) {
    if (sortField === field) {
       (sortOrder === "asc") ?
        setSortOrder("desc") :
        setSortOrder("asc")
    }
    else {
      setSortField(field)
      setSortOrder("asc")
    }
  }

  if (sortField === "fullname") {
    (sortOrder === "asc") ? 
      sortedEmployees.sort((a, b) =>
        a.fullname.localeCompare(b.fullname)
      ) :    
      sortedEmployees.sort((a, b) =>
        b.fullname.localeCompare(a.fullname)
      );
    
  }
  else if(sortField === "salary") {
     (sortOrder === "asc") ?
      sortedEmployees.sort((a, b) =>
      a.salary - b.salary) :
      sortedEmployees.sort((a, b) =>
      b.salary - a.salary)
    
  }
  else if(sortField === "department") {
    
     (sortOrder === "asc") ?
      sortedEmployees.sort((a, b) =>
      a.department.localeCompare(b.department)
    ) :
      sortedEmployees.sort((a, b) =>
      b.department.localeCompare(a.department)
    )
  }
  //Pagination
  const startIndex = (currentPage - 1) * employeesPerPage;
  const endIndex = startIndex + employeesPerPage;
  const currentEmployees = sortedEmployees.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage);
  
  useEffect(()=>
    {
     setCurrentPage(1) 
    },[searchTerm]
  );


  return (
    <div className="emp-main" >

      <Empform handleAddEmployee={handleAddEmployee} selectedEmployee={selectedEmployee} handleUpdateEmployee={handleUpdateEmployee} clearSelectedEmployee={clearSelectedEmployee} />

      <EmployeeTable currentEmployees={currentEmployees} searchTerm={searchTerm} setSearchTerm={setSearchTerm} loading={loading} error={error} handleDelete={handleDelete} handleUpdate={handleUpdate}  handleSort={handleSort}
      sortField={sortField} sortOrder={sortOrder} />
      <div className="pagination">

        <button className="nav-btn"
          disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} >
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}>
            {index + 1}
          </button>))}

        <button className="nav-btn"
          disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}  >
          Next
        </button>
      </div>
    </div>
  );
}

export default Employees