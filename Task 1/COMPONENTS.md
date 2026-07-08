# Component Notes — Employee Management System Dashboard

---

## 1. Dashboard.jsx (Page)

**Location:** `src/pages/Dashboard.jsx`

**Purpose:** Main landing page of the app. Displays a welcome message, employee statistics, and the employee table.

**Props:** None (top-level page component)

**State:** None 
The component contains a static `employees` array (mock data) which is passed to the `EmployeeTable` component as props.

**Key Logic:**
- Maintains a local `employees` array with `id`, `name`, `department`, `status`, `email` fields.
- Renders four `StatCard` components with hardcoded stats (Total Employees, Departments, Attendance Today, New Hires).
- Passes `employees` array down to `EmployeeTable` as a prop.

**Used In:** Rendered via `AppRoutes.jsx` at the `/` route (inside `DashboardLayout`).

---

## 2. DashboardLayout.jsx

**Location:** `src/components/layout/DashboardLayout.jsx`

**Purpose:** Wrapper layout component that structures the app shell — sidebar on one side, header + page content on the other. Acts as the parent route element for all pages.

**Props:** None

**State:**
- `collapsed` (boolean, via `useState`) — tracks whether the sidebar is collapsed or expanded. This is the single source of truth for sidebar state.

**Key Logic:**
- Uses React Router's `<Outlet />` to render whichever page (Dashboard, Employees, etc.) is active.
- Passes `collapsed` down to `Sidebar` (read-only).
- Passes both `collapsed` and `setCollapsed` down to `Header` (so Header can toggle it).
- This is a classic **lifted state** pattern — state lives in the parent so both `Sidebar` (consumer) and `Header` (toggler) can share it.

**Used In:** Top-level layout in `AppRoutes.jsx`, wraps all page routes.

---

## 3. Header.jsx

**Location:** `src/components/layout/Header.jsx`

**Purpose:** Top navigation bar. Shows the app title, sidebar toggle button, and logged-in user info.

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `collapsed` | boolean | Current collapsed state of sidebar (received from `DashboardLayout`) |
| `setCollapsed` | function | Setter to toggle `collapsed` state in the parent |

**State:** None — fully controlled by parent (`DashboardLayout`).

**Key Logic:**
- Menu icon button (`FiMenu`) calls `setCollapsed(!collapsed)` on click to toggle sidebar.
- Displays static username ("Khadija") — not yet dynamic/auth-driven.

**Used In:** `DashboardLayout.jsx`

---

## 4. Sidebar.jsx

**Location:** `src/components/layout/Sidebar.jsx`

**Purpose:** Persistent left-side navigation menu with links to all main pages.

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `collapsed` | boolean | Whether sidebar should render in collapsed (icon-only) mode |

**State:** None — receives `collapsed` from parent; does not manage it locally.

**Key Logic:**
- `menuItems` is a static array of objects (`icon`, `title`, `path`, optional `bottom` flag), defined outside the component so it isn't recreated on every render.
- Renders the array using `.map()` to generate `<NavLink>` items dynamically.
- Uses React Router's `NavLink` with a function-based `className` prop to apply `"active-link"` when a route is active, `"sidebar-link"` otherwise.
- The `Logout` item is flagged with `bottom: true` and given a distinct class (`logout-item`) for separate styling (pushed to bottom of the list).
- Conditionally applies the `"collapsed"` class to the `<aside>` based on the `collapsed` prop.

**Used In:** `DashboardLayout.jsx`

---

## 5. StatCard.jsx

**Location:** `src/components/dashboard/StatCard.jsx`

**Purpose:** Small reusable card that displays a single statistic (icon + title + number). Purely presentational.

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `icon` | JSX element | Icon rendered inside the card |
| `title` | string | Label describing the stat |
| `number` | number | The stat value to display |

**State:** None — stateless/presentational component.

**Key Logic:** No logic — simply destructures props and renders them. Reused 4 times in `Dashboard.jsx` with different data, which is the core example of **component reusability** in this project.

**Used In:** `Dashboard.jsx`

---

## 6. EmployeeTable.jsx

**Location:** `src/components/dashboard/EmployeeTable.jsx`

**Purpose:** Renders a table of employees with their department, status, and email.

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `employees` | array of objects | List of employee records to render (each with `id`, `name`, `department`, `status`, `email`) |

**State:** None — purely presentational, driven entirely by the `employees` prop.

**Key Logic:**
- Uses `.map()` on the `employees` array to dynamically generate table rows.
- Uses `employee.id` as the React `key` for each row (correct practice — stable, unique key instead of array index).
- No conditional styling on `status` yet (e.g., color-coded badges for Present/Absent/Leave) — flagged as a future improvement.

**Used In:** `Dashboard.jsx`

---

## Summary — Data & State Flow

```
DashboardLayout (owns `collapsed` state)
   ├── Sidebar (reads `collapsed`)
   └── Header (reads/writes `collapsed` via setCollapsed)
   └── Outlet → Dashboard (page)
                  ├── StatCard × 4 (receives icon, title, number)
                  └── EmployeeTable (receives employees array)
```