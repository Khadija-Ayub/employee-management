import { useMemo, useState } from "react";
import { FaCheck, FaClock, FaTimes } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

import StatCard from "../components/dashboard/StatCard";
import SearchInput from "../components/common/SearchInput";
import Select from "../components/common/Select";
import Button from "../components/common/Button";

import "../styles/attendance.css";

function Attendance() {

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const [attendance, setAttendance] = useState([
        {
            id: 1,
            name: "Khadija Ayub",
            department: "IT",
            date: "2026-07-30",
            checkIn: "09:02 AM",
            checkOut: "05:10 PM",
            status: "Present"
        },
        {
            id: 2,
            name: "Ali Hassan",
            department: "Finance",
            date: "2026-07-30",
            checkIn: "09:35 AM",
            checkOut: "05:00 PM",
            status: "Late"
        },
        {
            id: 3,
            name: "Ayesha Khan",
            department: "Human Resources",
            date: "2026-07-30",
            checkIn: "--",
            checkOut: "--",
            status: "Absent"
        },
        {
            id: 4,
            name: "Usman Tariq",
            department: "Marketing",
            date: "2026-07-30",
            checkIn: "08:55 AM",
            checkOut: "05:15 PM",
            status: "Present"
        },
        {
            id: 5,
            name: "Hamza Malik",
            department: "Engineering",
            date: "2026-07-30",
            checkIn: "09:00 AM",
            checkOut: "05:05 PM",
            status: "Present"
        }
    ]);

    const statusOptions = [
        "Present",
        "Absent",
        "Late"
    ];

    const filteredAttendance = useMemo(() => {

        return attendance.filter((employee) => {

            const matchesSearch =
                employee.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                employee.department
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const matchesStatus =
                statusFilter === "" ||
                employee.status === statusFilter;

            return matchesSearch && matchesStatus;
        });

    }, [attendance, searchTerm, statusFilter]);


    const presentCount = attendance.filter(
        (employee) => employee.status === "Present"
    ).length;

    const absentCount = attendance.filter(
        (employee) => employee.status === "Absent"
    ).length;

    const lateCount = attendance.filter(
        (employee) => employee.status === "Late"
    ).length;

    const attendanceRate =
        attendance.length === 0
            ? 0
            : Math.round((presentCount / attendance.length) * 100);


    function handleMarkAttendance(id, status) {

        setAttendance((previousAttendance) =>
            previousAttendance.map((employee) =>
                employee.id === id
                    ? {
                        ...employee,
                        status: status
                    }
                    : employee
            )
        );
    }


    return (
        <div className="attendance-page">

            {/* ================= PAGE HEADER ================= */}

            <div className="page-header">

                <div>
                    <h1>Attendance</h1>

                    <p>
                        Track and manage employee attendance.
                    </p>
                </div>

                <div className="attendance-date">
                    <MdEventAvailable />
                    <span>30 July 2026</span>
                </div>

            </div>


            {/* ================= STAT CARDS ================= */}

            <div className="attendance-stats">

                <StatCard
                    icon={<FaCheck />}
                    title="Present"
                    number={presentCount}
                />

                <StatCard
                    icon={<FaTimes />}
                    title="Absent"
                    number={absentCount}
                />

                <StatCard
                    icon={<FaClock />}
                    title="Late"
                    number={lateCount}
                />

                <StatCard
                    icon={<MdEventAvailable />}
                    title="Attendance Rate"
                    number={`${attendanceRate}%`}
                />

            </div>


            {/* ================= ATTENDANCE TABLE CARD ================= */}

            <div className="attendance-card">

                <div className="attendance-header">

                    <div>
                        <h2>Today's Attendance</h2>

                        <p>
                            Manage employee attendance for today.
                        </p>
                    </div>


                    <div className="attendance-filters">

                        <SearchInput
                            placeholder="Search employees..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                        />

                        <Select
                            name="statusFilter"
                            label="Status"
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            options={statusOptions}
                        />

                    </div>

                </div>


                {/* ================= TABLE ================= */}

                <div className="attendance-table-wrapper">

                    <table className="attendance-table">

                        <thead>

                            <tr>
                                <th>Employee</th>
                                <th>Department</th>
                                <th>Date</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>

                        </thead>


                        <tbody>

                            {filteredAttendance.length > 0 ? (

                                filteredAttendance.map((employee) => (

                                    <tr key={employee.id}>

                                        {/* EMPLOYEE */}

                                        <td>
                                            <div className="attendance-employee">

                                                <div className="employee-avatar">
                                                    {employee.name.charAt(0)}
                                                </div>

                                                <strong>
                                                    {employee.name}
                                                </strong>

                                            </div>
                                        </td>


                                        {/* DEPARTMENT */}

                                        <td>
                                            {employee.department}
                                        </td>


                                        {/* DATE */}

                                        <td>
                                            {employee.date}
                                        </td>


                                        {/* CHECK IN */}

                                        <td>
                                            {employee.checkIn}
                                        </td>


                                        {/* CHECK OUT */}

                                        <td>
                                            {employee.checkOut}
                                        </td>


                                        {/* STATUS */}

                                        <td>

                                            <span
                                                className={`attendance-status status-${employee.status.toLowerCase()}`}
                                            >
                                                {employee.status}
                                            </span>

                                        </td>


                                        {/* ACTIONS */}

                                        <td>

                                            <div className="attendance-actions">

                                                <Button
                                                    variant="primary"
                                                    size="small"
                                                    icon={<FaCheck />}
                                                    ariaLabel="Mark employee present"
                                                    onClick={() =>
                                                        handleMarkAttendance(
                                                            employee.id,
                                                            "Present"
                                                        )
                                                    }
                                                />

                                                <Button
                                                    variant="danger"
                                                    size="small"
                                                    icon={<FaTimes />}
                                                    ariaLabel="Mark employee absent"
                                                    onClick={() =>
                                                        handleMarkAttendance(
                                                            employee.id,
                                                            "Absent"
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
                                        colSpan="7"
                                        className="attendance-empty"
                                    >
                                        No attendance records found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default Attendance;