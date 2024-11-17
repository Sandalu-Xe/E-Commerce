
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_12213', 
        'template_zgdddkb', 
        form.current, {
        publicKey: 'uxdriekI7IRCw5LYM',
      })
      .then(
        (result) => {
          console.log('SUCCESS!',result.text);
          alert("sent sucessfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("sending failed")
        },
      );
  };

  return (<>
   <Container className="mt-4">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form ref={form} onSubmit={sendEmail} className="p-4 border rounded shadow">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={4} placeholder="Write your message here" required />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  </>

  );
};

export default ContactUs;
