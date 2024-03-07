// AddRoleForm.js
import React, { useState } from 'react';
import styles from './Form.module.css'

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    account: '',
    sector: '',
    engagement: '',
    startDate: '',
    endDate: '',
    owner: '',
    role: '',
    location: '',
    revenue: '',
    forecast: '',
    notes: '',
    grade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for each property */}
      <input type="text" name="account" value={formData.account} onChange={handleChange} placeholder="Account" />
      <input type="text" name="sector" value={formData.sector} onChange={handleChange} placeholder="Sector" />
      <input type="text" name="engagement" value={formData.engagement} onChange={handleChange} placeholder="Engagement" />
      <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Start Date" />
      <input type="text" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" />
      <input type="text" name="owner" value={formData.owner} onChange={handleChange} placeholder="Owner" />
      <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role" />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
      <input type="text" name="revenue" value={formData.revenue} onChange={handleChange} placeholder="Revenue" />
      <input type="text" name="forecast" value={formData.forecast} onChange={handleChange} placeholder="Forecast" />
      <input type="text" name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes" />
      <input type="text" name="grade" value={formData.grade} onChange={handleChange} placeholder="Grade" />
      <div className={styles.subBtn}><button className={styles.btn} type="submit">Add Role</button></div>
    </form>
  );
};

export default Form;
