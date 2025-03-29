// ... imports remain the same ...
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Accordion, Carousel } from 'react-bootstrap';

const cardData = [
  {
    id: 1,
    title: 'Latest Models',
    description: 'Discover cutting-edge smartphones with innovative features and premium design.',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop',
    url: '/latest-models',
    badge: 'New Arrivals'
  },
  {
    id: 2,
    title: 'Best Sellers',
    description: 'Explore our most popular phones loved by thousands of customers.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop',
    url: '/best-sellers',
    badge: 'Popular'
  },
  {
    id: 3,
    title: 'Special Offers',
    description: 'Exclusive deals and discounts on premium smartphones.',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1000&auto=format&fit=crop',
    url: '/special-offers',
    badge: 'Limited Time'
  },
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Amazing selection of phones and excellent service!',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Smith',
    comment: 'Best prices and quick delivery. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Mike Johnson',
    comment: 'Great customer support and genuine products.',
    rating: 4.5
  }
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="homepage">
      <div className="hero-section text-center py-5">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1 className="main-title display-4">Welcome to Sandalu's Store <span className="emoji">📱</span></h1>
              <p className="subtitle lead">Discover Your Perfect Smartphone Today</p>
              <Button variant="primary" size="lg" className="mt-3">Shop Now</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="main-content py-5">
        <Row className="featured-cards g-4">
          {cardData.map(({ id, title, description, image, url, badge }) => (
            <Col md={4} key={id}>
              <Card className="feature-card h-100 shadow-sm">
                <div className="position-relative">
                  <Card.Img variant="top" src={image} alt={title} className="card-img" />
                  <span className="position-absolute top-0 end-0 badge bg-primary m-2">
                    {badge}
                  </span>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="card-title h5">{title}</Card.Title>
                  <Card.Text className="card-description flex-grow-1">{description}</Card.Text>
                  <Button variant="outline-primary" className="w-100">
                    Explore Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="info-section my-5">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Premium Quality Products</Accordion.Header>
              <Accordion.Body>
                We partner directly with manufacturers to ensure you get authentic devices with full warranty coverage.
                Every phone undergoes rigorous quality checks before reaching you.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Customer Satisfaction Guarantee</Accordion.Header>
              <Accordion.Body>
                Enjoy peace of mind with our 30-day money-back guarantee, free shipping on all orders,
                and dedicated 24/7 customer support team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Exclusive Benefits</Accordion.Header>
              <Accordion.Body>
                Get access to member-only deals, early bird offers, and special discounts.
                Join our loyalty program for additional rewards on every purchase.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="testimonials-section my-5">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="text-center p-4">
                  <h5>{testimonial.name}</h5>
                  <p className="mb-0">{testimonial.comment}</p>
                  <div className="text-warning mt-2">
                    {'★'.repeat(Math.floor(testimonial.rating))}
                    {testimonial.rating % 1 === 0.5 ? '½' : ''}
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
