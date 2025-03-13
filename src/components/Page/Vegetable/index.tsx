import type React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { Container } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import vegetable1 from '../../../assets/images/Vegetable/BOTTEL.jpg'
import vegetable2 from '../../../assets/images/Vegetable/Brinjal.jpg'
import vegetable3 from '../../../assets/images/Vegetable/Broccolie.jpg'
import vegetable4 from '../../../assets/images/Vegetable/cabbage.jpg'
import vegetable5 from '../../../assets/images/Vegetable/cauliflower.jpg'
import vegetable6 from '../../../assets/images/Vegetable/Drumstick.avif'
import vegetable7 from '../../../assets/images/Vegetable/Green-chilli.jpg'
import vegetable8 from '../../../assets/images/Vegetable/Ladys-finger.jpg'
import vegetable9 from '../../../assets/images/Vegetable/Mushroom.jpg'
import vegetable10 from '../../../assets/images/Vegetable/Onion.jpg'
import vegetable11 from '../../../assets/images/Vegetable/Potato.jpg'
import vegetable12 from '../../../assets/images/Vegetable/Spinach.jpg'

interface VegetableItem {
    id: number;
    name: string;
    image: string;
}

const vegetableData: VegetableItem[] = [
    { id: 1, name: "Bottle Gourd", image: vegetable1 },
    { id: 2, name: "Brinjal", image: vegetable2 },
    { id: 3, name: "Broccolie", image: vegetable3 },
    { id: 4, name: "Cabbage", image: vegetable4 },
    { id: 5, name: "Cauliflower", image: vegetable5 },
    { id: 6, name: "Drum stick", image: vegetable6 },
    { id: 7, name: "Green chilli", image: vegetable7 },
    { id: 8, name: "Lady finger", image: vegetable8 },
    { id: 9, name: "Mushroom", image: vegetable9 },
    { id: 10, name: "Onion", image: vegetable10 },
    { id: 11, name: "Potato", image: vegetable11 },
    { id: 12, name: "Spinach", image: vegetable12 },
];

const Vegetable: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: "ease-in-out", // Animation easing
        });
    }, []);

    return (
        <>
            <Header />
            <>
                {/* Single Page Header start */}
                <div className="container-fluid py-5"
                    style={{
                        marginTop: "152px",
                        position: "relative",
                        backgroundImage: `url(https://img.freepik.com/premium-photo/composition-with-assorted-raw-organic-vegetables_135427-4300.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        height: "auto"
                    }}
                >
                    <h1 data-aos="fade-up" className="text-center text-white display-6">Vegetables</h1>
                    <ol data-aos="fade-up" className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                            <a href="/index.html#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-white">Vegetables</li>
                    </ol>
                </div>
                {/* Single Page Header End */}
            </>
            <Container>
                <div data-aos="fade-up">
                    <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
                        <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
                            VEGETABLE EXPORTER FROM INDIA
                        </h1>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="container-fluid">
                        <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
                            India has a rich and diverse climate. This diversity provides lots of varieties of vegetables. Vegetables are one of the most rapid growing sub-sectors of food processing sector. India currently stands at 2nd position in the world for its production of vegetables. It also holds 3rd position as the net-exporter of vegetables. According to the export value; onion occupies the first position. In the recent years, potatoes and some green vegetables like bitter gourd, okra and green chillies have also shown an increase in their exports.</p>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="bg-light p-5 rounded">
                        <div className="row g-4 justify-content-center">
                            {vegetableData.map((data) => (
                                <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div
                                        className="rounded position-relative fruite-item"
                                        style={{
                                            overflow: "hidden",
                                            transition: "box-shadow 0.3s ease",
                                            cursor: "pointer"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = "0 8px 26px rgba(0, 0, 0, 0.4)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
                                        }}
                                    >
                                        <div className="fruite-img overflow-hidden">
                                            <img
                                                src={data.image}
                                                className="img-fluid w-100 rounded-top"
                                                alt={data.name}
                                                style={{
                                                    transition: "transform 0.4s ease",
                                                    height: "180px",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = "scale(1.1)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "scale(1)";
                                                }}
                                            />
                                        </div>
                                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
                                            Vegetable
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h5 className="mt-3 text-center">
                                                <a href="/" className="text-decoration-none text-dark">
                                                    {data.name}
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}


export default Vegetable
