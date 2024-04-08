import React from 'react';
import '../styles/alert.css'

 
const CustomAlertModal = ({ message, onClose ,theme}) => {
  return (
    <div className={`${theme === 'light' ? 'light-alert' : 'dark-alert'} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75`}>
      <div className=" p-8 rounded-lg">
        <p className="text-lg ">{message}</p>
        <button onClick={onClose} className="px-4 py-2  mt-4 rounded-md focus:outline-none">OK</button>
      </div>
    </div>
  );
};

export default CustomAlertModal;