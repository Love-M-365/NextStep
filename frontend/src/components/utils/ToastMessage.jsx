
import React from 'react';
import './ToastMessage.css'; 

const ToastMessage = ({ message, show }) => {
  return (
    show && (
      <div className="toast-message">
        {message}
      </div>
    )
  );
};

export default ToastMessage;
