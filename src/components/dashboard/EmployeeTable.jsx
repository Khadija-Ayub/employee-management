function EmployeeTable({employees})
{
    return(
        <div className="table-container">
        <table  >
            <thead className="t-head" >
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody className="t-body"  >
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
        </table></div>
    );
}
 export default  EmployeeTable