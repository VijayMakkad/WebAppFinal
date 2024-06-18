import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import "./LatestProduct.css";
import MainBg from "../Background/MainBg";

const LatestProduct = () => {
  const [priceRange, setPriceRange] = useState(50);
  const [isOnSale, setIsOnSale] = useState(false);
  const [isInStock, setIsInStock] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const handleRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const toggleOnSale = () => {
    setIsOnSale(!isOnSale);
  };

  const toggleInStock = () => {
    setIsInStock(!isInStock);
  };

  return (
    <MainBg>
      <Container fluid className="latest-products-page">
        <Row>
          {/* Sidebar Section */}
          <Col md={3} className="sidebar">
            <h4>Shop the Latest</h4>
            <Form className="search-bar mt-4">
              <Form.Control type="text" placeholder="Search" />
              <Button variant="" className="search-icon">
                <i className="fas fa-search"></i>
              </Button>
            </Form>
            <Dropdown className="mt-4 dropdown-container">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Shop by
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-4 dropdown-container">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Sort by
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="slider-container mt-4">
              <input
                type="range"
                className="form-range"
                id="customRange1"
                min="1"
                max="100"
                value={priceRange}
                onChange={handleRangeChange}
              />
              <div className="price-range">Price Range: ${priceRange}</div>
            </div>
            <div className="toggle-section mt-4">
              <span>On Sale</span>
              <div className={`custom-toggle-btn ${isOnSale ? "checked" : ""}`} onClick={toggleOnSale}></div>
            </div>
            <div className="toggle-section mt-4">
              <span>In Stock</span>
              <div className={`custom-toggle-btn ${isInStock ? "checked" : ""}`} onClick={toggleInStock}></div>
            </div>
          </Col>

          {/* Main Content Section */}
          <Col md={9} className="main-content">
            <Row>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <Col key={index} md={4} className="product-col">
                    <img src={product.image} alt={`Product ${index + 1}`} className="img-fluid product-image" />
                    <div className="product-text mt-4">
                      <h5>{product.name}</h5>
                      <p className="price">100$</p>
                    </div>
                  </Col>
                ))
              ) : (
                <p>No products to show</p>
              )}
            </Row>
          </Col>
        </Row>
        <Row className="gift-row">
          <Col md={6} className="gift-text">
            <h1>Explore</h1>
            <p>
              Based on current fashion trends and new emerging styles, it is
              expected that bold and oversized earrings will continue to be
              popular. Additionally, sustainable fashion, eco-friendly materials
              and ethical production methods are becoming more important to
              consumers, so earrings made from recycled or sustainable materials
              also gain popularity.
            </p>
            <Button variant="dark" className="short-button">Explore</Button>
          </Col>
          <Col md={2} className="trending-text"></Col>
          <Col md={4} className="gift-image">
            <img src="/assets/shop/gift.png" alt="gift" className="image-gift img-fluid" />
          </Col>
        </Row>
      </Container>
    </MainBg>
  );
};

export default LatestProduct;
