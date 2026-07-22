# Employee Management System Dashboard

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite)
![Status](https://img.shields.io/badge/Status-Week%203-success)
![License](https://img.shields.io/badge/License-MIT-green)

A modern and responsive **Employee Management System Dashboard** built using **React** and **Vite**. The project demonstrates React fundamentals including reusable components, client-side routing, CRUD operations, controlled forms, API integration, searching, sorting, pagination, state management, validation, and responsive UI design.

---

# 📖 Project Overview

The Employee Management System Dashboard provides administrators with an intuitive interface to manage employee information.

The project follows a **component-based architecture** and was developed to strengthen practical React development skills through real-world features such as:

- Dashboard Layout
- Employee CRUD Operations
- API Integration
- Search & Sorting
- Pagination
- Form Validation
- Responsive Design
- State Management
- React Router

---

# ✨ Features

## 📊 Dashboard

- Employee Statistics Cards
- Welcome Dashboard
- Company Overview
- Responsive Dashboard Layout

---

## 🧭 Navigation

- React Router Navigation
- Persistent Sidebar
- Collapsible Sidebar
- Active Navigation Highlighting
- Responsive Navigation

---

## 👨‍💼 Employee Management

- View Employees
- Add Employee
- Update Employee
- Delete Employee
- Search Employees
- Sort Employees
- Client-side Pagination
- Responsive Employee Table
- Department Information
- Salary Formatting
- Empty Table State
- Loading Skeleton
- Error State Handling

---

## 📝 Employee Form

- Controlled Components
- Form Validation
- Success Messages
- Auto Form Reset
- Real-time Form Updates

---

## 🌐 API Integration

- Fetch employee data using Fetch API
- Transform API response into application model
- Loading Skeleton while fetching
- Error State
- Empty State

---

## 🎨 User Interface

- Modern Dashboard Design
- Responsive Layout
- Reusable Components
- CSS Flexbox
- Hover Effects
- Smooth Transitions
- Mobile Friendly

---

# 🛠 Technologies Used

- React
- Vite
- JavaScript (ES6+)
- React Router DOM
- React Hooks (`useState`, `useEffect`)
- Fetch API
- React Icons
- HTML5
- CSS3

---

# 🌐 Mock API

Employee data is fetched from the **DummyJSON Users API**.

### Endpoint

```text
https://dummyjson.com/users
```

The fetched user data is transformed into the application's employee model before rendering it inside the employee table.

---

# 📂 Folder Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── dashboard/
│   │   ├── EmployeeTable.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   └── StatCard.jsx
│   │
│   ├── employees/
│   │   └── EmpForm.jsx
│   │
│   └── layout/
│       ├── DashboardLayout.jsx
│       ├── Header.jsx
│       └── Sidebar.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Employees.jsx
│   ├── Departments.jsx
│   ├── Attendance.jsx
│   └── Settings.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── styles/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🚀 Installation

## Clone the repository

```bash
git clone https://github.com/Khadija-Ayub/employee-management.git
```

## Navigate into the project

```bash
cd employee-management
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

---

# 📸 Screenshots

## 🏠 Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 📊 Statistics Cards

![Statistics Cards](screenshots/statcards.png)

---

## 👨‍💼 Employee Table

![Employee Table](screenshots/table.png)

---

## 🔍 Search Employees

![Search](screenshots/search.png)

---

## ↕ Sort Employees

![Sorting](screenshots/sorting.png)

---
# ✅ Validation Scenarios

The Employee Form performs client-side validation before allowing data submission.

| Scenario | Expected Result |
|-----------|----------------|
| Full Name is empty | Error message displayed |
| Invalid Email | Error message displayed |
| Department not selected | Error message displayed |
| Gender not selected | Error message displayed |
| Joining Date missing | Error message displayed |
| Salary ≤ 0 | Error message displayed |
| Address is empty | Error message displayed |
| Valid Form Submission | Employee added successfully |
| Employee Update | Existing employee updated |
| Employee Delete | Employee removed successfully |
| No Employees Available | "No Employees Found" message displayed |

---

# 📷 Validation Screenshots

### Empty Form Validation

![Validation Empty](screenshots/validation-empty.png)

---

### Invalid Email Validation

![Invalid Email](screenshots/validation-email.png)

---

### Successful Employee Addition

![Success Message](screenshots/success-message.png)

---

# 📚 React Concepts Practiced

- Functional Components
- Component-Based Architecture
- Props
- Callback Props
- State Lifting
- useState
- useEffect
- Controlled Components
- Conditional Rendering
- Form Validation
- Dynamic Rendering using `map()`
- Array Filtering using `filter()`
- Array Sorting using `sort()`
- Pagination using `slice()`
- Fetch API
- API Data Transformation
- Event Handling

---

# 👩‍💻 Author

**Khadija Ayub**

Frontend Developer | React Learner

### GitHub

https://github.com/Khadija-Ayub

### LinkedIn

https://www.linkedin.com/in/khadija-ayub-0868b71b4

---