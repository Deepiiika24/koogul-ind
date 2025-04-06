import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import { Container, Row, Col, Card, Form, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import login1 from '../../assets/images/login-banner.jpg'
import { postData } from '../../WebService/API'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const LoginRegister: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    debugger;
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const payload = {
      username,
      email,
      password,
    };

    try {
      if (isLogin) {
        const response = await postData<{ token: string; message: string; user: { id: number; username: string; email: string } }>("auth/login", payload);
        setSuccess("Login successful!");
        toast.success("Login Successful");
        // Optional: Store token and redirect
        console.log("Response:", response);
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.user.username);
        navigate("/");
      } else {
        const response = await postData<{ message: string }>("auth/signup", {
          username,
          email,
          password,
          confirmPassword,
        });
        console.log("Response:", response)
        setSuccess("Signup successful! Please log in.");
        toast.success("Signup successful! Please log in.Signup successful! Please log in.");
        setIsLogin(true);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred.");
      toast.error(err.message);
    }
  };

  return (
    <>
      <Header />
      <Container fluid className="d-flex justify-content-center align-items-center vh-100 login-banner">
        <Row className="rounded-3 overflow-hidden">
          {/* Left Side - Form */}
          <Col xs={12} md={6} id="p-5" className="p-5 bg-white d-flex flex-column justify-content-center">
            <Card className="border-0" id="cardResponsive">
              <h3 className="text-center fw-bold mb-3">{isLogin ? "Log In" : "Sign Up"}</h3>
              <p className="text-center text-muted">Welcome back! Please enter your details</p>

              <ToggleButtonGroup
                type="radio"
                name="authToggle"
                value={isLogin ? "login" : "signup"}
                onChange={() => setIsLogin(!isLogin)}
                className="w-100 mb-3"
              >
                <ToggleButton id="login-btn" value="login" variant={isLogin ? "primary" : "light"}>
                  Login
                </ToggleButton>
                <ToggleButton id="signup-btn" value="signup" variant={!isLogin ? "primary" : "light"}>
                  Signup
                </ToggleButton>
              </ToggleButtonGroup>


              <Form onSubmit={handleSubmit}>
                {error && <p className="text-danger text-center">{error}</p>}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
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
                    <a className="text-decoration-none text-muted loginFont" >
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
                <a className="text-primary text-decoration-none loginFont" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Signup now" : "Login now"}
                </a>
              </div>
            </Card>
          </Col>

          {/* Right Side - Image */}
          <Col xs={12} md={6} className="p-0 d-none d-md-block hide-below-425">
            <img
              src={login1}
              alt="Login Illustration"
              className="img-fluid w-100"
              style={{ objectFit: "cover", height:"-webkit-fill-available" }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default LoginRegister;
