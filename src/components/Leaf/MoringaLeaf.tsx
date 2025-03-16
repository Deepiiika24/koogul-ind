import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import leaf1 from '../../assets/images/Leaf/Moringa-banner.png'
import Header from '../Header';
import Footer from '../Footer';

const MoringaLeaf: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: leaf1,
        title: 'Moringa Leaf',
        description: "Moringa leaves, derived from the Moringa oleifera tree, are revered for their exceptional nutritional profile and medicinal properties. These vibrant green leaves have been a staple in traditional medicine and culinary practices across various cultures for centuries. Beyond their culinary uses, moringa leaves are prized for their extensive health benefits, ranging from boosting immunity to promoting overall well-being.",
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

export default MoringaLeaf;
