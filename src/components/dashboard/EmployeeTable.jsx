import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import LoadingSkeleton from "./LoadingSkeleton";
function EmployeeTable({ currentEmployees, loading, error, searchTerm, setSearchTerm, handleDelete, handleUpdate, handleSort , sortField , sortOrder }) {
    if (loading) {
        return <LoadingSkeleton employeesPerPage={5} />;
    }

    if (error) {
        return <p className="empty-message">{error}</p>;
    }
    return (
        <div className="table-container">
            <div className="table-header">
                <h2>Employee List</h2>
                <input
                    type="text"
                    placeholder="🔍 Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <table  >

                <thead className="t-head" >
                    <tr>
                        <th onClick={() => handleSort("fullname")} > Full Name {sortField === "fullname"
                            ? sortOrder === "asc"
                            ? <FaSortUp />
                            : <FaSortDown />
                            : <FaSort />} </th>
                        <th>Email</th>
                        <th onClick={() => handleSort("department")}   >Department  {sortField === "department"
                            ? sortOrder === "asc"
                            ? <FaSortUp />
                            : <FaSortDown />
                            : <FaSort />} </th>
                        <th>Gender</th>
                        <th>Joining Date</th>
                        <th onClick={() => handleSort("salary")}  >Salary {sortField === "salary"
                            ? sortOrder === "asc"
                            ? <FaSortUp />
                            : <FaSortDown />
                            : <FaSort />}</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="t-body">
                    {currentEmployees.length > 0 ? (
                        currentEmployees.map((employee) => (
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