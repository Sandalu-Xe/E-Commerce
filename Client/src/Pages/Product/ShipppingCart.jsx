import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(4); // Initial quantity
  const pricePerItem = 13800; // Price per item in LKR
  const subtotal = quantity * pricePerItem;

  const handleQuantityChange = (operation) => {
    if (operation === "increment") {
      setQuantity(quantity + 1);
    } else if (operation === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container className="py-5">
      <h4 className="mb-4">
        <span>SHOPPING CART</span> → <span>CHECKOUT</span> → <span>ORDER COMPLETE</span>
      </h4>
      <Row>
        <Col md={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://via.placeholder.com/50" // Replace with product image URL
                      alt="Product"
                      className="me-3"
                    />
                    <span>
                      Anker Soundcore Life Note 3i Noise Cancelling Earbuds - White
                    </span>
                  </div>
                </td>
                <td>LKR {pricePerItem.toLocaleString()}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQuantityChange("decrement")}
                    >
                      -
                    </Button>
                    <span className="mx-2">{quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQuantityChange("increment")}
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td>LKR {subtotal.toLocaleString()}</td>
              </tr>
            </tbody>
          </Table>
          <Form className="d-flex mt-3">
            <Form.Control type="text" placeholder="Coupon code" className="me-3" />
            <Button variant="dark">APPLY COUPON</Button>
          </Form>
          <Button variant="dark" className="mt-3">
            UPDATE CART
          </Button>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h5>CART TOTALS</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>LKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>
                  <a href="#calculate-shipping" className="text-danger">
                    Calculate shipping
                  </a>
                </span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>LKR {subtotal.toLocaleString()}</strong>
              </div>
              <Button variant="dark" className="w-100 mt-3">
                PROCEED TO CHECKOUT
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
