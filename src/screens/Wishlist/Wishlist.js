import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./Wishlist.css";
import MainBg from "../../screens/Background/MainBg";
import {
  fetchWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const { items, status } = wishlist;

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch, items.length]);

  const handleDelete = (productId) => {
    dispatch(removeFromWishlist(productId)).then(() => {
      dispatch(fetchWishlist());
    });
  };

  return (
    <MainBg>
      <div fluid className="wishlist-page-wl">
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
                {status === "loading" ? (
                  <h5>Loading...</h5>
                ) : items.length === 0 ? (
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
                    {items.map((item, index) => (
                      <Col key={index} md={4} sm={12} className="mb-4">
                        <Card className="wishlist-item-card-wl">
                          <div className="image-container-wl">
                            <Card.Img
                              variant="top"
                              src={item.image}
                              className="wishlist-item-img-wl"
                            />
                            <div
                              className="delete-icon-wl"
                              onClick={() => handleDelete(item.product_id)}
                            >
                              <FaTimes className="cross-icon-wl" />
                            </div>
                          </div>
                          <Card.Body className="card-body-flex-wl">
                            <div className="item-details-wl">
                              <div>
                                <Card.Title className="card-title-wl">
                                  {item.name}
                                </Card.Title>
                                <Card.Text className="product-id-wl">
                                  ID: {item.product_id}
                                </Card.Text>
                              </div>
                              <Button
                                variant="outline-dark"
                                className="add-button-wl"
                                // onClick={}
                              >
                                Add to Cart
                              </Button>
                            </div>
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
      </div>
    </MainBg>
  );
};

export default Wishlist;
