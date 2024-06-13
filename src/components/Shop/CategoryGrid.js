import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CategoryGrid.css";

const CategoryGrid = () => {
  return (
    <Container fluid className="category-grid">
      <Row>
        {/* First Column */}
        <Col md={3} className="first-column">
          <Row className="first-row-30">
            <Col>
              <img src="/assets/dashboard_carousel.png" alt="Image 1" className="img-fluid grid-image" />
            </Col>
          </Row>
          <Row className="second-row-70">
            <Col>
              <img src="/assets/shop/gallery1.png" alt="Image 2" className="img-fluid grid-image" />
            </Col>
          </Row>
        </Col>

        {/* Second Column */}
        <Col md={9} className="second-column">
          <Row className="first-row">
            <Col md={8}>
              <img src="/assets/shop/Img 07.png" alt="Image 3" className="img-fluid grid-image" />
            </Col>
            <Col md={4}>
              <img src="/assets/dashboard_carousel.png" alt="Image 4" className="img-fluid grid-image" />
            </Col>
          </Row>
          <Row className="second-row">
            <Col md={4}>
              <img src="/assets/dashboard_carousel.png" alt="Image 5" className="img-fluid grid-image" />
            </Col>
            <Col md={8}>
              <img src="/assets/shop/Img 07.png" alt="Image 6" className="img-fluid grid-image" />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* New Row */}
      <Row className="new-row">
        <Col md={3}>
          <Row className="new-row-sub">
            <Col>
              <img src="/assets/shop/Img 7.png" alt="Image 7" className="img-fluid grid-image" />
            </Col>
          </Row>
          <Row className="new-row-sub">
            <Col>
              <img src="/assets/shop/Img 04.png" alt="Image 8" className="img-fluid grid-image pd-5" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <img src="/assets/shop/gallery1.png" alt="Image 9" className="img-fluid grid-image" />
        </Col>
        <Col md={3}>
        <Row className="new-row-sub">
            <Col>
              <img src="/assets/shop/Img 7.png" alt="Image 7" className="img-fluid grid-image" />
            </Col>
          </Row>
          <Row className="new-row-sub">
            <Col>
              <img src="/assets/shop/Img 04.png" alt="Image 8" className="img-fluid grid-image pd-5" />
            </Col>
          </Row>
        
        </Col>
      </Row>
       
    </Container>
  );
};

export default CategoryGrid;
