import React from 'react';
import rolesData from '../data';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

const RoleDetails = () => {
  const { id } = useParams(); 
  const role = rolesData.find(role => role.id === id); 

  if (!role) {
    return <div>Role not found</div>;
  }

  return (
    <div>
      <h2>{role.account}</h2>
      <p>Start Date: {role.startDate}</p>
      <p>End Date: {role.endDate}</p>
      <p>Revenue: {role.revenue}</p>
      <p>Location: {role.location}</p>
      <p>Forecast: {role.forecast}</p>
      <Link to={'/'}>Back</Link>
    </div>
  );
};

export default RoleDetails;

