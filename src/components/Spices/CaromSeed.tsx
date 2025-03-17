import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import rice1 from '../../assets/images/spices/Caromseed-banner.jpg'
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CaromSeed: React.FC = () => {
    const navigate = useNavigate();
    const product = {
        image: rice1,
        title: 'Carom-seed Exporters',
        description: 'Ajwain or ajowan (Trachyspermum ammi) also known as ajowan caraway, omam (in Tamil), thymol seeds, bishops weed, or carom—is an annual herb in the family Apiaceae.[4] Both the leaves and the seed like fruit (often mistakenly called seeds) of the plant are consumed by humans. The name "bishops weed" also is a common name for other plants. The "seed" (i.e., the fruit) is often confused with lovage seed.',
        details: [
            { name: 'Energy', quantity: '', subName: '' },
            { name: 'Protein', quantity: '', subName: '' },
            { name: 'Fat', quantity: '', subName: '' },
            { name: 'Carbohydrate', quantity: '', subName: '' },
            { name: 'Sodium', quantity: '', subName: '' }
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

export default CaromSeed;