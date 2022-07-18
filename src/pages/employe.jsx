import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Employe = () => {
    const employeesData = JSON.parse(localStorage.getItem('employees'))
    console.log(employeesData)
    return (
        <div id="employee-div" class="container">
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default Employe