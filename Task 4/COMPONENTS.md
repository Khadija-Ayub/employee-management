# Week 4 — Components Documentation

## Overview

Week 4 focused on improving the Employee Management System through **reusable React components**, better UI consistency, accessibility, dark mode support, and additional management pages.

The main goal was to reduce repeated JSX and make common UI elements reusable across different pages.

---

# 1. Reusable Components

The following reusable components were created or improved during Week 4:

```text
src/
└── components/
    └── common/
        ├── Button.jsx
        ├── FormField.jsx
        ├── RadioGroup.jsx
        ├── SearchInput.jsx
        └── Select.jsx
```

These components are shared across pages instead of recreating the same HTML structure repeatedly.

---

# 2. Button Component

### File

```text
components/common/Button.jsx
```

### Purpose

The `Button` component provides a common button structure for the application.

Instead of writing different `<button>` elements repeatedly, pages can use:

```jsx
<Button
    variant="primary"
    size="large"
    type="submit"
>
    Add Employee
</Button>
```

It supports reusable props such as:

- `children`
- `variant`
- `size`
- `type`
- `icon`
- `onClick`
- `disabled`
- `className`

### Why it is useful

The same component can be used for:

- Add buttons
- Update buttons
- Delete buttons
- Modal buttons
- Form submit buttons
- Navigation-related actions

This keeps button styling and behavior consistent throughout the application.

---

# 3. FormField Component

### File

```text
components/common/FormField.jsx
```

### Purpose

`FormField` removes repeated code for labels, inputs, textareas, and validation messages.

Before creating the reusable component, every field required repeated JSX such as:

```jsx
<label>...</label>
<input ... />
{error && <small>...</small>}
```

The reusable component allows the same structure to be written as:

```jsx
<FormField
    name="fullname"
    label="Full Name"
    value={formData.fullname}
    onChange={handleChange}
    placeholder="i.e Khadija Ayub"
    error={errors.fullname}
/>
```

### Supported features

- Text input
- Email input
- Number input
- Date input
- Textarea
- Placeholder
- Minimum value
- Required fields
- Validation errors
- Accessibility attributes

The component supports textarea through:

```jsx
as="textarea"
```

Example:

```jsx
<FormField
    name="address"
    as="textarea"
    label="Address"
    value={formData.address}
    onChange={handleChange}
    rows="4"
    error={errors.address}
/>
```

---

# 4. Select Component

### File

```text
components/common/Select.jsx
```

### Purpose

The `Select` component provides a reusable dropdown field.

Example:

```jsx
<Select
    name="department"
    label="Department"
    value={formData.department}
    onChange={handleChange}
    options={departments}
    error={errors.department}
/>
```

The options are generated dynamically using `map()`:

```jsx
{options.map((option) => (
    <option key={option} value={option}>
        {option}
    </option>
))}
```

### Benefits

The same component can be reused for:

- Department selection
- Status selection
- Attendance filters
- Settings options
- Other dropdowns

---

# 5. RadioGroup Component

### File

```text
components/common/RadioGroup.jsx
```

### Purpose

`RadioGroup` handles a group of related radio buttons dynamically.

Example:

```jsx
<RadioGroup
    label="Gender"
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    options={genderOptions}
    error={errors.gender}
/>
```

Instead of manually creating every radio button, the component uses:

```jsx
options.map(...)
```

### Important controlled-input logic

Each option checks whether it is the currently selected value:

```jsx
checked={value === option}
```

This keeps the radio group controlled by React state.

---

# 6. SearchInput Component

### File

```text
components/common/SearchInput.jsx
```

### Purpose

The `SearchInput` component provides a reusable search field.

Example:

```jsx
<SearchInput
    placeholder="Search employees..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
/>
```

### Used for

The component can be reused for:

- Employee search
- Department search
- Attendance search
- Future dashboard search functionality

---

# 7. Reusable Components in Employee Form

The Employee Form uses the common components together:

```jsx
<FormField />
<Select />
<RadioGroup />
<Button />
```

This significantly reduces repeated JSX and makes the form easier to maintain.

The form supports:

- Add employee
- Update employee
- Validation
- Success messages
- Controlled inputs
- Department selection
- Gender selection
- Address textarea

---

# 8. Reusable Components in Employee Table

The Employee Table also uses reusable components:

```jsx
<Button />
<SearchInput />
```

Action buttons are created using the same `Button` component:

```jsx
<Button
    variant="danger"
    size="small"
    icon={<FaRegTrashCan />}
    ariaLabel="Delete employee"
    onClick={() => handleDelete(employee.id)}
/>
```

and:

```jsx
<Button
    variant="edit"
    size="small"
    icon={<MdOutlineUpdate />}
    ariaLabel="Edit employee"
    onClick={() => handleUpdate(employee)}
/>
```

This keeps the table UI consistent with the rest of the application.

---

# 9. Sortable Table Headers

Week 4 also improved the employee table sorting UI.

Instead of making the entire `<th>` behave like a button, a proper button is placed inside the table header:

```jsx
<th>
    <button
        type="button"
        className="sortable-header"
        onClick={() => handleSort("fullname")}
        aria-label="Sort employees by full name"
    >
        Full Name
        <SortIcon field="fullname" />
    </button>
</th>
```

This provides a better semantic and accessible interaction.

Sorting is available for:

- Full Name
- Department
- Salary

---

# 10. SortIcon Component

A small reusable `SortIcon` component was introduced to avoid repeating sorting icon logic.

It displays:

- Neutral sort icon when a column is not active
- Up arrow for ascending sorting
- Down arrow for descending sorting

Example:

```jsx
<SortIcon
    field="fullname"
    sortField={sortField}
    sortOrder={sortOrder}
/>
```

This keeps the table header code clean and readable.

---

# 11. Department Page Components

The Departments page was developed using reusable UI patterns.

It includes:

- Reusable `StatCard`
- Reusable `Button`
- Reusable `FormField`
- Reusable `Select`
- Department table
- Department modal
- Department form
- Status badges
- Action buttons

The page supports:

- Add department
- Edit department
- Delete department
- Employee count
- Department manager
- Active/Inactive status

---

# 12. Department Modal

The Department modal provides a focused interface for adding and editing departments.

The same modal structure can be used for both operations.

Conceptually:

```text
Add Department
      ↓
Open Modal
      ↓
Enter Department Information
      ↓
Save
      ↓
Update Department State
```

When editing an existing department, the selected department data is loaded into the form.

This avoids creating separate Add and Edit pages.

---

# 13. Attendance Page

Week 4 also introduced the Attendance page.

The page uses reusable UI patterns for:

- Statistics
- Attendance table
- Status indicators
- Buttons
- Search/filter UI where applicable

The attendance interface was intentionally kept simple while maintaining consistency with the Employee and Department pages.

---

# 14. Dark Mode

Dark mode was added to improve the application's UI and user experience.

Instead of hardcoding colors separately throughout every component, CSS variables are used.

Example:

```css
:root {
    --bg-color: #f4f7fb;
    --surface-color: #ffffff;
    --text-color: #2c3e50;
    --primary-color: #4DB6AC;
}
```

Dark theme values are defined using:

```css
[data-theme="dark"] {
    --bg-color: #121212;
    --surface-color: #1f1f1f;
    --text-color: #f5f5f5;
}
```

Components then use variables such as:

```css
background: var(--surface-color);
color: var(--text-color);
```

This makes theme management easier and prevents duplicated color definitions.

---

# 15. Accessibility Improvements

Week 4 also included accessibility improvements.

### Form fields

`FormField` supports:

```jsx
aria-invalid={!!error}
```

and:

```jsx
aria-describedby={error ? errorId : undefined}
```

This allows assistive technologies to associate an input with its validation message.

### Sort buttons

Sortable table headers use:

```jsx
aria-label="Sort employees by full name"
```

### Action buttons

Icon-only buttons use accessible labels such as:

```jsx
ariaLabel="Delete employee"
```

This improves usability for users who rely on screen readers.

---

# 16. Responsive UI

Reusable components were styled to work across different screen sizes.

Responsive behavior was implemented for:

- Employee table
- Department table
- Forms
- Dashboard cards
- Navigation
- Attendance page
- Modals

CSS media queries were used where necessary.

---

# 17. Component Architecture

The Week 4 component structure follows this pattern:

```text
Pages
  │
  ├── Employee Page
  │       ├── FormField
  │       ├── Select
  │       ├── RadioGroup
  │       └── Button
  │
  ├── Department Page
  │       ├── StatCard
  │       ├── FormField
  │       ├── Select
  │       └── Button
  │
  ├── Attendance Page
  │       ├── StatCard
  │       └── Button
  │
  └── Dashboard
          ├── StatCard
          ├── EmployeeTable
          └── SearchInput
```

The purpose is to keep common UI elements inside `components/common/` and page-specific components inside their relevant folders.

---

# 18. Main React Concepts Practiced in Week 4

Week 4 strengthened the following concepts:

- Reusable components
- Component composition
- Props
- Conditional rendering
- Controlled components
- State management
- `useState`
- `useEffect`
- Array `map()`
- Array `reduce()`
- Dynamic rendering
- Modal state management
- Reusable form logic
- Accessibility attributes
- CSS variables
- Dark mode
- Responsive CSS
- React Icons
- Component-based UI architecture

---

# 19. Week 4 Outcome

By the end of Week 4, the project was improved from a basic employee CRUD dashboard into a more structured and reusable React application.

### Major improvements

- Repeated form JSX was replaced with reusable components.
- Buttons were standardized using variants and sizes.
- Search input became reusable.
- Dropdowns became reusable.
- Radio button groups became reusable.
- Employee table sorting received a cleaner UI.
- Department management was added.
- Attendance page was added.
- Dark mode was implemented.
- Accessibility attributes were added.
- UI styling became more consistent.
- Responsive behavior was improved.
- Component architecture became easier to maintain.

---


# Conclusion

Week 4 focused primarily on **code quality, reusability, accessibility, and UI improvements**.

The biggest architectural improvement was introducing reusable components such as `Button`, `FormField`, `Select`, `RadioGroup`, and `SearchInput`. These components reduce duplication and allow the same UI patterns to be reused across Employees, Departments, Attendance, and other pages.

The project now has a stronger component-based structure and is easier to extend with additional features in future weeks.
