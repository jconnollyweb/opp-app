import React from 'react';
import rolesData from '../data';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import styles from './RoleDetails.module.css'

const RoleDetails = () => {
  const { id } = useParams(); 
  const role = rolesData.find(role => role.id === id); 

  if (!role) {
    return <div>Role not found</div>;
  }

  return (
    <div className={styles.mainContainer}> 
    <div className={styles.detailsContainer}>
      <div className={styles.titleContainer}>
       <h2>{role.account}</h2>
      </div>
      <div className={styles.bothSides}>
      <div className={styles.leftSide}>
          <p>Start Date: {role.startDate}</p>
          <p>End Date: {role.endDate}</p>
          <p>Revenue: {role.revenue}</p>
          <p>Owner: {role.owner}</p>
          <p>Forecast: {role.forecast}</p>
      </div>
      <div className={styles.rightSide}>
          <p>Role: {role.role}</p>
          <p>Location: {role.location}</p>
          <p>Grade: {role.grade} </p>
          <p>Notes: {role.notes}</p>
      </div>
   </div>
      
     
     
      <Link className={styles.linkBtn} to={'/opps-app'}>Back</Link>
    </div>
    </div>
  );
};

export default RoleDetails;

