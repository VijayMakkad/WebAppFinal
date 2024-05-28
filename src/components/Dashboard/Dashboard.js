import React from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import { Line, Doughnut } from "react-chartjs-2";
import "./Dashboard.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const lineData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Earnings",
      data: [
        500, 1000, 1500, 2000, 2500, 3000, 3500, 3812.19, 3000, 3500, 4000,
        4500,
      ],
      backgroundColor: "rgba(144, 238, 144, 0.2)",
      borderColor: "rgba(144, 238, 144, 1)",
      borderWidth: 1,
      fill: true,
    },
  ],
};

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

const carouselItems = [
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
  "/assets/dashboard_carousel.png",
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
  return (
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
              <Card.Title>Gold rates the past year</Card.Title>
              <Line data={lineData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="card-custom">
            <Card.Body>
              <Card.Title>SIP Overview</Card.Title>
              <Doughnut data={doughnutData} />
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
      <Row className="my-4">
        <Col>
          <Card className="recent-transactions-card">
            <Card.Body>
              <Row>
                <Col md={7} sm={7}>
                  <h5 className="recent-transactions-title">
                    Recent Transactions
                  </h5>
                </Col>
                <Col
                  md={5}
                  sm={5}
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
        <Col md={5} sm={12}>
          <Card className="referral-card">
            <Card.Body>
              <div>
                <h2></h2>
              </div>
              <h4>GIVE $20, GET $20</h4>
              <p>Tell your friend to enter your code at the checkout:</p>
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
      </Row>
    </Container>
  );
};

export default Dashboard;
