import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import leaf1 from '../../assets/images/Leaf/Marigold-toran.jpg'
import Header from '../Header';
import Footer from '../Footer';

const Toran: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: leaf1,
        title: 'Marigold Toran',
        description: "Marigold torans are traditional floral hangings used for festive and religious decorations. Their bright yellow and orange colors symbolize positivity, prosperity, and devotion. Perfect for adorning entrances, pooja rooms, weddings, and festival celebrations. Crafted from fresh or artificial marigold flowers, they add charm and elegance. Eco-friendly and biodegradable, they enhance décor while being sustainable. Order marigold torans today to bring beauty and tradition to your space.",
        details: [
            { name: 'Leaf Name', quantity: '', subName: '' },
            { name: 'Botanical Name', quantity: '', subName: '' },
            { name: 'Origin', quantity: '', subName: '' },
            { name: 'Common Uses', quantity: '', subName: '' },
            { name: 'Benefits', quantity: '', subName: '' }
        ]
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
        });
    }, []);

    const handleBuyNow = () => {
        navigate('/Contact');
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

export default Toran;
