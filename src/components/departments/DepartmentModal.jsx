import { useEffect, useState } from "react";

import Button from "../common/Button";
import FormField from "../common/FormField";
import Select from "../common/Select";

function DepartmentModal({
    department,
    onClose,
    onSave
}) {
    const [formData, setFormData] = useState({
        name: "",
        manager: "",
        employees: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (department) {
            setFormData({
                name: department.name,
                manager: department.manager,
                employees: department.employees
            });
        }
    }, [department]);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    }

    function validateForm() {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Department name is required.";
        }

        if (!formData.manager.trim()) {
            newErrors.manager = "Manager name is required.";
        }

        if (
            formData.employees === "" ||
            Number(formData.employees) < 0
        ) {
            newErrors.employees =
                "Employee count cannot be negative.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        onSave(formData);
    }

    return (
        <div className="modal-overlay">

            <div
                className="department-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="department-modal-title"
            >

                <div className="modal-header">

                    <div>
                        <h2 id="department-modal-title">
                            {department
                                ? "Edit Department"
                                : "Add Department"}
                        </h2>

                        <p>
                            {department
                                ? "Update department information."
                                : "Create a new company department."}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="modal-close"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        ×
                    </button>

                </div>

                <form
                    className="department-form"
                    onSubmit={handleSubmit}
                >

                    <FormField
                        name="name"
                        label="Department Name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Human Resources"
                        error={errors.name}
                        required
                    />

                    <FormField
                        name="manager"
                        label="Department Manager"
                        value={formData.manager}
                        onChange={handleChange}
                        placeholder="e.g. Khadija Ayub"
                        error={errors.manager}
                        required
                    />

                    <FormField
                        name="employees"
                        type="number"
                        label="Number of Employees"
                        value={formData.employees}
                        onChange={handleChange}
                        min="0"
                        error={errors.employees}
                        required
                    />

                    <div className="modal-actions">

                        <Button
                            variant="secondary"
                            size="medium"
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>

                        <Button
                            variant="primary"
                            size="medium"
                            type="submit"
                        >
                            {department
                                ? "Save Changes"
                                : "Add Department"}
                        </Button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default DepartmentModal;