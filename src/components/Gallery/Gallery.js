import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Ensure you have react-bootstrap installed

const Gallery = ({ productItems }) => {
  return (
    <Row className="gallery-row">
      {productItems.map((item, index) => (
        <Col lg={2} md={3} sm={6} xs={12} key={index} className="gallery-item">
          <img
            src={item}
            alt={`Gallery Item ${index}`}
            className="img-fluid gallery-image"
          />
        </Col>
      ))}
    </Row>
  );
};

export default Gallery;
