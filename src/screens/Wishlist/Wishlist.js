import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Wishlist.css";
import MainBg from "../../screens/Background/MainBg";

const wishlistItems = [
  "/assets/prod1.png",
  "/assets/prod2.png",
  "/assets/prod3.png",
  "/assets/prod4.png",
  "/assets/prod1.png",
];

const Wishlist = () => {
  const [likedItems, setLikedItems] = useState(
    new Array(wishlistItems.length).fill(false)
  );

  const toggleLike = (index) => {
    setLikedItems((prev) => {
      const newLikes = [...prev];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  return (
    <MainBg>
      <Container fluid className="wishlist-page-wl">
        <Row className="my-4">
          <Col>
            <Card className="wishlist-card-wl">
              <Card.Body>
                <Row>
                  <Col md={7} sm={7}>
                    <h5
                      className="wishlist-title-wl"
                      style={{ marginBottom: "20px" }}
                    >
                      Your Wishlist
                    </h5>
                  </Col>
                </Row>
                {wishlistItems.length === 0 ? (
                  <Row className="justify-content-center">
                    <Col className="text-center">
                      <div className="wishlist-empty-wl">
                        <h5 style={{ color: "grey" }}>
                          No items added to wishlist yet
                        </h5>
                        <Button
                          variant="outline-dark"
                          className="explore-button-wl"
                        >
                          Explore Products
                        </Button>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    {wishlistItems.map((item, index) => (
                      <Col key={index} md={6} sm={6} className="mb-4">
                        <Card className="wishlist-item-card-wl">
                          <div
                            className="heart-icon-wl"
                            onClick={() => toggleLike(index)}
                          >
                            {likedItems[index] ? (
                              <FaRegHeart className="heart-outline-wl" />
                            ) : (
                              <FaHeart className="heart-filled-wl" />
                            )}
                          </div>
                          <Card.Img
                            variant="top"
                            src={item}
                            className="wishlist-item-img-wl"
                          />

                          <Card.Body className="card-body-flex-wl">
                            <Card.Title>Product {index + 1}</Card.Title>
                            <Card.Text>
                              This is a description of product {index + 1}.
                            </Card.Text>
                            <Button
                              variant="outline-dark"
                              className="add-button-wl"
                            >
                              Add to Cart
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainBg>
  );
};

export default Wishlist;
