import React from 'react'

const Modal = ({isOpen, onClose, children }) => {
    const modalStyles = {
        display: isOpen ? 'block' : 'none',
      };
  return (
    <div className='container'>
    <div className="modal" style={modalStyles}>
        <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            {children}
        </div>
    </div>
    </div>
  )
}

export default Modal
