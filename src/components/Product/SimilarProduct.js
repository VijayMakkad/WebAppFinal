import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SimilarProducts = () => {
  return (
    <div className="container similar-products">
      <h2 className="custom-heading text-center mb-4">Similar Products</h2>
      <div className="row similar-products-section overflow-auto col-12">
        {['1', '1', '4', '3'].map((id, index) => (
          <div className="col-6 col-md-3 col-lg-3 mb-4 d-flex justify-content-center" key={index}>
            <div className="card similar-product-item text-center">
              <img src={`../assets/prod${id}.png`} alt={`Similar Product ${index + 1}`} className="card-img-top similar-product-image" />
              <div className="card-body similar-product-details">
                <h5 className="card-title similar-product-name text-warning">Similar Product {index + 1}</h5>
                <p className="card-text similar-product-price text-muted">${(19.99 + index * 5).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;
