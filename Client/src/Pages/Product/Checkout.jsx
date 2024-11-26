import React from "react";
import { Container, Row, Col, Form, Button, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckoutPage = () => {
  return (
    <Container className="py-5">
      <Row>
        {/* Customer Information & Shipping Address */}
        <Col md={8}>
          <h5>CUSTOMER INFORMATION</h5>
          <Form>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <h5>SHIPPING ADDRESS</h5>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First name *</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" required />
            </Form.Group>
            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last name *</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" required />
            </Form.Group>
            <Form.Group controlId="streetAddress" className="mb-3">
              <Form.Label>Street address *</Form.Label>
              <Form.Control type="text" placeholder="Enter street address" required />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group controlId="state" className="mb-3">
                  <Form.Label>State *</Form.Label>
                  <Form.Control type="text" placeholder="Enter state" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="city" className="mb-3">
                  <Form.Label>Town / City *</Form.Label>
                  <Form.Control type="text" placeholder="Enter city" required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="differentBillingAddress" className="mb-3">
              <Form.Check
                type="checkbox"
                label="Use a different billing address"
              />
            </Form.Group>
            <Row>
              <Col md={2}>
                <Form.Group controlId="countryCode" className="mb-3">
                  <Form.Label>Country Code</Form.Label>
                  <Form.Control type="text" value="+94" readOnly />
                </Form.Group>
              </Col>
              <Col md={10}>
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Phone *</Form.Label>
                  <Form.Control type="text" placeholder="Enter phone number" required />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="dark" type="submit" className="w-100">
              CONTINUE TO SHIPPING →
            </Button>
          </Form>
          <div className="mt-3">
            <a href="/Shippingcart">« Return to Cart</a>
          </div>
        </Col>

        {/* Order Summary */}
        <Col md={4}>
          <h5>ORDER SUMMARY</h5>
          <Card>
            <Card.Body>
              <Row className="mb-3">
                <Col xs={8}>
                  <strong>Anker Soundcore Life Note 3i</strong>
                  <br />
                  <span>Noise Cancelling Earbuds - White</span>
                </Col>
                <Col xs={4} className="text-end">
                  LKR 69,000
                </Col>
              </Row>
              <Row className="align-items-center mb-3">
                <Col xs={8}>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => {}}
                  >
                    -
                  </Button>
                  <span className="mx-2">5</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => {}}
                  >
                    +
                  </Button>
                </Col>
                <Col xs={4} className="text-end">
                  <Button variant="outline-danger" size="sm">
                    ✕
                  </Button>
                </Col>
              </Row>
              <hr />
              <div>
                <p>
                  <strong>Subtotal:</strong> LKR 69,000
                </p>
                <p>
                  <strong>Shipping:</strong> Enter your address to view shipping options.
                </p>
                <p className="text-end">
                  <strong>Total: LKR 69,000</strong>
                </p>
              </div>
              <hr />
              <ListGroup variant="flush">
                <ListGroup.Item>✓ 100% Safe and Secure Shopping</ListGroup.Item>
                <ListGroup.Item>✓ Best Prices</ListGroup.Item>
                <ListGroup.Item>✓ Fast Shipping</ListGroup.Item>
                <ListGroup.Item>✓ Quick Order Processing and Tracking</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
