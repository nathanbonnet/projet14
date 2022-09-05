import React, { useEffect, useState } from 'react';
import Data from "../data/db";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const saveEmployee = (dateOfBirth, startDate, selectedOptionState, selectedOptionDepartement, create) => {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const birth = dateOfBirth.toLocaleDateString("fr")
    const start = startDate.toLocaleDateString("fr")
    const department = selectedOptionDepartement && selectedOptionDepartement.value;
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = selectedOptionState && selectedOptionState.value
    const zipCode = document.getElementById('zip-code');
  
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        id: employees.length,
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: birth,
        startDate: start,
        department: department,
        street: street.value,
        city: city.value,
        state: state,
        zipCode: zipCode.value
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees))
    create()
}

const department = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
];

const Form = ({create}) => {
    const [startdate, setStartDate] = useState(new Date());
    const [dateOfBirth, setdateOfBirth] = useState(new Date());
    const [selectedOptionState, setSelectedOptionState] = useState(null);
    const [selectedOptionDepartement, setSelectedOptionDepartement] = useState(null);
    const stateSelect = [];
    useEffect(() => {
        Data.states.forEach(function(state) {
          stateSelect.push({value: state.name, label: state.name});
        });
    })

    return (
        <form action="#" id="create-employee">
            <div className="modale-create-block">
                <div className="form-left">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label for="date-of-birth">Date of Birth</label>
                    <DatePicker dateFormat="dd/MM/yyyy" id="date-of-birth" selected={dateOfBirth} onChange={(date) => setdateOfBirth(date)} />

                    <label for="start-date">Start Date</label>
                    <DatePicker dateFormat="dd/MM/yyyy" id="start-date" selected={startdate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="form-right">
                    <label for="street">Street</label>
                    <input id="street" type="text" />

                    <label for="city">City</label>
                    <input id="city" type="text" />

                    <label for="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </div>
            </div>
            <div className="footer-modal">
                <div className="footer-modal-content">
                    <div className="content-department">
                        <label for="department">Department</label>
                        <Select
                            id='department'
                            defaultValue={selectedOptionDepartement}
                            onChange={setSelectedOptionDepartement}
                            options={department}
                        />
                    </div>
                    <div className="content-state">
                        <label for="state">State</label>
                        <Select
                            id='state'
                            defaultValue={selectedOptionState}
                            onChange={setSelectedOptionState}
                            options={stateSelect}
                        />
                    </div>
                </div>
            <button className="save" onClick={(e) => saveEmployee(dateOfBirth, startdate, selectedOptionState, selectedOptionDepartement, create)}>Save</button>
            </div>
        </form>
    )
}

export default Form;