import React, { useState } from 'react';
import Data from "../data/db";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import SaveEmployee from './Save';
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
 
const Form = ({create}) => {
    const [startdate, setStartDate] = useState(new Date());
    const [dateOfBirth, setdateOfBirth] = useState(new Date());
    const [selectedOptionState, setSelectedOptionState] = useState(null);
    const [selectedOptionDepartement, setSelectedOptionDepartement] = useState(null);
    const id = useSelector(state => state.sources.length) + 1;

    return (
        <form action="#" id="create-employee">
            <div className="modale-create-block">
                <div className="form-left">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker dateFormat="dd/MM/yyyy" id="date-of-birth" selected={dateOfBirth} onChange={(date) => setdateOfBirth(date)} />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker dateFormat="dd/MM/yyyy" id="start-date" selected={startdate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="form-right">
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </div>
            </div>
            <div className="footer-modal">
                <div className="footer-modal-content">
                    <div className="content-department">
                        <label htmlFor="department">Department</label>
                        <Select
                            id='department'
                            defaultValue={selectedOptionDepartement}
                            onChange={setSelectedOptionDepartement}
                            options={Data.department}
                        />
                    </div>
                    <div className="content-state">
                        <label htmlFor="state">State</label>
                        <Select
                            id='state'
                            defaultValue={selectedOptionState}
                            onChange={setSelectedOptionState}
                            options={Data.states}
                        />
                    </div>
                </div>
            <button className="save" onClick={(e) => SaveEmployee(e, id, dateOfBirth, startdate, selectedOptionState, selectedOptionDepartement, create)}>Save</button>
            </div>
        </form>
    )
}

export default Form;