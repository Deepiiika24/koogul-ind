import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import rice1 from '../../assets/images/pooja/kit7.jpg';
import Header from '../Header';
import Footer from '../Footer';

const GanapathiPooja: React.FC = () => {
    const navigate = useNavigate();

    const product = {
        image: rice1,
        title: 'Ganapathi Pooja',
        description: 'Ganesh Chaturthi is also called Vinayaka Chaturthi, it is a pure Hindu festival, during this festival people pray Lord Ganesha with great devotion. In this occasion people keep their clay idols privately in their homes, or publicly on big pandals (or temporary stages or altars). It starts with Vedic hymns, prayers, vrata and hindu texts such as Ganesha Upanishad. Offerings of prasada after the prayer and distributing amongst the community people, prasad include sweets, modaka (it is believed to be the favourite sweet of ganesha). This festival starts on the fourth day of Hindu luni-solar calendar month Bhadrapada, which normally falls in the month of August or September.',
        details: [
            { name: '1.Haldi Powder', quantity: '15.Elachi', subName: '25.Navarathanam',subNameone:'35.Cashew Nuts Kaju',subNametwo:'38.Pattu Vasthram',subNamethree:'43.Ganga Jalam' },
            { name: '2.Meenakshi Kumkum', quantity: '16.Jajikaya', subName: '26.Pancha loham' ,subNameone:'36.Dry Grapes(Kismiss)',subNametwo:'39.Thread Reel'},
            { name: '3.Sandal Powder', quantity: '17.Japathri', subName: '27.Dry Coconut',subNameone:'37.Dry Karjuram',subNametwo:'40.Cotton Wicks' },
            { name: '4.Betel Nuts', quantity: '18.Pacha Karpooram', subName: '28.Vattiveru' ,subNameone:'',subNametwo:'41.Kankanam'},
            { name: '5.Agarbathi', quantity: '19.Lavangam', subName: '29.Navadhanyam' ,subNameone:'',subNametwo:'42.Pooja Asanam'},
            { name: '6.Match Box', quantity: '20.Dalchina Chekka', subName: '30.HomaDhravyam',subNameone:'',subNametwo:'' },
            { name: '7.Camphor', quantity: '21.Kasturi', subName: '31.Lotus Seeds',subNameone:'',subNametwo:'' },
            { name: '8.Cow Ghee', quantity: '22.Gorojanam', subName: '32.Dharba' ,subNameone:'',subNametwo:''},
            { name: '9.Pancha Deepam oil', quantity: '23.Anasa Poovu', subName: '33.Pavitram',subNameone:'',subNametwo:'' },
            { name: '10.Akshathan', quantity: '24.Saffron (kunkuma povvu)', subName: '34.Kurcham' },
            { name: '11.Rangoli powder', quantity: '', subName: '' },
            { name: '12.Honey', quantity: '', subName: '' },
            { name: '13.Jaggery', quantity: '', subName: '' },
            { name: '14.Sugar Nuts', quantity: '', subName: '' }
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

export default GanapathiPooja;
