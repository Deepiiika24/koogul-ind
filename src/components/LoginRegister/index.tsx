import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import login1 from "../../assets/images/login-banner.jpg";
import { postData } from '../../WebService/API'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { ToastContainer, toast } from "react-toastify";

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
        localStorage.setItem("userId", String(response.user.id));
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
      <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light login-banner">
        <Row className="w-100 shadow-lg rounded-4 overflow-hidden" style={{ maxWidth: "1000px" }}>
          {/* Left Side - Form */}
          <Col md={6} className="bg-white p-5 d-flex align-items-center">
            <div className="w-100">
              <h3 className="text-center fw-bold mb-3">{isLogin ? "Log In" : "Sign Up"}</h3>
              <p className="text-center text-muted">Welcome back! Please enter your details</p>

              <div className="d-flex justify-content-center mb-3">
                <Button
                  variant={isLogin ? "danger" : "light"}
                  className="me-2 w-50"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </Button>
                <Button
                  variant={!isLogin ? "danger" : "light"}
                  className="w-50"
                  onClick={() => setIsLogin(false)}
                >
                  Signup
                </Button>
              </div>

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
                <Button className="w-100 mt-3" variant="danger" type="submit">
                  {isLogin ? "Login" : "Signup"}
                </Button>
              </Form>

              <div className="text-center mt-3">
                {isLogin ? "Not a member? " : "Already have an account? "}
                <a
                  href="#"
                  className="text-danger text-decoration-none"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Signup now" : "Login now"}
                </a>
              </div>
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="p-0 d-none d-md-block">
            <img
              src={login1}
              alt="Login Illustration"
              className="img-fluid h-100 w-100"
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