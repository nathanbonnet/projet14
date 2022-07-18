import React, { useEffect } from 'react';
import Modal from '../components/modal'
import Data from '../data/db.json';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import Form from "../components/form";
import '../styles/App.css'


// localStorage.clear();
  
const Index = () => {
  const create = useSelector((state) => state.boolean);

  if(create) {
    document.getElementById('main').classList.add('opacity')
  }

  return (
    <main>
      <div id="main">
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <div className="container">
          <NavLink to="employe">View Current Employees</NavLink>
          <div className="modale-create">
            <div className="modale-create-content">
              <h2>Create Employee</h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
      {create && <Modal content="Employee Created!"/>}
    </main>
  )
}

export default Index;