import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rice1 from '../../assets/images/pooja/kit3.jpg';
import Header from '../Header';
import Footer from '../Footer';

const ShivaPooja: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: rice1,
        title: 'Shiva Pooja',
        description: 'Shiva Puja in Hinduism is the way by which one worships Shiva through traditional and ancient rites with the use of mantra, tantra, yantra, kriyas, mudras, and abhishekam.Shiva is known as The Destroyer within the Trimurti, the Hindu trinity which also includes Brahma and Vishnu. In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe. In the goddess-oriented Shakta tradition, the Supreme Goddess (Devi) is regarded as the energy and creative power (Shakti) and the equal complementary partner of Shiva. Shiva is one of the five equivalent deities in Panchayatana puja of the Smarta tradition of Hinduism.',
        details: [
            { name: '1.Haldi Powder', quantity: '13.Elachi', subName: '23.Navarathanam',subNameone:'32.Dry Karjuram',subNametwo:'33.Pattu Vasthram' },
            { name: '2.Meenakshi Kumkum', quantity: '14.Jajikaya', subName: '24.Pancha loham', subNameone:'',subNametwo:'34.Thread Reel'},
            { name: '3.Sandal Powder', quantity: '15.Japathri', subName: '25.Dry Coconut',subNameone:'',subNametwo:'35.Cotton Wicks' },
            { name: '4.Betel Nuts', quantity: '16.Pacha Karpooram', subName: '26.Vattiveru',subNametwo:'36.Kankanam' },
            { name: '5.Agarbathi', quantity: '17.Lavangam', subName: '27.Navadhanyam',subNametwo:'37.Pooja Asanam' },
            { name: '6.Match Box', quantity: '18.Dalchina Chekka', subName: '28.HomaDhravyam' },
            { name: '7.Camphor', quantity: '19.Kasturi', subName: '29.Black Tills' },
            { name: '8.Cow Ghee', quantity: '20.Gorojanam', subName: '30.Dharba Pavithram Kurcham' },
            { name: '9.Pancha Deepam oil', quantity: '21.Anasa Poovu', subName: '31.Hand Napkinse Tissue Pape' },
            { name: '10.Akshathan', quantity: '22.Saffron (kunkuma povvu)', subName: '' },
            { name: '11.Rangoli powder', quantity: '', subName: '' },
            { name: '12.Honey', quantity: '', subName: '' }
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
                                    <th>Suganda Dhravyam Powder</th>
                                    <th>Poornahuthi</th>
                                    <th>Dry Fruits</th>
                                    <th>Vasthram</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.details.map((detail, index) => (
                                    <tr key={index}>
                                        <td>{detail.name}</td>
                                        <td>{detail.quantity || '-'}</td>
                                        <td>{detail.subName || '-'}</td>
                                        <td>{detail.subNameone || '-'}</td>
                                        <td>{detail.subNametwo || '-'}</td>
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

export default ShivaPooja;
