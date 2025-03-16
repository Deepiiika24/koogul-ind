import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rice1 from '../../../assets/images/pooja/sandhanam-panner.jpg';
import Header from '../../Header';
import Footer from '../../Footer';

const Sandhanampowder: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: rice1,
        title: 'Sandhanam Powder',
        description: 'It is comprised of eight unique unadulterated and sacrosanct materials.This is the aroma one experiences on a visit to the sanctuary, a scent one partners with heavenliness, immaculateness and inspiration. Tilak cover the spot between the eyebrows, which is the seat of memory and thinking. Tilak is applied with the petition - "May I recollect the Lord. Sandalwood powder can make your skin sparkle strikingly, and it doesnot create any facial episodes. It is an imperiled species since wrongfully collected for scent items.',
        productDetails: [
            { label: 'Color', value: 'Gold' },
            { label: 'Item Shape', value: 'Packet' },
            { label: 'Capacity', value: '100gm' },
            { label: 'Primary Material', value: 'Powder' }
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

export default Sandhanampowder;
