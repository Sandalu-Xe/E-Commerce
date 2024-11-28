import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../Css/SpecialOffers.css'; // You'll need to create this CSS file

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      model: "iPhone 14 Pro",
      price: "$999",
      image: "iphone14-pro.jpg",
      description: "Experience the dynamic island and amazing camera system.",
      discount: "15% OFF"
    },
    {
      id: 2,
      model: "Samsung S23 Ultra",
      price: "$1199",
      image: "s23-ultra.jpg",
      description: "Ultimate performance with S Pen and 200MP camera.",
      discount: "10% OFF"
    },
    {
      id: 3,
      model: "Google Pixel 7 Pro",
      price: "$899",
      image: "pixel7-pro.jpg",
      description: "The most advanced Pixel camera and Google AI.",
      discount: "20% OFF"
    }
  ];

  return (
    <div className="special-offers-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Special Offers</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Exclusive deals on premium smartphones</p>
          </Col>
        </Row>
        
        <Row>
          {offers.map((offer) => (
            <Col key={offer.id} lg={4} md={6} className="mb-4">
              <Card className="offer-card">
                <div className="discount-badge">{offer.discount}</div>
                <Card.Img 
                  variant="top" 
                  src={offer.image} 
                  alt={offer.model}
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title className="phone-model">{offer.model}</Card.Title>
                  <Card.Text className="phone-description">
                    {offer.description}
                  </Card.Text>
                  <div className="card-footer">
                    <span className="price">{offer.price}</span>
                    <Button variant="outline-primary" className="view-btn">
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SpecialOffers;