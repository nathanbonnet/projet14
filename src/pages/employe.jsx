import { NavLink } from 'react-router-dom';
import DataTable from '@nath_b/projet-14-datatable/dist/DataTable';
const Employe = () => {
    const employeesData = JSON.parse(localStorage.getItem('employees'))
    
    return (
        <div id="employee-div" class="container">
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <DataTable
                sources={employeesData}
                show={true}
                search={true}
                columns={{
                firstName: 'First Name',
                lastName: 'Last Name',
                startDate: 'Start Date',
                department: 'Département',
                dateOfBirth: 'Birth Date',
                street: 'Street',
                city: 'City',
                state: 'State',
                zipCode: 'Zip Code'
                }}
                columnFilter={'firstName'}
                order={'asc'}
                dataNumber={true}
                paginationButton={true}
            />
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default Employe