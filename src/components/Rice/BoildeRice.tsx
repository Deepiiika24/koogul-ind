import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import rice1 from '../../assets/images/rice/Boiled-rice-banner.jpg'
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BoildeRice: React.FC = () => {
    const navigate = useNavigate();
  const product = {
    image: rice1,
    title: 'Boiled Rice',
    description: 'Boiled rice, also known as parboiled rice, is a type of rice that undergoes a unique processing method involving partial boiling in the husk. This process helps retain more nutrients compared to regular white rice, making it a healthier option for consumers. Boiled rice is characterized by its firm texture, non-sticky grains, and slightly nutty flavor, making it versatile for various culinary applications, including stir-fries, curries, and salads. Our exporting company specializes in providing high-quality boiled rice to international markets, ensuring that the nutritional benefits and superior taste of the rice are preserved throughout the supply chain. ',
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

export default BoildeRice;