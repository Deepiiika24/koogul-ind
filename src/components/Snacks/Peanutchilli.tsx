import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import rice1 from '../../assets/images/snacks/Chilli-peanut-banner.jpg'
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Peanutpepper from './Peanutpepper';

const Peanutchilli: React.FC = () => {
    const navigate = useNavigate();
  const product = {
    image: rice1,
    title: 'Chilli peanuts',
    description: 'Chilli peanuts are a spicy, crunchy snack that blend roasted peanuts with a fiery chilli seasoning. This popular Indian snack is known for its perfect balance of heat and crunch, making it irresistible to snack enthusiasts. The peanuts are typically roasted to a golden brown, then coated with a blend of chilli powder, salt, and spices, creating a tantalizing flavor profile that is both spicy and savory. Ideal for snacking or as a spicy addition to dishes, chilli peanuts are a favorite at gatherings and parties. ',
    details: [
      { name: 'Protein', quantity: '', subName: '' },
      { name: 'Fat', quantity: '', subName: '' },
      { name: 'Carbohydrates', quantity: '', subName: '' },
      { name: 'Caloific Value', quantity: '', subName: '' },
      { name: 'Vitamin B1 mg', quantity: '', subName: '' },
      { name: 'Vitamin B2 mg', quantity: '', subName: '' }
    ]
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing

    });
  }, []);
  const handleBuyNow = () => {
    navigate('/Contact'); // Page route ah inga kudukkanum
  };
  return (
    <>
            <Header />
            <Container className="py-5">
                <Row className="align-items-center justify-content-center rice-header">
                    {/* Product Image */}
                    <Col xs={12} md={6} className="mb-4 mb-md-0" data-aos="zoom-out-up">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid rounded shadow"
                            style={{ objectFit: 'cover' }}
                        />
                    </Col>

                    {/* Product Info */}
                    <Col xs={12} md={6} data-aos="fade-up">
                        <h2 className="fw-bold mb-3">{product.title}</h2>
                        <p className="text-muted">{product.description}</p>
                        <Button 
                            variant="outline-success" 
                            size="lg" 
                            onClick={handleBuyNow}
                            className="mt-3"
                        >
                            Buy Now
                        </Button>
                    </Col>
                </Row>

                {/* Product Details Table */}
                <Row className="mt-5" data-aos="fade-up">
                    <Col>
                        <h4 className="fw-bold mb-3">Product Details</h4>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Quantity Per Serving</th>
                                    <th>Quantity Per 100g</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.details.map((detail, index) => (
                                    <tr key={index}>
                                        <td>{detail.name}</td>
                                        <td>{detail.quantity || '-'}</td>
                                        <td>{detail.subName || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
  );
};

export default Peanutchilli;