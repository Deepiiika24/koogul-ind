import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import rice1 from '../../assets/images/spices/star.jpg'
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StarAnise: React.FC = () => {
    const navigate = useNavigate();
    const product = {
        image: rice1,
        title: 'Star-anise Exporters',
        description: 'Illicium verum (star anise or badian, Chinese star anise, star anise seed, star aniseed and star of anise) is a medium-sized evergreen tree native to northeast Vietnam and South China. It is a spice that closely resembles anise in flavor and is obtained from the star-shaped pericarps of the fruit of I. verum which are harvested just before ripening. Star anise oil is a highly fragrant oil used in cooking, perfumery, soaps, toothpastes, mouthwashes, and skin creams.',
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

export default StarAnise;