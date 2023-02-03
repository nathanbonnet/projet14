import { NavLink } from 'react-router-dom';
import DataTable from '@nath_b/projet-14-datatable/dist/DataTable';
import { useSelector } from 'react-redux';

// la fonction Employe retourne le DataTable avec la data du localStorage, dans le plug-in on va pouvoir y ajouter toutes 
// les props que l'on souhaite afficher
const Employe = () => {
    const donnees = useSelector(state => state.sources);
    
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <DataTable
                sources={donnees}
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