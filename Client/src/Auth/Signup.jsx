import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import 'bootstrap/dist/css/bootstrap.min.css';


const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit =  () => {

     const data ={
      name,
      email,
      password,
      confirmPassword
     }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setLoading(true);

    axios
    .post("http://localhost:1332/signup",data)
    .then(()=>{

      enqueueSnackbar('signup  successfully', { variant: 'success' });
      alert('User registered successfully');
      navigate("/login")

    })
    .catch((error) => {
      setLoading(false);
      // alert('An error happened. Please Chack console');
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
      alert('Error registering user');
    });
  };
    

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}> 
          <Card className="p-4 mt-5">
            <Card.Body>
              <h2 className="mb-4 text-center">Sign Up</h2>
              <Form onSubmit={handleSubmit}>

              <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="Name" 
                    placeholder="Enter name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="mt-4"  >
                  Sign Up
                </Button>
                </div>
              </Form>
              <div className="mt-3 text-center">
                <Link to="/login">Already have an account? Login</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
