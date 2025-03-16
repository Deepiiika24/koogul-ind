import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rice1 from '../../assets/images/Vegetable/cauliflower-banner.jpg';
import Header from '../Header';
import Footer from '../Footer';

const Cauliflower: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: rice1,
        title: 'Cauliflower',
        description: 'Cauliflower is one of several vegetables cultivated from the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae (or mustard) family. An annual plant that reproduces by seed, the cauliflower head is composed of a (generally) white inflorescence meristem. Cauliflower heads resemble those in broccoli, which differs in having flower buds as the edible portion.',
        details: [
            { name: 'Protein', quantity: '', subName: '' },
            { name: 'Fat', quantity: '', subName: '' },
            { name: 'Carbohydrates', quantity: '', subName: '' },
            { name: 'Calorific Value', quantity: '', subName: '' },
            { name: 'Vitamin B1 mg', quantity: '', subName: '' },
            { name: 'Vitamin B2 mg', quantity: '', subName: '' }
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

export default Cauliflower;
