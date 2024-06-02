import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "./Shop.css";
import Masonry from "react-masonry-css";

const carouselItems = [
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
];

const galleryItems = [
 
  "/assets/dashboard_carousel.png",
  "/assets/shop/gallery1.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/shop/gallery4.png",
  "/assets/shop/gallery2.png",
  "/assets/shop/gallery3.png",
];

const productItems = [
  "/assets/prod1.png",
  "/assets/prod4.png",
  "/assets/prod3.png",
  "/assets/prod4.png",
]

const Shop = () => {
  return (
    <Container fluid className="shop">
      <Row className="my-4">
        <Col>
          <Carousel controls={false}>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item}
                  alt={`Slide ${index}`}
                  style={{ height: "80vh", borderRadius: "15px" }}
                />
                <Carousel.Caption className="carousel-caption-custom">
                  <div className="caption-content">
                    <h3 className="item-title">Gold big hoops</h3>
                    <p className="item-price">₹1500</p>
                    <Button variant="dark">Shop Now</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="info-container">
            <div className="info-row">
              <span className="info-left">Shop The Latest</span>
              <span className="info-right">View all</span>
            </div>
            <div className="info-row">
              <span className="info-bold">Category Grid</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <Masonry
          breakpointCols={{
            default: 3,
            1100: 2,
            700: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img
                src={item}
                alt={`Gallery Item ${index}`}
                className="img-fluid gallery-image"
              />
            </div>
          ))}
        </Masonry>
      </Row>
      <Row className="trending-row">
        <Col md={6} className="trending-text">
          <h1>Most Trending this Autumn</h1>
          <p>
            Based on current fashion trends and new emerging styles, it is
            expected that bold and oversized earrings will continue to be
            popular. Additionally, sustainable fashion, eco-friendly materials
            and ethical production methods are becoming more important to
            consumers, so earrings made from recycled or sustainable materials
            also gain popularity.
          </p>
          <Button variant="dark">Shop Now</Button>
        </Col>
        <Col md={1} className="trending-text"></Col>
        <Col md={5} className="trending-image">
          <img src="/assets/shop/trending.png" alt="Paris" className="img-fluid" />
        </Col>
      </Row>
      <Row className="gift-row">
        <Col md={6} className="gift-text">
          <h1>Gifts of the season</h1>
          <p>
            Based on current fashion trends and new emerging styles, it is
            expected that bold and oversized earrings will continue to be
            popular. Additionally, sustainable fashion, eco-friendly materials
            and ethical production methods are becoming more important to
            consumers, so earrings made from recycled or sustainable materials
            also gain popularity.
          </p>
          <Button variant="dark">SHOP GIFTS</Button>
        </Col>
        <Col md={1} className="trending-text"></Col>
        <Col md={5} className="gift-image">
          <img src="/assets/shop/gift.png" alt="Paris" className="img-fluid" />
        </Col>
      </Row>
      <div className="info-row">
              <span className="info-bold">Follow us on instagram</span>
            </div>
            <Row className="gallery-row">
        {productItems.map((item, index) => (
          <Col md={3} sm={6} xs={12} key={index} className="gallery-item">
            <img
              src={item}
              alt={`Gallery Item ${index}`}
              className="img-fluid gallery-image"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
