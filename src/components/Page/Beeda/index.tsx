import type React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { Container } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Beeda1 from '../../../assets/images/Beeda/cocount.jpg'
import Beeda2 from '../../../assets/images/Beeda/jeera.jpg'
import Beeda3 from '../../../assets/images/Beeda/rore-beeda.jpg'
import Beeda4 from '../../../assets/images/Beeda/tuttifrutti.jpg'
import Beeda5 from '../../../assets/images/Beeda/dry-clove.jpg'
import Beeda6 from '../../../assets/images/Beeda/chutni.jpg'
import Beeda7 from '../../../assets/images/Beeda/cardamom.jpg'
import Beeda8 from '../../../assets/images/Beeda/battikatha.jpg'

interface BeedaItem {
    id: number;
    name: string;
    image: string;
}

const beedaItem: BeedaItem[] = [
    { id: 1, name: "Shredded Coconut", image: Beeda1 },
    { id: 2, name: "Sweet Jeera Mittai", image: Beeda2 },
    { id: 3, name: "Rose Gulkand", image: Beeda3 },
    { id: 4, name: "Dry Tutti Frutti", image: Beeda4 },
    { id: 5, name: "Dry Clove", image: Beeda5 },
    { id: 6, name: "Sweet Pan Chutni", image: Beeda6 },
    { id: 6, name: "Cardamom Seeds", image: Beeda7 },
    { id: 6, name: "Kanpuri Biscuit", image: Beeda8 }
];

const Beeda: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
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
                        backgroundImage: `url(https://img.freepik.com/premium-photo/happy-dussehra-yellow-flowers-green-leaf-rice-red-background_53476-6139.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        height: "auto"
                    }}
                >
                    <h1 data-aos="fade-up" className="text-center text-white display-6">Paan Beeda</h1>
                    <ol data-aos="fade-up" className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                            <a href="/index.html#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-white">Paan Beeda</li>
                    </ol>
                </div>
                {/* Single Page Header End */}
            </>
            <Container>
                <div data-aos="fade-up">
                    <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
                        <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
                            PAAN BEEDA EXPORT FROM INDIA
                        </h1>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="container-fluid">
                        <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
                            India is renowned for its rich tradition of Paan Beeda, a flavorful combination of betel leaves, areca nut, and aromatic spices. As a leading exporter, we ensure premium-quality Paan Beeda is sourced from the finest ingredients and prepared with authentic techniques. Our exports maintain freshness, taste, and hygiene, making them a preferred choice in international markets. Whether for cultural traditions or as a mouth freshener, our Paan Beeda delivers an authentic Indian experience worldwide.</p>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="bg-light p-5 rounded">
                        <div className="row g-4 justify-content-center">
                            {beedaItem.map((data) => (
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
                                                    height: "225px",
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
                                            Beeda
                                        </div>
                                        <div className="pt-4 pb-4 border border-primary border-top-0 rounded-bottom text-center">
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


export default Beeda
