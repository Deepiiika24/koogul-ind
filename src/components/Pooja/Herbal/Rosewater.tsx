import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rice1 from '../../../assets/images/pooja/rosewater.jpg';
import Header from '../../Header';
import Footer from '../../Footer';

const Rosewater: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: rice1,
        title: 'Rose Water',
        description: 'Refreshing Facial Toner: Vitro Rose Water Spray is a hydrating and refreshing facial toner that helps revitalize and rejuvenate your skin. Nourishes and Hydrates: This rose water toner is hydro-distilled to retain the natural goodness of roses, providing nourishment and hydration to your skin. Suitable for Normal to Oily Skin: As it containains 100% natural rose water, this rose water spray is suitable for all skin types, particularly beneficial for normal to oily skin.',
        productDetails: [
            { label: 'Color', value: 'pink' },
            { label: 'Item Shape', value: 'Bottle' },
            { label: 'Capacity', value: '100gm' },
            { label: 'Primary Material', value: 'Liquid' }
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
                        <h4 className="fw-bold mb-3">SPECIFICATIONS</h4>
                        <Table striped bordered hover responsive>
                            <tbody>
                                {product.productDetails.map((detail, index) => (
                                    <tr key={index}>
                                        <td className="fw-bold" style={{ width: '30%' }}>{detail.label}</td>
                                        <td>{detail.value}</td>
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

export default Rosewater;
