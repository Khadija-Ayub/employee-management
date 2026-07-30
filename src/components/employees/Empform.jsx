import { useState, useEffect } from "react";
import Button from "../common/Button";
import FormField from "../common/FormField";
import Select from "../common/Select";
import RadioGroup from "../common/RadioGroup";

 const initialFormData = {
    fullname: "",
    email: "",
    department: "",
    gender: "",
    joiningDate: "",
    salary: "",
    address: ""
  };

function Empform({ handleAddEmployee, selectedEmployee, handleUpdateEmployee, clearSelectedEmployee }) {
 
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    setSuccessMessage("")
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData({
      ...formData,
      [fieldName]: fieldValue
    });
  }

  const [errors, setErrors] = useState(
    {
      fullname: "",
      email: "",
      department: "",
      gender: "",
      joiningDate: "",
      salary: "",
      address: ""
    }
  );

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  function validateForm() {
    const newErrors = {};
    if (formData.fullname.trim() === "") {
      newErrors.fullname = "Fullname is required";
    }
    if (formData.email.trim() === "" || !emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.department.trim() === "") {
      newErrors.department = "Department is required";
    }
    if (formData.gender.trim() === "") {
      newErrors.gender = "Gender is required";
    }
    if (formData.joiningDate.trim() === "") {
      newErrors.joiningDate = "JoiningDate is required";
    }
    if (formData.salary.trim() === "" || Number(formData.salary) <= 0) {
      newErrors.salary = "Salary must be greater than 0";
    }
    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {

    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      if (selectedEmployee) {
        handleUpdateEmployee(formData);
        clearSelectedEmployee();
      }
      else { handleAddEmployee(formData) }

      setFormData(initialFormData)
      selectedEmployee ? setSuccessMessage("Employee updated successfully") : setSuccessMessage("Employee added successfully")

    }
  }

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee)
    };
  }, [selectedEmployee]
  );
  
  const departments = [
    "Human Resources",
    "IT",
    "Finance",
    "Marketing",
    "Engineering",
    "Services",
    "Support",
    "Accounting",
    "Training",
    "Legal",
    "Product Management"
  ];
  const genderOptions =[
    "male" ,
    "female" ,
    "Other"
  ];

  return (
    <div className="emp-form" >
      <div className="form-wrapper">
        {successMessage && <small className="success-message" > {successMessage} </small>}
        <p className="emp-form-heading" >Add New Employee</p>

        <form className="main-form" onSubmit={handleSubmit} >
          
          <FormField
            name="fullname" label="Full name" value={formData.fullname}
            onChange={handleChange}
            placeholder="i.e Khadija Ayub"
            error={errors.fullname}
          />

          <FormField name="email" type="email" label="Email" value={formData.email}
            onChange={handleChange}
            placeholder="khadijaayub1@gmail.com"
            error={errors.email} />

          <Select
            name="department" label="Department"
            value={formData.department} onChange={handleChange}
            options={departments}
            error={errors.department}
          />

          <RadioGroup
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={genderOptions}
            error={errors.gender}
          />

          <FormField name="joiningDate" type="date" label="Joining Date" value={formData.joiningDate}
            onChange={handleChange}
            error={errors.joiningDate} />

          <FormField name="salary" type="number" label="Salary" value={formData.salary} min="0"
            onChange={handleChange}
            error={errors.salary} />

          <FormField name="address" as="textarea" label="Address" value={formData.address}
            placeholder="Enter Address"
            onChange={handleChange} rows="4"
            error={errors.address} />

          <Button type="submit" variant="primary" size="large"  >
            {selectedEmployee ? "Update Employee" : "Add Employee"}
          </Button>
        </form>
      </div>

    </div>
  );
}
export default Empform