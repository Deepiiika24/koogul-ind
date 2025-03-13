// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type React from 'react'
import { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faUserShield, faBoxesPacking, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import iconlogo from '../../../assets/images/l.png'
import AOS from "aos";
import "aos/dist/aos.css";
const FeaturesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing

    });
  }, []);
  const features = [
    { icon: faUserShield, title: 'Quality', description: 'Fresh Groceries Delivered Straight to Your Doorstep!' },
    { icon: faHandshake, title: 'Customer Satisfiction', description: 'Trusted by Families, Loved for Our Service.' },
    { icon: faBoxesPacking, title: 'Proper Packaging', description: 'Carefully Packed to Keep Your Groceries Fresh & Safe.' },
    { icon: faPhoneAlt, title: '24/7 Support', description: 'Shop with Confidence – 24/7 Support Whenever You Need.' },
  ]
  return (
    <div className="container-fluid features py-5">

      <Container className="py-5">
      <div data-aos="fade-up">
        <nav className="navbar d-flex justify-content-center">
          <img
            src={iconlogo}
            className="img-fluid navbar-brand"
            style={{ maxWidth: '180px', height: 'auto' }}
            alt="icon Logo"
          />
        </nav>
        </div>
        <div data-aos="fade-up">
        <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
          <h1 className='display-6'>Koogul Industries - Global Food Importers & Exporters</h1>
        </div>
        </div>
        <div data-aos="fade-up">
        <div className="container-fluid">
          <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
            "As a leading exporter of premium quality food products, Koogul Industries is committed to bringing the rich and diverse flavors of India to the world. Our extensive range of food and spice exports is sourced directly from trusted farms and suppliers, ensuring freshness and authenticity in every shipment. With a strong focus on meeting international quality standards, we guarantee that our products reach global markets with the highest level of care and excellence. Koogul Industries is dedicated to supporting your business by delivering the finest Indian produce to every corner of the globe."

          </p>
        </div>
        </div>
        <div data-aos="fade-up">
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="features-item text-center rounded bg-light p-4">
                <div
                  className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto d-flex align-items-center justify-content-center"
                  style={{ width: '70px', height: '70px' }} // Adjust the size here
                >
                  <FontAwesomeIcon icon={feature.icon} className="text-white fa-3x" />
                </div>
                <div className="features-content text-center">
                  <h5>{feature.title}</h5>
                  <p className="mb-0">{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        </div>
      </Container>

    </div>
  )
}

export default FeaturesSection
