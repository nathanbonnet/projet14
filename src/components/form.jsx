import React, { useEffect } from 'react';
import { userCreated } from "../store/action";
import Data from "../data/db";

const saveEmployee = (e) => {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const department = document.getElementById('department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');
  
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        id: employees.length,
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        startDate: startDate.value,
        department: department.value,
        street: street.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    userCreated()
    e.preventDefault();
}

const Form = () => {

    useEffect(() => {
        const stateSelect = document.getElementById('state');
        Data.states.forEach(function(state) {
          const option = document.createElement('option');
          option.value = state.abbreviation;
          option.text = state.name;
          stateSelect.appendChild(option);
        });
    })

    return (
        <form action="#" id="create-employee">
            <div className="modale-create-block">
                <div>
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label for="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="date" />

                <label for="start-date">Start Date</label>
                <input id="start-date" type="date" />
                </div>
                <div>
                <label for="street">Street</label>
                <input id="street" type="text" />

                <label for="city">City</label>
                <input id="city" type="text" />

                <label for="state">State</label>
                <select name="state" id="state"></select>

                <label for="zip-code">Zip Code</label>
                <input id="zip-code" type="number" />
                
                </div>
            </div>
            <div className="footer-modal">
                <label for="department">Department</label>
                <select name="department" id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
                </select>
            <button className="save" onClick={saveEmployee}>Save</button>
            </div>
        </form>
    )
}

export default Form;