import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rice1 from '../../assets/images/Vegetable/drumstick-banner.jpg';
import Header from '../Header';
import Footer from '../Footer';

const Drumstick: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: rice1,
        title: 'Drumstick',
        description: 'The pods of the Drumstick or Moringa tree are generally long, smooth-skinned, dark green in color, and three-sided. Drumstick exporter in India export tonnes of Drumsticks every year to different countries in the world. Drumsticks can be used in many recipes and are known for their nutritional qualities. This may be one of the reasons why Drumstick export from India has increased. The Drumstick import from India is now a growing business opportunity.',
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

export default Drumstick;
