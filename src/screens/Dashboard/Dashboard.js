import React from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import MainBg from "../../screens/Background/MainBg";

//Below code is for generating random data for the line chart
const generateLineData = (years) => {
  const data = [];
  let earnings = 500;
  for (let i = 0; i < years; i++) {
    earnings += earnings * (Math.random() * 0.1);
    earnings += (Math.random() - 0.5) * 1000;
    data.push({
      name: `Year ${2000 + i}`,
      earnings: parseFloat(earnings.toFixed(2)),
    });
  }
  return data;
};

const lineData = generateLineData(15);

const doughnutData = {
  labels: ["Paid", "Remaining"],
  datasets: [
    {
      data: [7, 5],
      backgroundColor: ["#c0e8ff", "#2b2b2b"],
      hoverBackgroundColor: ["#c0e8ff", "#2b2b2b"],
    },
  ],
};

const doughnutOptions = {
  cutout: "75%", // Adjust this value to change the thickness
  responsive: true,
  plugins: {
    legend: {
      display: true, // Hide the legend if not needed
    },
    tooltip: {
      enabled: true, // Disable the tooltip if not needed
    },
  },
};

const carouselItems = [
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
];

const wishlistItems = [
  "/assets/prod1.png",
  "/assets/prod2.png",
  "/assets/prod3.png",
  "/assets/prod4.png",
  "/assets/prod1.png",
];
const transactions = [
  {
    grams: "2.693 gms",
    amount: "₹15,000",
    date: "10/04/2022 22:04",
    rate: "5570",
    image: "https://via.placeholder.com/50",
  },
  {
    grams: "2.693 gms",
    amount: "₹15,000",
    date: "10/04/2022 22:04",
    rate: "5570",
    image: "https://via.placeholder.com/50",
  },
  {
    grams: "2.693 gms",
    amount: "₹15,000",
    date: "10/04/2022 22:04",
    rate: "5570",
    image: "https://via.placeholder.com/50",
  },
];

const Dashboard = () => {
  const maxVisibleItems = 5;
  return (
    <MainBg>
      <Container fluid className="dashboard">
        <Row>
          <Col md={4} sm={12}>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>Total Savings in Gold</Card.Title>
                <Card.Text>45.7 grams</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>Today's Gold Rate</Card.Title>
                <Card.Text>$7120</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>Your Saving in Rupees</Card.Title>
                <Card.Text>$325,384</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={8} sm={12}>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>Gold rates the past 15 years</Card.Title>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="earnings" stroke="#90EE90" />
                  </LineChart>
                </ResponsiveContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>SIP Overview</Card.Title>
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Carousel>
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={item}
                    alt={`Slide ${index}`}
                    style={{ height: "80vh", borderRadius: "15px" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        {/* Wishlist */}
        <Row className="my-4">
          <Col>
            <Card className="wishlist-card">
              <Card.Body>
                <Row>
                  <Col md={7} sm={7}>
                    <h5 className="wishlist-title">Your Wishlist</h5>
                  </Col>
                  <Col
                    md={5}
                    sm={5}
                    style={{ marginBottom: "1rem" }}
                    className="d-flex align-items-center justify-content-end"
                  >
                    <Button variant="outline-light">
                      {wishlistItems.length > maxVisibleItems
                        ? "View all"
                        : "Explore products"}
                    </Button>
                  </Col>
                </Row>
                <Row>
                  {wishlistItems.slice(0, maxVisibleItems).map((item, index) => (
                    <Col key={index}>
                      <img src={item} className="wishlist-item-img" />
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Recent Transactions */}
        <Row className="my-4">
          <Col>
            <Card className="recent-transactions-card">
              <Card.Body>
                <Row>
                  <Col md={7} sm={7}>
                    <h5 className="recent-transactions-title">
                      Your Recent Transactions
                    </h5>
                  </Col>
                  <Col
                    md={5}
                    sm={5}
                    style={{ marginBottom: "1rem" }}
                    className="d-flex align-items-center justify-content-end"
                  >
                    <Button variant="outline-light">View all</Button>
                  </Col>
                </Row>
                <Row>
                  {transactions.map((transaction, index) => (
                    <Col md={4} sm={12} className="mb-2" key={index}>
                      <Card className="transaction-card">
                        <Card.Body>
                          <div className="d-flex justify-content-between">
                            <span>{transaction.grams}</span>
                            <span>{transaction.amount}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>{transaction.date}</span>
                            <span className="gold-rate">
                              Gold Rate: {transaction.rate}
                            </span>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={12} sm={12}>
            <Card className="referral-card">
              <Card.Body>
                <div>
                  <h2></h2>
                </div>

                <h4>GIVE $20, GET $20</h4>
                <p>Tell your friend to enter your code at the checkout:</p>
                <img
                  className="d-block"
                  src={"/assets/referral_steps.png"}
                  alt={`Referral Flow`}
                  style={{
                    borderRadius: "10px",
                    width: "80%",
                    margin: "0 auto",
                  }}
                />
                <div className="referral-code">Vignesh20</div>

                <div>
                  <Button variant="dark" style={{ marginRight: "0.5rem" }}>
                    Copy code
                  </Button>
                  <Button variant="dark">Edit code</Button>
                </div>
                <Button variant="dark" className="start-referring-button">
                  Start Referring
                </Button>
                <div className="social-links mt-3">
                  <a href="#" className="social-link">
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fa fa-messenger"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>

                <a href="#" className="terms-link">
                  Terms & Conditions
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md={7} sm={12}>
              <Card className="referral-card">
                <Card.Body>
                  <div>
                    <h2></h2>
                  </div>

                  <div>
                    <img
                      className="d-block w-100"
                      src={"/assets/referral_steps.png"}
                      alt={`Referral Flow`}
                      style={{ borderRadius: "15px" }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col> */}
        </Row>
      </Container>
    </MainBg>
  );
};

export default Dashboard;
