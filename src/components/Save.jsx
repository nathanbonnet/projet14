import React from "react";

// fonction qui va récupérer toutes les valeurs du formulaire et qui va les enregistrer dans le localStorage
const SaveEmployee = (e, dateOfBirth, startDate, selectedOptionState, selectedOptionDepartement, create) => {
    e.preventDefault();
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

export default SaveEmployee;