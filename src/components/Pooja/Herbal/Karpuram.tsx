import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rice1 from '../../../assets/images/pooja/karpuram-banner.jpg';
import Header from '../../Header';
import Footer from '../../Footer';

const Karpuram: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: rice1,
        title: 'Karpuram',
        description: 'As per our holy scriptures, pure camphor symbolises union with god as it burns completely, leaving behind no trace. Pure Camphor aarti dispels negativity, keeps one healthy and attracts prosperity Camphor is burnt to perform Aarti (circular movement or display of the lamp in reverence before the deity or the idol) before the deity. Use it with coconut oil/rose water for beauty, skin care, pain reliever, disinfectant balm. Making a green camphor powder paste with water and applying it works wonders for face / skin and hair.',
        productDetails: [
            { label: 'Color', value: 'White' },
            { label: 'Item Shape', value: 'Round' },
            { label: 'Capacity', value: '100gm' },
            { label: 'Primary Material', value: '	Camphor Tablet' }
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

export default Karpuram;
