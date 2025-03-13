import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselHero from "./CarouseHero";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      
    });
  }, []);

  return (
    <div className="container-fluid py-5 mb-5 hero-header">
        <div data-aos="fade-up">
        <Container className="py-5">
          <Row className="g-5 align-items-center">
            <Col md={12} lg={7}>
              <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
              <h1 className="mb-5 display-3 text-primary">
                Organic Veggies &amp; Fruits Foods
              </h1>
            </Col>
            <Col md={12} lg={5}>
              <CarouselHero />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;