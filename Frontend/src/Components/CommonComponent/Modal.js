import React from 'react';
import '../../Assets/css/modal.css';

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
