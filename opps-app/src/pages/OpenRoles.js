import React from 'react';
import rolesData from '../data';
import styles from './OpenRoles.module.css'
import { Link } from 'react-router-dom';

const OpenRoles = () => {
  return (
    <div>
      <h1>Open Roles</h1>
      {rolesData.map((role, index) => (
         <Link to={`/role/${role.id}`}>
        <div className={styles.roleContainer} key={index}>
           
          <h2 className={styles.nameContainer}>{role.account}</h2>
          <p>Start Date: {role.startDate}</p>
          <p>End Date: {role.endDate}</p>
          <p>Revenue: {role.revenue}</p>
          <p>Location; {role.location}</p>
          <p>Forecast: {role.forecast}</p>
          
          
        </div>
        </Link>
      ))}
    </div>
  );
};

export default OpenRoles;
