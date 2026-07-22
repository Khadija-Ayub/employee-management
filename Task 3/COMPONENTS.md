# Components Documentation (Week 3)

## Project

Employee Management System Dashboard

## Week

Week 3

---

# Overview

Week 3 focused on integrating API data and improving the Employee Management module by implementing data fetching, searching, sorting, pagination, loading skeletons, empty states, and error handling.

The main functionality includes:

- Fetch Employee Data
- Loading Skeleton
- Error Handling
- Empty State
- Search Employees
- Sort Employees
- Client-side Pagination

The implementation mainly uses three reusable components:

- Employees.jsx
- EmployeeTable.jsx
- LoadingSkeleton.jsx

The parent page (**Employees.jsx**) manages API communication, application state, and passes data/functions to child components.

---

# 1. Employees.jsx (Parent Component)

## Purpose

Acts as the main container for the Employee Management module.

It fetches employee data from the API, manages application state, and controls searching, sorting, pagination, and CRUD operations.

---

## Responsibilities

- Fetch employee data using Fetch API
- Transform API response into employee model
- Store employee list
- Handle loading state
- Handle error state
- Search employees
- Sort employees
- Paginate employee records
- Add, Update, and Delete employees
- Pass data and callback functions to child components

---

## State Variables

### employees

Stores all employee records.

```javascript
const [employees, setEmployees] = useState([]);
```

---

### loading

Controls loading skeleton visibility.

```javascript
const [loading, setLoading] = useState(false);
```

---

### error

Stores API error messages.

```javascript
const [error, setError] = useState("");
```

---

### searchTerm

Stores the employee search query.

```javascript
const [searchTerm, setSearchTerm] = useState("");
```

---

### currentPage

Stores the active page number.

```javascript
const [currentPage, setCurrentPage] = useState(1);
```

---

### sortField

Stores the selected sorting column.

```javascript
const [sortField, setSortField] = useState("");
```

---

### sortOrder

Stores the sorting order.

```javascript
const [sortOrder, setSortOrder] = useState("asc");
```

---

## React Hooks Used

### useEffect

Fetches employee data when the component mounts.

```javascript
useEffect(() => {
    fetchEmployees();
}, []);
```

---

Resets pagination whenever the search term changes.

```javascript
useEffect(() => {
    setCurrentPage(1);
}, [searchTerm]);
```

---

## Functions

### fetchEmployees()

Fetches employee data from the DummyJSON API.

Responsibilities:

- Sends API request
- Converts response to JSON
- Transforms API data
- Updates loading state
- Handles API errors

---

### handleSort()

Sorts employee records.

Supports:

- Full Name
- Department
- Salary

Sorting order toggles between:

- Ascending
- Descending

---

### Search Filtering

Employees are filtered using:

```javascript
filter()
```

based on the employee's full name.

---

### Pagination

Pagination is implemented using:

```javascript
slice()
```

to display only the employees belonging to the selected page.

---

# 2. EmployeeTable.jsx

## Purpose

Displays employee records inside a responsive table.

---

## Responsibilities

- Display employee records
- Display loading skeleton
- Display error message
- Display empty state
- Search employees
- Sort employee columns
- Update employee
- Delete employee

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


## Props Received

| Prop | Purpose |
|------|---------|
| currentEmployees | Employees for current page |
| loading | Loading state |
| error | Error message |
| searchTerm | Search value |
| setSearchTerm | Updates search input |
| handleDelete | Deletes employee |
| handleUpdate | Updates employee |
| handleSort | Sorts employee records |

---

# 3. LoadingSkeleton.jsx

## Purpose

Displays placeholder rows while employee data is loading.

---

## Responsibilities

- Generate placeholder rows dynamically
- Mimic employee table layout
- Improve user experience during data loading

---

## Features

- Dynamic row generation using `Array.from()`
- Responsive skeleton layout
- CSS animation
- Reusable loading component

---

## Props Received

| Prop | Purpose |
|------|---------|
| employeesPerPage | Number of placeholder rows |

---

# Component Communication

```
Employees.jsx
│
├── Fetch API
├── Search
├── Sort
├── Pagination
│
├── EmployeeTable.jsx
│       │
│       ├── Display Employees
│       ├── Search
│       ├── Sorting
│       ├── Empty State
│       ├── Error State
│       └── Loading Skeleton
│
└── LoadingSkeleton.jsx
        │
        └── Displays Placeholder Rows
```

The **Employees.jsx** component acts as the parent component. It manages API communication, application state, and passes employee data and callback functions to child components.

---

# React Concepts Practiced

- Functional Components
- useState
- useEffect
- Props
- Conditional Rendering
- Fetch API
- Dynamic Rendering
- Component Communication
- Search Filtering
- Client-side Sorting
- Client-side Pagination
- Loading Skeletons

---

# JavaScript Concepts Used

- Fetch API
- Async / Await
- Try / Catch / Finally
- Array map()
- Array filter()
- Array sort()
- Array slice()
- Array from()
- Spread Operator (...)
- Arrow Functions
- Conditional Statements
- Ternary Operator

---

# Week 3 Outcome

Successfully enhanced the Employee Management module with:

- API Integration
- Data Transformation
- Loading Skeleton
- Search Functionality
- Client-side Sorting
- Client-side Pagination
- Empty State
- Error Handling
- Responsive Employee Table
- Improved User Experience

This implementation demonstrates practical understanding of API integration, asynchronous programming, client-side data manipulation, and advanced React state management.