import React, { useState } from 'react';
import rolesData from '../data';
import styles from './OpenRoles.module.css';
import { Link } from 'react-router-dom';
import Form from '../components/form/Form'

const OpenRoles = () => {
  const [roles, setRoles] = useState(rolesData);
  const [showModal, setShowModal] = useState(false);

  const handleAddRole = (newRole) => {
    const newRoleWithId = { id: roles.length + 1, ...newRole };
    setRoles(prevRoles => [...prevRoles, newRoleWithId]);
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
      {roles.map((role, index) => (
        <Link to={`/role/${role.id}`} key={index}>
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
    </div>
  );
};


export default OpenRoles;

