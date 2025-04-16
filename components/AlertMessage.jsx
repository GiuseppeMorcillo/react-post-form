import React from 'react';

const AlertMessage = ({ type, message }) => {
  const alertClass = type === 'success' ? 'alert alert-success' : 'alert alert-danger';

  return (
    <div className={alertClass} role="alert">
      {message}
    </div>
  );
};

export default AlertMessage;
