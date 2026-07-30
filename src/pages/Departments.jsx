import { useMemo, useState } from "react";
import { FaPlus, FaUsers, FaBuilding, FaUserTie } from "react-icons/fa";
import { MdEdit, MdDelete , MdApartment } from "react-icons/md";

import Button from "../components/common/Button";
import FormField from "../components/common/FormField";
import Select from "../components/common/Select";
import SearchInput from "../components/common/SearchInput";
import StatCard from "../components/dashboard/StatCard";
import StatusBadge from "../components/common/StatusBadge";
import DepartmentModal from "../components/departments/DepartmentModal";

import "../styles/departments.css";

function Departments() {
    const [departments, setDepartments] = useState([
        {
            id: 1,
            name: "Human Resources",
            manager: "Sarah Ahmed",
            employees: 18,
            status: "Active"
        },
        {
            id: 2,
            name: "IT",
            manager: "Ali Hassan",
            employees: 66,
            status: "Active"
        },
        {
            id: 3,
            name: "Finance",
            manager: "Ayesha Khan",
            employees: 25,
            status: "Active"
        },
        {
            id: 4,
            name: "Marketing",
            manager: "Usman Tariq",
            employees: 16,
            status: "Active"
        },
        {
            id: 5,
            name: "Engineering",
            manager: "Hamza Malik",
            employees: 55,
            status: "Active"
        },
        {
            id: 6,
            name: "Support",
            manager: "Maham Ali",
            employees: 31,
            status: "Inactive"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const filteredDepartments = useMemo(() => {
        return departments.filter((department) =>
            department.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            department.manager
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }, [departments, searchTerm]);

    const totalEmployees = departments.reduce(
        (total, department) => total + department.employees,
        0
    );

    const activeDepartments = departments.filter(
        (department) => department.status === "Active"
    ).length;

    const largestDepartment = departments.length
        ? departments.reduce((largest, department) =>
            department.employees > largest.employees
                ? department
                : largest
        )
        : null;

    function handleAddDepartment() {
        setSelectedDepartment(null);
        setShowModal(true);
    }

    function handleEditDepartment(department) {
        setSelectedDepartment(department);
        setShowModal(true);
    }

    function handleDeleteDepartment(id) {
        const confirmed = window.confirm(
            "Are you sure you want to delete this department?"
        );

        if (confirmed) {
            setDepartments((previousDepartments) =>
                previousDepartments.filter(
                    (department) => department.id !== id
                )
            );
        }
    }

    function handleSaveDepartment(departmentData) {
        if (selectedDepartment) {
            setDepartments((previousDepartments) =>
                previousDepartments.map((department) =>
                    department.id === selectedDepartment.id
                        ? {
                            ...department,
                            ...departmentData,
                             employees: Number(departmentData.employees)
                        }
                        : department
                )
            );
        } else {
            const newDepartment = {
                id: Date.now(),
                ...departmentData,
                employees: Number(departmentData.employees),
                status: "Active"
            };

            setDepartments((previousDepartments) => [
                ...previousDepartments,
                newDepartment
            ]);
        }

        setShowModal(false);
        setSelectedDepartment(null);
    }

    return (
        <div className="departments-page">

            {/* PAGE HEADER */}

            <div className="page-header">
                <div>
                    <h1>Departments</h1>
                    <p>
                        Manage company departments and monitor their workforce.
                    </p>
                </div>

                <Button
                    variant="primary"
                    size="medium"
                    icon={<FaPlus />}
                    onClick={handleAddDepartment}
                >
                    Add Department
                </Button>
            </div>

            {/* SUMMARY CARDS */}

            <div className="department-stats">

                <StatCard
                    icon={<MdApartment />}
                    title="Total Departments"
                    number={departments.length}
                />

                <StatCard
                    icon={<FaUsers />}
                    title="Total Employees"
                    number={totalEmployees}
                />

                <StatCard
                    icon={<FaBuilding />}
                    title="Active Departments"
                    number={activeDepartments}
                />

                <StatCard
                    icon={<FaUserTie />}
                    title="Largest Department"
                    number={largestDepartment?.name || "N/A"}
                />

            </div>

            {/* DEPARTMENT TABLE */}

            <div className="department-card">

                <div className="department-table-header">

                    <div>
                        <h2>Department List</h2>
                        <p>
                            View and manage all company departments.
                        </p>
                    </div>

                    <SearchInput
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search departments..."
                    />

                </div>

                <div className="department-table-wrapper">

                    <table className="department-table">

                        <thead>
                            <tr>
                                <th>Department</th>
                                <th>Manager</th>
                                <th>Employees</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredDepartments.length > 0 ? (

                                filteredDepartments.map((department) => (

                                    <tr key={department.id}>

                                        <td>
                                            <div className="department-name">
                                                <span className="department-icon">
                                                    <FaBuilding />
                                                </span>

                                                <span>
                                                    {department.name}
                                                </span>
                                            </div>
                                        </td>

                                        <td>{department.manager}</td>

                                        <td>
                                            <span className="employee-count">
                                                {department.employees}
                                            </span>
                                        </td>

                                        <td>
                                            <StatusBadge
                                                status={department.status}
                                            />
                                        </td>

                                        <td>

                                            <div className="department-actions">

                                                <Button
                                                    variant="edit"
                                                    size="small"
                                                    icon={<MdEdit />}
                                                    ariaLabel={`Edit ${department.name}`}
                                                    onClick={() =>
                                                        handleEditDepartment(
                                                            department
                                                        )
                                                    }
                                                />

                                                <Button
                                                    variant="danger"
                                                    size="small"
                                                    icon={<MdDelete />}
                                                    ariaLabel={`Delete ${department.name}`}
                                                    onClick={() =>
                                                        handleDeleteDepartment(
                                                            department.id
                                                        )
                                                    }
                                                />

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td
                                        colSpan="5"
                                        className="department-empty"
                                    >
                                        No departments found.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* MODAL */}

            {showModal && (
                <DepartmentModal
                    department={selectedDepartment}
                    onClose={() => {
                        setShowModal(false);
                        setSelectedDepartment(null);
                    }}
                    onSave={handleSaveDepartment}
                />
            )}

        </div>
    );
}

export default Departments;