function EmployeeTable({employees})
{
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
               { employees.map((employee) => (
                    <tr key={employee.id}>
                        <td> {employee.name} </td>
                        <td> {employee.department} </td>
                        <td> {employee.status} </td>
                        <td> {employee.email} </td>
                    </tr>

                )
                )}
            </tbody>
        </table>
    );
}
 export default  EmployeeTable