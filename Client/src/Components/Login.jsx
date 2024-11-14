import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link ,useNavigate } from 'react-router-dom';



const Login= () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Define sendRequest function here
  const sendRequest = async () => {
    try {
      const res = await axios.post('http://localhost:1332/login', {
        email: user.email,
        password: user.password,
      });
      return res.data;
    } catch (error) {
      throw new Error("Error connecting to the server");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("Login success");
        navigate("/");
      } else {
        alert("Login error");
      }
    } catch (err) {
      alert("Error during login: " + err.message);
    }
  };


  return (  
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-4 mt-5">
            <Card.Body>
              <h2 className="mb-4 text-center">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email"
                    name="email"
                    placeholder="Enter email" 
                    value={user.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 

                    type="password" 
                    name='password'
                    placeholder="Password" 
                    value={user.password}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="mt-4" >
                  Login
                </Button>
                </div>
              </Form>
              <div className="mt-3 text-center">
                <Link to="/signup">Don't have an account? Sign up</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
