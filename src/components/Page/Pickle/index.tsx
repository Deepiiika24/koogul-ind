import type React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { Container } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import pickle1 from '../../../assets/images/Pickles/Garlic-Pickle.jpg'
import pickle2 from '../../../assets/images/Pickles/GreenChilli-Pickle.jpg'
import pickle3 from '../../../assets/images/Pickles/Tomato-Pickle.jpg'
import pickle4 from '../../../assets/images/Pickles/Mango-Pickle.jpg'
import pickle5 from '../../../assets/images/Pickles/Brinjal-Pickle.jpg'
import pickle6 from '../../../assets/images/Pickles/Curry-Pickle.jpg'
import pickle7 from '../../../assets/images/Pickles/Coriander-Pickle.jpg'
import pickle8 from '../../../assets/images/Pickles/Ginger-Pickle.jpg'
import pickle9 from '../../../assets/images/Pickles/Mahani-Pickle.jpg'
import pickle10 from '../../../assets/images/Pickles/Vadu-Maangai-Pickle.jpg'
import pickle11 from '../../../assets/images/Pickles/Amla-Pickle.jpg'
import pickle12 from '../../../assets/images/Pickles/Lime-Pickle.jpg'
import { Link } from 'react-router-dom';

interface PickleItem {
    id: number;
    name: string;
    image: string;
    path: string;
}

const pickleData: PickleItem[] = [
    { id: 1, name: "Garlic Pickle", image: pickle1, path: "/pickle/garlic-pickle" },
    { id: 2, name: "Green Chilli Pickle", image: pickle2, path: "/pickle/green-chilli-pickle" },
    { id: 3, name: "Tomato Pickle", image: pickle3, path: "/pickle/tomato-pickle" },
    { id: 4, name: "Mango Pickle", image: pickle4, path: "/pickle/mango-pickle" },
    { id: 5, name: "Brinjal Pickle", image: pickle5, path: "/pickle/brinjal-pickle" },
    { id: 6, name: "Curry Pickle", image: pickle6, path: "/pickle/curry-pickle" },
    { id: 7, name: "Coriander Pickle", image: pickle7, path: "/pickle/coriander-pickle" },
    { id: 8, name: "Ginger Pickle", image: pickle8, path: "/pickle/ginger-pickle" },
    { id: 9, name: "Mahani Pickle", image: pickle9, path: "/pickle/mahani-pickle" },
    { id: 10, name: "Vadu Maangai", image: pickle10, path: "/pickle/vadu-maangai" },
    { id: 11, name: "Amla Pickle", image: pickle11, path: "/pickle/amla-pickle" },
    { id: 12, name: "Lime Pickle", image: pickle12, path: "/pickle/lime-pickle" },
];

const Pickle: React.FC = () => {

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
                        backgroundImage: `url(https://img.freepik.com/premium-photo/homemade-mango-pickle-aam-ka-achar-kairi-loncha-bowl-selective-focus_466689-61140.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        height: "auto"
                    }}
                >
                    <h1 data-aos="fade-up" className="text-center text-white display-6">Pickles</h1>
                    <ol data-aos="fade-up" className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                            <a href="/index.html#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-white">Pickles</li>
                    </ol>
                </div>
                {/* Single Page Header End */}
            </>
            <Container>
                <div data-aos="fade-up">
                    <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
                        <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
                            WE EXPORT FINEST PICKLES, DELIVERING FLAVOR IN EVERY JAR
                        </h1>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="container-fluid">
                        <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
                            At Koogul Industries, we take pride in exporting only the finest pickles to satisfy the varied tastes of our global customers. Our commitment to excellence starts with selecting the freshest ingredients from trusted sources. Each jar of pickle undergoes strict quality checks to ensure it meets our high standards.</p>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="bg-light p-5 rounded">
                        <div className="row g-4 justify-content-center">
                            {pickleData.map((data) => (
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
                                            Pickle
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h5 className="mt-3 text-center">
                                                <a className="text-decoration-none text-dark">
                                                    <Link to={data.path}>
                                                        {data.name}
                                                    </Link>
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


export default Pickle
