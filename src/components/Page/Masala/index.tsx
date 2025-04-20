import type React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { Container } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getData, postData } from '../../../WebService/API';
import { toast } from 'react-toastify';

const userId = Number(localStorage.getItem('userId') || 0);

interface MasalaItem {
    id: number;
    name: string;
    price: number;
    full_image_url: string;
    quantity?: number;
}

const Masala: React.FC = () => {

    const [masalaData, setMasalaData] = useState<MasalaItem[]>([]);

    const navigate = useNavigate();

    const fetchMasala = async () => {
        try {
            const response = await getData("masala?page=1&limit=1000",);
            console.log("Response:", response);
            setMasalaData(response.data.map((item: any) => ({
                ...item,
                quantity: 1 // Add default quantity
            })));
        } catch (error) {
            console.error("Error fetching Masala:", error);
            toast.error("Failed to load Masala");
        }
    }

    const handleAddToCart = async (data: MasalaItem) => {
        debugger
        try {

            if (!userId || userId === 0) {
                toast.error("Please login to add items to cart");
                navigate('/LoginRegister');
                return;
            }

            const itemToSend = {
                userId,
                productId: data.id,
                name: data.name,
                price: data.price,
                quantity: data.quantity,
                imageUrl: data.full_image_url
            };

            const response = await postData("cart/add-to-cart", itemToSend);
            console.log("Response:", response)
            toast.success("Product Added to Cart");
        } catch (error) {
            console.error("Add to Cart failed:", error);
            toast.error("Something went wrong");
        }
    };


    useEffect(() => {
        fetchMasala();
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
                    marginTop: "102px",
                    position: "relative",
                    backgroundImage: `url(https://img.freepik.com/premium-photo/indian-spices_849688-7379.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    height: "auto"
                }}
                >
                    <h1 data-aos="fade-up" className="text-center text-white display-6">Masala</h1>
                    <ol data-aos="fade-up" className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                            <a href="/" className='text-primary'>Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/" className='text-primary'>Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-white">Masala</li>
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
                                                src={data.full_image_url}
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
                                        Masala
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h5 className="mt-3 text-center">
                                                <a className="text-decoration-none text-dark">
                                                    <Link to={data.name}>
                                                        {data.name}
                                                    </Link>
                                                </a>
                                            </h5>
                                            <div className="justify-content-center">
                                                <p className="text-dark p-2 fs-5 fw-bold mb-0">${data.price}</p>
                                                <a
                                                    // href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"
                                                    onClick={() => handleAddToCart(data)}
                                                >
                                                    <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                                    Add to cart
                                                </a>
                                            </div>
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
