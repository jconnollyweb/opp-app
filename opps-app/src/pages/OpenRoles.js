import React, { useState, useEffect } from 'react';
import rolesData from '../data';
import styles from './OpenRoles.module.css';
import { Link } from 'react-router-dom';
import Form from '../components/form/Form'
import RoleDetails from './RoleDetails';

const OpenRoles = () => {
  const [roles, setRoles] = useState(() => {
    const storedRoles = localStorage.getItem('roles');
    return storedRoles ? JSON.parse(storedRoles) : [];
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('roles', JSON.stringify(roles));
  }, [roles]);

  const handleAddRole = (newRole) => {
    const newRoleWithId = { id: (roles.length + 1).toString(), ...newRole };
    setRoles(prevRoles => [...prevRoles, newRoleWithId]);
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log('roles', roles)
  console.log('rolesdata', rolesData)

  roles.forEach(role => {
    console.log('role id:', role.id) 
    console.log('role name:', role.account) 
  })
  
  

  return (

<div>
      <h1>Open Roles</h1>
      <button onClick={openModal}>Add Role</button>
      {showModal && (
        <div className={styles.modalBackdrop}>
        <div className={styles.modal}>
          <span className={styles.close} onClick={closeModal}>&times;</span>
          <div className={styles.modalContent}>
            <Form onSubmit={handleAddRole} />
          </div>
        </div>
      </div>
      )}
      {roles.map(role => (
        <Link to={`/role/${role.id}`} key={role.id}>
          <div className={styles.roleContainer}>
            <h2 className={styles.nameContainer}>{role.account}</h2>
            <p>Start Date: {role.startDate}</p>
            <p>End Date: {role.endDate}</p>
            <p>Revenue: {role.revenue}</p>
            <p>Location: {role.location}</p>
            <p>Forecast: {role.forecast}</p>
          </div>
        </Link>
      ))}
        <RoleDetails roles={roles} />
      
    </div>
    
  );
};


export default OpenRoles;

