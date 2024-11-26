import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity(quantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const product = {
    name: "Anker Liberty 4 True Wireless Earbuds",
    price: 27800,
    originalPrice: 31236,
    features: [
      "9/28 hours of playtime for all-day listening",
      "HearID personalized active noise cancelling",
      "All-new heart rate sensor with Soundcore app",
      "CloudComfort ear tips for long-lasting comfort",
      "Crisp, clear sound via ACAA 3.0 Coaxial Acoustic System",
      "360° immersive spatial audio with music and movie modes",
    ],
    warranty: "6 MONTHS WARRANTY!",
    image: "https://cdn.soundcore.com/image-url-placeholder.png", // Replace with actual image URL
  };

  return (
    <Container className="py-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              className="p-3"
            />
          </Card>
          <Row className="mt-3">
            {/* Add thumbnail images */}
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <Col xs={3} key={idx}>
                  <Card.Img
                    src={product.image}
                    className="img-thumbnail"
                    alt={`Thumbnail ${idx + 1}`}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={6}>
          <h3>{product.name}</h3>
          <p>
            <span style={{ textDecoration: "line-through", color: "red" }}>
              LKR {product.originalPrice}
            </span>{" "}
            <strong>LKR {product.price}</strong>
          </p>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h5 className="mt-3">{product.warranty}</h5>
          <div className="my-3">
            <Badge bg="success">In Stock</Badge>
          </div>
          <Row className="align-items-center">
            <Col xs={4} className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </Button>
              <Form.Control
                type="number"
                value={quantity}
                readOnly
                className="text-center mx-2"
                style={{ width: "60px" }}
              />
              <Button
                variant="outline-secondary"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </Button>
            </Col>
            <Col xs={8}>
              <Button variant="dark" className="w-100">
                Add to Cart
              </Button>
              <Button variant="primary" className="w-100 mt-2" onClick={handleCheckout}>
                Buy Now
              </Button>
            </Col>
          </Row>
          <Button
            variant="success"
            className="w-100 mt-4"
            style={{ fontSize: "14px" }}
          >
            ENQUIRY VIA WHATSAPP
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
