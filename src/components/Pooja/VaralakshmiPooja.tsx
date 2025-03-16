import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rice1 from '../../assets/images/pooja/kit2.jpg';
import Header from '../Header';
import Footer from '../Footer';

const VaralakshmiPooja: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: rice1,
        title: 'Varalakshmi Pooja',
        description: 'Varalakshmi Vratam also called Varalakshmi Puja, is a Hindu observance to propitiate the goddess of wealth, Lakshmi.[1] Varalakshmi is the manifestation of Lakshmi who grants boons (varam). It is a puja primarily performed by married Hindu women in the states of South India. This occasion is observed on the Friday before the day of the full moon - Purnima - in the Hindu month of Shravana, which corresponds to the Gregorian months of July-August. The Varalakshmi Vratam is primarily performed by married women (sumangali), for their own well-being, and in order to ask the goddess to bless their husbands with health and longevity.',
        details: [
            { name: '1.Pasupu', quantity: '12.Blouse Piece', subName: '' },
            { name: '2.Meenakshi Kumkum', quantity: '13.Thread Reel', subName: '' },
            { name: '3.Sandal Powder', quantity: '14.Cotton Wicks', subName: '' },
            { name: '4.Pasupu Kommulu', quantity: '15.Kankanam', subName: '' },
            { name: '5.Betel Nuts', quantity: '16.Pooja Asanam', subName: '' },
            { name: '6.Agarbathi', quantity: '', subName: '' },
            { name: '7.Camphor', quantity: '', subName: '' },
            { name: '8.Pancha Deepam oil', quantity: '', subName: '' },
            { name: '9.Akshathan', quantity: '', subName: '' },
            { name: '10.Dry coconut Piece', quantity: '', subName: '' },
            { name: '11.Dry Karjuram', quantity: '', subName: '' },
            
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
                        <h4 className="fw-bold mb-3">POOJA KIT</h4>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Pooja Samagri</th>
                                    <th>Vasthram</th>
                                 
                                </tr>
                            </thead>
                            <tbody>
                                {product.details.map((detail, index) => (
                                    <tr key={index}>
                                        <td>{detail.name}</td>
                                        <td>{detail.quantity || '-'}</td>
                                       
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

export default VaralakshmiPooja;
