// ReservationFormFields.js
import React from 'react';
import '../../styles/fields.css'
const ReservationFormFields = ({ formData, handleInputChange ,theme}) => {
  return (
    <div className={`${theme === 'light' ? 'light-fields' : 'dark-fields'}`}>
      <div className="flex flex-col">
        <label htmlFor="name" className={` text-sm font-semibold `}>Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="px-3 py-2 border rounded-md focus:outline-none " required />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-semibold ">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="px-3 py-2 border rounded-md focus:outline-none " required />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phoneNumber" className="text-sm font-semibold ">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="px-3 py-2 border rounded-md focus:outline-none " required />
      </div>
    </div>
  );
};

export default ReservationFormFields;
