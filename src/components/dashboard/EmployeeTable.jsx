import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import LoadingSkeleton from "./LoadingSkeleton";
import Button from "../common/Button";
import SearchInput from "../common/SearchInput";

function EmployeeTable({ currentEmployees, loading, error, searchTerm, setSearchTerm, handleDelete, handleUpdate, handleSort, sortField, sortOrder }) {
    if (loading) {
        return <LoadingSkeleton employeesPerPage={5} />;
    }

    if (error) {
        return <p className="empty-message">{error}</p>;
    }

    function SortIcon({ field }) {
    if (sortField !== field) {
        return <FaSort aria-hidden="true" />;
    }

    return sortOrder === "asc"
        ? <FaSortUp aria-hidden="true" />
        : <FaSortDown aria-hidden="true" />;
}

    return (
        <div className="table-container">
            <div className="table-header">
                <h2>Employee List</h2>
                <SearchInput
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <table  >

                <thead className="t-head" >
                    <tr>
                        <th  >
                            <button
                                type="button"
                                className="sortable-header"
                                onClick={() => handleSort("fullname")}
                                aria-label={`Sort employees by full name, currently ${sortField === "fullname" ? sortOrder : "unsorted"
                                    }`}
                            >
                                Full Name
                                <SortIcon field="fullname" />
                            </button>
                        </th>
                        <th>Email</th>
                        <th>
                            <button
                                type="button"
                                className="sortable-header"
                                onClick={() => handleSort("department")}
                                aria-label={`Sort employees by department, currently ${sortField === "department" ? sortOrder : "unsorted"
                                    }`}                            >
                                Department
                                <SortIcon field="department" /> </button></th>
                        <th>Gender</th>
                        <th>Joining Date</th>
                        <th>
                            <button
                                type="button"
                                className="sortable-header"
                                onClick={() => handleSort("salary")}
                                aria-label={`Sort employees by salary, currently ${sortField === "salary" ? sortOrder : "unsorted"
                                    }`}                            >
                                Salary
                                <SortIcon field="salary" /></button></th>
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
                                        <Button
                                            variant="danger"
                                            size="small"
                                            icon={<FaRegTrashCan />}
                                            ariaLabel="Delete employee"
                                            onClick={() => handleDelete(employee.id)}
                                        />

                                        <Button
                                            variant="edit"
                                            size="small"
                                            icon={<MdOutlineUpdate />}
                                            ariaLabel="Edit employee"
                                            onClick={() => handleUpdate(employee)}
                                        />
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