# Components Documentation (Week 2)

## Project
Employee Management System Dashboard

## Week
Week 2

---

# Overview

Week 2 focused on implementing the Employee Management module using React. The main functionality includes:

- Add Employee
- Update Employee
- Delete Employee
- Form Validation
- Success Messages
- Parent-Child Communication using Props
- State Management with React Hooks

The implementation mainly uses two reusable components:

- EmpForm.jsx
- EmployeeTable.jsx

The parent page (**Employees.jsx**) manages the application state and passes data/functions to child components.

---

# 1. Employees.jsx (Parent Component)

## Purpose

Acts as the main container for the Employee Management module.

It stores the employee data and controls all CRUD operations.

---

## Responsibilities

- Stores employee list using useState
- Stores selected employee for editing
- Adds new employees
- Updates existing employees
- Deletes employees
- Passes data to child components
- Handles communication between EmpForm and EmployeeTable

---

## State Variables

### employees

Stores all employee records.

```javascript
const [employees, setEmployees] = useState([...]);
```

---

### selectedEmployee

Stores the employee currently being edited.

```javascript
const [selectedEmployee, setSelectedEmployee] = useState(null);
```

---

## Functions

### handleAddEmployee()

Adds a new employee to the employee list.

Receives:

```javascript
newEmployee
```

Process:

- Creates unique ID
- Appends employee using spread operator
- Updates state

---

### handleDelete()

Deletes an employee.

Receives:

```javascript
id
```

Uses:

```javascript
filter()
```

to remove the selected employee.

---

### handleUpdate()

Selects an employee for editing.

Receives:

```javascript
employee
```

Stores it inside:

```javascript
selectedEmployee
```

---

### handleUpdateEmployee()

Updates existing employee information.

Uses:

```javascript
map()
```

to replace only the edited employee.

---

### clearSelectedEmployee()

Resets

```javascript
selectedEmployee
```

back to

```javascript
null
```

after updating.

---

# 2. EmpForm.jsx

## Purpose

Provides a form for creating and updating employee information.

---

## Responsibilities

- Collect employee information
- Validate user input
- Display validation errors
- Add employee
- Update employee
- Display success messages
- Reset form
- Populate form while editing

---

## React Hooks Used

### useState

Used for:

- formData
- errors
- successMessage

---

### useEffect

Automatically loads selected employee data into the form whenever the Update button is clicked.

```javascript
useEffect(() => {
    if(selectedEmployee){
        setFormData(selectedEmployee);
    }
}, [selectedEmployee]);
```

---

## Form Fields

The form contains the following fields:

- Full Name
- Email
- Department
- Gender
- Joining Date
- Salary
- Address



---

## Input Types Used

- Text Input
- Email Input
- Dropdown (Select)
- Radio Buttons
- Date Picker
- Number Input
- Textarea

---

## Validation

Client-side validation includes:

- Full Name required
- Valid Email format
- Department required
- Gender required
- Joining Date required
- Salary greater than 0
- Address required

If validation fails:

- Form submission is prevented.
- Field-level error messages are displayed.

---

## Success Messages

Displays:

```
Employee added successfully
```

or

```
Employee updated successfully
```

depending on the performed action.

---

## Props Received

| Prop | Purpose |
|------|---------|
| handleAddEmployee | Adds employee |
| handleUpdateEmployee | Updates employee |
| selectedEmployee | Loads employee into form |
| clearSelectedEmployee | Clears edit mode |

---

# 3. EmployeeTable.jsx

## Purpose

Displays all employee records inside a responsive table.

---

## Responsibilities

- Display employee information
- Render employee rows dynamically
- Delete employee
- Update employee
- Show empty table message

---

## Data Displayed

- Full Name
- Email
- Department
- Gender
- Joining Date
- Salary
- Address

---

## Features

### Dynamic Rendering

Employees are displayed using

```javascript
map()
```

---

### Delete Button

Uses

```javascript
handleDelete(employee.id)
```

to remove an employee.

---

### Update Button

Uses

```javascript
handleUpdate(employee)
```

to send selected employee data back to the parent component.

---

### Empty State

If no employees exist, the table displays:

```
No Employees Found
```

instead of rendering rows.

---

## Props Received

| Prop | Purpose |
|------|---------|
| employees | Employee array |
| handleDelete | Delete employee |
| handleUpdate | Select employee for editing |

---

# Component Communication

```
Employees.jsx
│
├── EmpForm.jsx
│       │
│       ├── Add Employee
│       ├── Update Employee
│       ├── Validation
│       └── Success Messages
│
└── EmployeeTable.jsx
        │
        ├── Display Employees
        ├── Delete Employee
        └── Update Employee
```

The **Employees.jsx** component acts as the parent component. It stores all application state and passes data and callback functions to child components through props.

---

# React Concepts Practiced

- Functional Components
- useState
- useEffect
- Controlled Components
- Props
- Callback Props
- State Lifting
- Conditional Rendering
- Event Handling
- Dynamic Rendering
- Parent-Child Communication

---

# JavaScript Concepts Used

- Array map()
- Array filter()
- Spread Operator (...)
- Object Manipulation
- Arrow Functions
- Ternary Operator
- Form Events

---

# Week 2 Outcome

Successfully implemented a complete Employee Management module with:

- Add Employee
- Update Employee
- Delete Employee
- Controlled Forms
- Client-side Validation
- Success Notifications
- Responsive Employee Table
- Responsive Employee Form
- Parent-Child Communication using Props
- React State Management using Hooks

This implementation demonstrates practical understanding of React fundamentals, component communication, CRUD operations, and modern frontend development practices.