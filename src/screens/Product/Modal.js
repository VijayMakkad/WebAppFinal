import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, onSave, productParams }) => {
  if (!show) return null;

  return (
    <div className="add-to-cart-modal-overlay">
      <div className="add-to-cart-modal-content">
        <h3>Select Product Options</h3>
        <div className="add-to-cart-modal-body">
          <div className="add-to-cart-form-group">
            <label htmlFor="weight">Weight:</label>
            <select id="weight">
              {productParams.map((param, index) => (
                <option key={index} value={param.product_weight}>
                  {param.product_weight}
                </option>
              ))}
            </select>
          </div>
          <div className="add-to-cart-form-group">
            <label htmlFor="purity">Purity:</label>
            <select id="purity">
              {productParams.map((param, index) => (
                <option key={index} value={param.product_purity}>
                  {param.product_purity}
                </option>
              ))}
            </select>
          </div>
          <div className="add-to-cart-form-group">
            <label htmlFor="size">Size:</label>
            <select id="size">
              {productParams.map((param, index) => (
                <option key={index} value={param.product_size}>
                  {param.product_size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="add-to-cart-modal-footer">
          <button className="btn" onClick={onClose}>Close</button>
          <button className="btn" onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
