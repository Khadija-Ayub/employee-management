import { useState , useEffect } from "react";

function Empform({ handleAddEmployee, selectedEmployee  , handleUpdateEmployee , clearSelectedEmployee}) {
      console.log(selectedEmployee);
  const [successMessage, setSuccessMessage] = useState("")
  const initialFormData = {
    fullname: "",
    email: "",
    department: "",
    gender: "",
    joiningDate: "",
    salary: "",
    address: ""
  }
  const [formData, setFormData] = useState(initialFormData);
  function handleChange(e) {
    setSuccessMessage("")
    const fieldName = e.target.name;
    const fieldValue =  e.target.value;

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
      if(selectedEmployee)
         {handleUpdateEmployee(formData);
          clearSelectedEmployee();
         }
      else
      {handleAddEmployee(formData)}

      setFormData(initialFormData)
       selectedEmployee ? setSuccessMessage("Employee updated successfully") : setSuccessMessage("Employee added successfully")
       
    }
  }
useEffect( ()=>{
  if(selectedEmployee){
    setFormData(selectedEmployee)};
} , [selectedEmployee]
) ;

  return (
    <div className="emp-form" >
      <div className="form-wrapper">
        {successMessage && <small className="success-message" > {successMessage} </small>}
        <p className="emp-form-heading" >Add New Employee</p>

        <form className="main-form" onSubmit={handleSubmit} >
          <div className="form-group" >
            <label htmlFor="fullname"  >Full Name</label>
            <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="i.e Khadija Ayub" />
            {errors.fullname && <small className="error-message" >{errors.fullname}</small>}
          </div>

          <div className="form-group" >
            <label htmlFor="email"  >Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="khadijaayub1@gmail.com" />
            {errors.email && <small className="error-message" >{errors.email}</small>}
          </div>

          <div className="form-group" >
            <label htmlFor="department" >Department</label>
            <select id="department" name="department" value={formData.department} onChange={handleChange} >
              <option value="" >Select Department</option>
              <option value="Human Resources" >Human Resources</option>
              <option value="IT"  >IT</option>
              <option value="Finance"  >Finance</option>
              <option value="Marketing"  >Marketing</option>
              <option value="Engineering"  >Engineering</option>
              <option value="Services"  >Services</option>
              <option value="Support"  >Support</option>
              <option value="Accounting"  >Accounting</option>
              <option value="Training"  >Training</option>
              <option value="Legal"  >Legal</option>
              <option value="Product Management"  >Product Management</option>
            </select>
            {errors.department && <small className="error-message" >{errors.department}</small>}</div>


          <div className="form-group" >
            <div className="radio-group">
              <label>Gender</label>
              <input id="male" type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />
              <label htmlFor="male" >Male</label>
              <input id="female" type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />
              <label htmlFor="female" >Female</label>
              <input id="other" type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange} />
              <label htmlFor="other" >Other</label></div>
            {errors.gender && <small className="error-message" >{errors.gender}</small>}</div>

          <div className="form-group" >
            <label htmlFor="joiningDate" >Joining Date</label>
            <input type="date" id="joiningDate" name="joiningDate" value={formData.joiningDate} onChange={handleChange} />
            {errors.joiningDate && <small className="error-message" >{errors.joiningDate}</small>}
          </div>

          <div className="form-group" >
            <label htmlFor="salary"  >Salary</label>
            <input type="number" id="salary" name="salary" min="0" value={formData.salary} onChange={handleChange} />
            {errors.salary && <small className="error-message" >{errors.salary}</small>} </div>

      

          <div className="form-group" >
            <label htmlFor="address" >Address</label>
            <textarea placeholder="Enter Address" id="address" name="address" rows="4" value={formData.address} onChange={handleChange}></textarea>
            {errors.address && <small className="error-message" >{errors.address}</small>}
          </div>

          <button type="submit" className="submit-btn" >{selectedEmployee ? "Update Employee" : "Add Employee"}</button>
        </form>
      </div>

    </div>
  );
}
export default Empform