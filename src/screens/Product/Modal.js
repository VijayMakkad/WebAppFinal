import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './Modal.css';

const Modal = ({ show, onClose, onSave, productParams }) => {
  // State variables to keep track of selected values
  const [selectedWeight, setSelectedWeight] = useState(productParams[0].product_weight);
  const [selectedPurity, setSelectedPurity] = useState(productParams[0].product_purity);
  const [selectedSize, setSelectedSize] = useState(productParams[0].product_size);

  if (!show) return null;

  const handleSave = () => {
    onSave(selectedWeight, selectedPurity, selectedSize);
  };

  return (
    <div className="add-to-cart-modal-overlay">
      <div className="add-to-cart-modal-content">
        <h3>Select Product Options</h3>
        <div className="add-to-cart-modal-body">
          <div className="add-to-cart-form-group">
            <label htmlFor="weight">Weight:</label>
            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="" id="dropdown-weight">
                {selectedWeight} {/* Display selected weight */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {productParams.map((param, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => setSelectedWeight(param.product_weight)}
                  >
                    {param.product_weight}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="add-to-cart-form-group">
            <label htmlFor="purity">Purity:</label>
            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="" id="dropdown-purity">
                {selectedPurity} {/* Display selected purity */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {productParams.map((param, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => setSelectedPurity(param.product_purity)}
                  >
                    {param.product_purity}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="add-to-cart-form-group">
            <label htmlFor="size">Size:</label>
            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="" id="dropdown-size">
                {selectedSize} {/* Display selected size */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {productParams.map((param, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => setSelectedSize(param.product_size)}
                  >
                    {param.product_size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="add-to-cart-modal-footer">
          <div className="calc-estimation mr-1 col-6 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <button
              style={{
                border: '2px solid white',
                background: 'none',
                width: '90%',
                height: '40px',
              }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="calc-estimation col-6 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <button
              style={{
                border: '2px solid white',
                background: 'none',
                width: '90%',
                height: '40px',
              }}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
