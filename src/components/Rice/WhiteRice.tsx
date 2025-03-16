import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import rice1 from '../../assets/images/rice/White-raw-rice-banner.jpg'
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhiteRice: React.FC = () => {
    const navigate = useNavigate();
  const product = {
    image: rice1,
    title: 'White Raw Rice',
    description: 'White raw rice, a staple in many cuisines around the world, is prized for its mild flavor, versatility, and ability to complement a wide range of dishes. This rice variety is produced by removing the husk, bran, and germ layers from the rice grain, resulting in a polished, white appearance. While it has a lower nutritional content compared to whole grain varieties, white raw rice remains a popular choice due to its long shelf life, quick cooking time, and adaptable nature. It is widely used in everyday meals, including stir-fries, pilafs, sushi, and as a side dish to accompany various proteins and vegetables. Our exporting company is dedicated to providing high-quality white raw rice to international markets, ensuring that the rice s purity, texture, and flavor are preserved throughout the supply chain. ',
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

export default WhiteRice;