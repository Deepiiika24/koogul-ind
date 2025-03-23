import type React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { Container } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Masala1 from '../../../assets/images/Masala/Garam_Masala.png'
import Masala2 from '../../../assets/images/Masala/Curry_Masala.png'
import Masala3 from '../../../assets/images/Masala/Sambar_Masala.png'
import Masala4 from '../../../assets/images/Masala/Rasam_Masala.png'
import Masala5 from '../../../assets/images/Masala/Pulikulambu_Masala.png'
import Masala6 from '../../../assets/images/Masala/Meat_Curry_Masala.png'
import { Link } from 'react-router-dom';

interface MasalaItem {
    id: number;
    name: string;
    image: string;
    path: string;
}

const masalaData: MasalaItem[] = [
    { id: 1, name: "Garam Masala", image: Masala1, path: "/masala/garam-masala" },
    { id: 2, name: "Curry Masala", image: Masala2, path: "/masala/curry-masala" },
    { id: 3, name: "Sambar Masala", image: Masala3, path: "/masala/sambar-masala" },
    { id: 4, name: "Rasam Masala", image: Masala4, path: "/masala/rasam-masala" },
    { id: 5, name: "PuliKulambu Masala", image: Masala5, path: "/masala/pulikulambu-masala" },
    { id: 6, name: "Meat Curry Masala", image: Masala6, path: "/masala/meat-curry-masala" }
];

const Masala: React.FC = () => {

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
                        backgroundImage: `url(https://img.freepik.com/premium-photo/indian-spices_849688-7379.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        height: "auto"
                    }}
                >
                    <h1 data-aos="fade-up" className="text-center text-white display-6">Masalas</h1>
                    <ol data-aos="fade-up" className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                            <a href="/" className='text-primary'>Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/" className='text-primary'>Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-white">Masalas</li>
                    </ol>
                </div>
                {/* Single Page Header End */}
            </>
            <Container>
                <div data-aos="fade-up">
                    <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
                        <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
                            Premium Masala Products Exporter – Excellence in every Spice
                        </h1>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="container-fluid">
                        <p className="text-justify p-3 mx-auto" id='p-3' style={{ width: "100%", textAlign: "justify" }}>
                            Koogul Industries is dedicated to exporting the finest masala products, bringing authentic flavor and quality to kitchens worldwide. We source only the best spices from trusted suppliers, ensuring that each product delivers unmatched freshness, rich aroma, and superior taste. Every batch is meticulously tested for quality and consistency, guaranteeing that our masala products meet the highest international standards. Experience the true essence of spices with Koogul Industries' premium masalas, crafted to elevate every dish.</p>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="bg-light p-5 rounded">
                        <div className="row g-4 justify-content-center">
                            {masalaData.map((data) => (
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
                                            Masala
                                        </div>
                                        <div className="pt-4 pb-4 border border-primary border-top-0 rounded-bottom text-center">
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


export default Masala
