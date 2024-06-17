// src/components/CategoryGrid.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CategoryGrid.css';

const images = [
  { src: "/assets/dashboard_carousel.png", label: "Rings", id: "Rings" },
  { src: "/assets/shop/gallery4.png", label: "Necklace", id: "Necklace" },
  { src: "/assets/shop/Img 07.png", label: "Coins", id: "Coins" },
  { src: "/assets/dashboard_carousel.png", label: "Ear Rings", id: "EarRings" },
  { src: "/assets/dashboard_carousel.png", label: "Bracelets", id: "Bracelets" },
  { src: "/assets/shop/Img 07.png", label: "Category 6", id: "cat6" },
  { src: "/assets/shop/Img 7.png", label: "Category 7", id: "cat7" },
  { src: "/assets/shop/Img 04.png", label: "Category 8", id: "cat8" },
  { src: "/assets/shop/gallery1.png", label: "Category 9", id: "cat9" },
  { src: "/assets/shop/Img 7.png", label: "Category 10", id: "cat10" },
  { src: "/assets/shop/Img 04.png", label: "Category 11", id: "cat11" }
];

const CategoryGrid = () => {
  const handleImageClick = async (id) => {
    try {
      // const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`);
      const response = await fetch(`http://127.0.0.1:8000/api/products/popular`);
      const data = await response.json();
      localStorage.setItem('products', JSON.stringify(data.products));
      window.location.href = 'http://localhost:3000/explore';
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <Container fluid className="category-grid">
      <Row>
        {/* First Column */}
        <Col md={3} className="first-column">
          <Row className="first-row-30">
            <Col className="image-container" onClick={() => handleImageClick(images[0].id)}>
              <img src="/assets/dashboard_carousel.png" alt="Image 1" className="img-fluid grid-image" />
              <div className="category-label">{images[0].label}</div>
            </Col>
          </Row>
          <Row className="second-row-70">
            <Col className="image-container" onClick={() => handleImageClick(images[1].id)}>
              <img src="/assets/shop/gallery1.png" alt="Image 2" className="img-fluid grid-image" />
              <div className="category-label">{images[1].label}</div>
            </Col>
          </Row>
        </Col>

        {/* Second Column */}
        <Col md={9} className="second-column">
          <Row className="first-row">
            <Col md={8} className="image-container" onClick={() => handleImageClick(images[2].id)}>
              <img src="/assets/shop/Img 07.png" alt="Image 3" className="img-fluid grid-image" />
              <div className="category-label">{images[2].label}</div>
            </Col>
            <Col md={4} className="image-container" onClick={() => handleImageClick(images[3].id)}>
              <img src="/assets/dashboard_carousel.png" alt="Image 4" className="img-fluid grid-image" />
              <div className="category-label">{images[3].label}</div>
            </Col>
          </Row>
          <Row className="second-row">
            <Col md={4} className="image-container" onClick={() => handleImageClick(images[4].id)}>
              <img src="/assets/dashboard_carousel.png" alt="Image 5" className="img-fluid grid-image" />
              <div className="category-label">{images[4].label}</div>
            </Col>
            <Col md={8} className="image-container" onClick={() => handleImageClick(images[5].id)}>
              <img src={images[5].src} alt="Image 6" className="img-fluid grid-image" />
              <div className="category-label">{images[5].label}</div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* New Row */}
      <Row className="new-row">
        <Col md={3}>
          <Row className="new-row-sub">
            <Col>
              <div className="image-container" onClick={() => handleImageClick(images[6].id)}>
                <img src={images[6].src} alt="Image 7" className="img-fluid grid-image" />
                <div className="category-label">{images[6].label}</div>
              </div>
            </Col>
          </Row>
          <Row className="new-row-sub">
            <Col>
              <div className="image-container" onClick={() => handleImageClick(images[7].id)}>
                <img src={images[7].src} alt="Image 8" className="img-fluid grid-image pd-5" />
                <div className="category-label">{images[7].label}</div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <div className="image-container" onClick={() => handleImageClick(images[8].id)}>
            <img src={images[8].src} alt="Image 9" className="img-fluid grid-image" />
            <div className="category-label">{images[8].label}</div>
          </div>
        </Col>
        <Col md={3}>
          <Row className="new-row-sub">
            <Col>
              <div className="image-container" onClick={() => handleImageClick(images[9].id)}>
                <img src={images[9].src} alt="Image 10" className="img-fluid grid-image" />
                <div className="category-label">{images[9].label}</div>
              </div>
            </Col>
          </Row>
          <Row className="new-row-sub">
            <Col>
              <div className="image-container" onClick={() => handleImageClick(images[10].id)}>
                <img src={images[10].src} alt="Image 11" className="img-fluid grid-image pd-5" />
                <div className="category-label">{images[10].label}</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryGrid;
