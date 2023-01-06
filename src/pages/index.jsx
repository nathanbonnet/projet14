import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Form from "../components/Form";
import '../styles/App.css'
import Modal from 'react-modal';

// localStorage.clear();
  
const Index = () => {
  const [create, setCreate] = useState(false);
  const closeModal = () => {
    setCreate(false)
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
              <Form create={() => setCreate(true)}/>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={create}
        className="modal"
        ariaHideApp={false}
      >
        <h3>Employee Created!</h3>
        <button className="closeModal" onClick={closeModal}>X</button>
      </Modal>
    </main>
  )
}

export default Index;