import React from 'react'
import './modal.css'

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay1">
      <div className="modal-content1">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
