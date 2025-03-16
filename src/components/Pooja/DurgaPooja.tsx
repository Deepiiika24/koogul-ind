import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rice1 from '../../assets/images/pooja/kit9.jpg';
import Header from '../Header';
import Footer from '../Footer';

const DurgaPooja: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: rice1,
        title: 'Durga Pooja',
        description: 'Durga Puja , also known as Durgotsava or Sharodotsav, is an annual festival originating in the Indian subcontinent which reveres and pays homage to the Hindu goddess Durga, and is also celebrated because of Durgas victory over Mahishasura. It is particularly celebrated in the Eastern Indian states of West Bengal, Bihar, Jharkhand, eastern Uttar Pradesh, Assam, Odisha and by Hindus in Bangladesh.The festival is observed in the Indian calendar in the month of Ashvin, which corresponds to September–October in the Gregorian calendar.Durga Puja is a ten-day festival, of which the last five are of the most significance.',
        details: [
            { name: '1.Haldi Powder', quantity: '13.Elachi', subName: '23.Navarathanam',subNameone:'33.Cashew Nuts Kaju',subNametwo:'38.Pattu Vasthram',subNamethree:'43.Ganga Jalam' },
            { name: '2.Meenakshi Kumkum', quantity: '14.Jajikaya', subName: '24.Pancha loham',subNameone:'34.Dry Grapes(Kismiss)',subNametwo:'39.Thread Reel',subNamethree:'' },
            { name: '3.Sandal Powder', quantity: '15.Japathri', subName: '25.Dry Coconut' ,subNameone:'35.Dry Karjuram',subNametwo:'40.Cotton Wicks',subNamethree:''},
            { name: '4.Betel Nuts', quantity: '16.Pacha Karpooram', subName: '26.Vattiveru',subNameone:'',subNametwo:'41.Kankanam',subNamethree:'' },
            { name: '5.Agarbathi', quantity: '17.Lavangam', subName: '27.Navadhanyam',subNameone:'',subNametwo:'42.Pooja Asanam',subNamethree:'' },
            { name: '6.Match Box', quantity: '18.Dalchina Chekka', subName: '28.HomaDhravyam',subNameone:'',subNametwo:'',subNamethree:'' },
            { name: '7.Camphor', quantity: '19.Kasturi', subName: '29.Lotus Seeds',subNameone:'',subNametwo:'',subNamethree:'' },
            { name: '8.Cow Ghee', quantity: '20.Gorojanam', subName: '30.Dharba' },
            { name: '9.Pancha Deepam oil', quantity: '21.Anasa Poovu', subName: '31.Pavitram' },
            { name: '10.Akshathan', quantity: '22.Saffron (kunkuma povvu)', subName: '32.Kurcham' },
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
                                    <th>Pavitra Jalam</th>
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
                                    <td>{detail.subNamethree || '-'}</td>
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

export default DurgaPooja;
