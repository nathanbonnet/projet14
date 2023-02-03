import React, { useEffect } from "react";
import { save } from "@nath_b/projet-14-datatable/dist/store/action";

// fonction qui va récupérer toutes les valeurs du formulaire et qui va les enregistrer dans le localStorage
const SaveEmployee = (e, idLength, dateOfBirth, startDate, selectedOptionState, selectedOptionDepartement, create) => {
    e.preventDefault();
    const id = idLength;
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const birth = dateOfBirth.toLocaleDateString("fr")
    const start = startDate.toLocaleDateString("fr")
    const department = selectedOptionDepartement && selectedOptionDepartement.value;
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = selectedOptionState && selectedOptionState.value
    const zipCode = document.getElementById('zip-code');
  
    const employee = [{
        id: id,
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: birth,
        startDate: start,
        department: department,
        street: street.value,
        city: city.value,
        state: state,
        zipCode: zipCode.value
    }];
    save(employee)
    create()
}

export default SaveEmployee;