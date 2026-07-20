import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";
function EmployeeTable({ employees, loading, error, handleDelete, handleUpdate }) {
    if (loading) {
    return <p className="empty-message">Loading Employees...</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }
    return (
        <div className="table-container">
            <table  >
                <thead className="t-head" >
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Gender</th>
                        <th>Joining Date</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="t-body">
                    {employees.length > 0 ? (
                        employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.fullname}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.joiningDate}</td>
                                <td>Rs. {employee.salary.toLocaleString()}</td>
                                <td>{employee.address}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(employee.id)}
                                        >
                                            <FaRegTrashCan />
                                        </button>

                                        <button
                                            className="edit-btn"
                                            onClick={() => handleUpdate(employee)}
                                        >
                                            <MdOutlineUpdate />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : 
                     
                    (
                    <tr>
                        <td colSpan="8" className="empty-message">
                            No employees found.
                        </td>
                    </tr>
                    )}
                </tbody>
            </table></div>
    );
}
export default EmployeeTable