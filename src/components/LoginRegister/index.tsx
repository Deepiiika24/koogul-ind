import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container, Row, Col, Card, Form, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import login1 from '../../assets/images/login-banner.jpg'
const LoginRegister: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log(isLogin ? "Logging in..." : "Signing up...");
  };

  return (
    <>
      <Header />
      <Container fluid className="d-flex justify-content-center align-items-center vh-100 login-banner">
        <Row className="shadow-lg rounded-3 overflow-hidden w-75">
          {/* Left Side - Form */}
          <Col md={6} className="p-5 bg-white d-flex flex-column justify-content-center">
            <Card className="border-0">
              <h3 className="text-center fw-bold mb-3">{isLogin ? "Log In" : "Sign Up"}</h3>
              <p className="text-center text-muted">Welcome back! Please enter your details</p>

              <ToggleButtonGroup type="radio" name="authToggle" className="w-100 mb-3">
                <ToggleButton variant={isLogin ? "primary" : "light"} onClick={() => setIsLogin(true)}>
                  Login
                </ToggleButton>
                <ToggleButton variant={!isLogin ? "primary" : "light"} onClick={() => setIsLogin(false)}>
                  Signup
                </ToggleButton>
              </ToggleButtonGroup>

              <Form onSubmit={handleSubmit}>
                {error && <p className="text-danger text-center">{error}</p>}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                {!isLogin && (
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                )}
                {isLogin && (
                  <div className="text-end">
                    <a href="#" className="text-decoration-none text-muted">
                      Forgot password?
                    </a>
                  </div>
                )}
                <Button className="w-100 mt-3" variant="primary" type="submit">
                  {isLogin ? "Login" : "Signup"}
                </Button>
              </Form>

              <div className="text-center mt-3">
                {isLogin ? "Not a member? " : "Already have an account? "}
                <a href="#" className="text-primary text-decoration-none" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Signup now" : "Login now"}
                </a>
              </div>
            </Card>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="p-0 d-none d-md-block">
            <img
              src={login1}
              alt="Login Illustration"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default LoginRegister;