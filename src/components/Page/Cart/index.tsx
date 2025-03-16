import React, { useEffect, useState } from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import SinglePageHeader from "./SinglePageHeader"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../app/store"
import { decrementQuantity, incrementQuantity, initItems, removeItem } from "../../../features/cart/cartSlice"
import rice1 from '../../../assets/images/rice/Matta-Rice.png'
import rice2 from '../../../assets/images/rice/Basmati-rice.jpg'
import rice3 from '../../../assets/images/rice/Boiled-Rice.jpg'
import rice4 from '../../../assets/images/rice/Idli-rice.jpg'
import rice5 from '../../../assets/images/rice/Red-raw-rice.jpg'
import rice6 from '../../../assets/images/rice//Seeraga-samba.jpg'
import rice7 from '../../../assets/images/rice/White-raw-rice.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"

const initialItems = [

]
const Rice = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: "ease-in-out", // Animation easing

        });
    }, []);
    const dispatch = useAppDispatch()

    const { items, shipping } = useAppSelector((state: RootState) => state.cart)
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
    const total = subtotal + shipping
    const [initi, setIniti] = useState(false)
    useEffect(() => {
        if (!initi) {
            console.log("initialItems")
            setIniti(true)
        }
    }, [initi])
    return (
        <>
            <Header />
            <SinglePageHeader />
            <div>

                <div className='container'>
                    <div data-aos="fade-up">
                        <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
                            <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
                                we export premium quality rice, ensuring excellence in every grain
                            </h1>
                        </div>

                        <div data-aos="fade-up">
                            <div className="container-fluid">
                                <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
                                    At Koogul Industries, we take pride in exporting only the highest quality rice to meet the diverse needs of our global customers. Our commitment to excellence begins with carefully selecting the finest rice varieties from trusted growers. Each grain undergoes rigorous quality checks to ensure it meets our exacting standards.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div className="bg-light p-5 rounded">
                            <div className="row g-4 justify-content-center">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div
                                        className="rounded position-relative fruite-item"
                                        style={{
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 0, 0, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <div className="fruite-img overflow-hidden">
                                            <img
                                                src={rice1}
                                                className="img-fluid w-100 rounded-top"
                                                alt=""
                                                style={{
                                                    transition: 'transform 0.4s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
                                            Rice
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h4 className="mt-3 text-center">
                                                <a href="/" className="text-decoration-none text-dark">
                                                    <Link to="/Rice/Matta-rice">
                                                        Matta Rice
                                                    </Link>
                                                </a></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div
                                        className="rounded position-relative fruite-item"
                                        style={{
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 0, 0, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <div className="fruite-img overflow-hidden">
                                            <img
                                                src={rice2}
                                                className="img-fluid w-100 rounded-top"
                                                alt=""
                                                style={{
                                                    transition: 'transform 0.4s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
                                            Rice
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h4 className="mt-3 text-center">
                                                <a href="/" className="text-decoration-none text-dark">
                                                    <Link to="/Rice/Basmati-Rice">
                                                        Basmati Rice
                                                    </Link>
                                                </a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div
                                        className="rounded position-relative fruite-item"
                                        style={{
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 0, 0, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <div className="fruite-img overflow-hidden">
                                            <img
                                                src={rice3}
                                                className="img-fluid w-100 rounded-top"
                                                alt=""
                                                style={{
                                                    transition: 'transform 0.4s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
                                            Rice
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h4 className="mt-3 text-center">
                                                <a href="/" className="text-decoration-none text-dark">
                                                    <Link to="/Rice/Boiled-Rice">
                                                        Boiled Rice
                                                    </Link>
                                                </a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div
                                        className="rounded position-relative fruite-item"
                                        style={{
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 0, 0, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <div className="fruite-img overflow-hidden">
                                            <img
                                                src={rice4}
                                                className="img-fluid w-100 rounded-top"
                                                alt=""
                                                style={{
                                                    transition: 'transform 0.4s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
                                            Rice
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h4 className="mt-3 text-center">
                                                <a href="/" className="text-decoration-none text-dark">
                                                    <Link to="/Rice/Idly-Rice">
                                                        Idly Rice
                                                    </Link>
                                                </a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div
                                        className="rounded position-relative fruite-item"
                                        style={{
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 0, 0, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <div className="fruite-img overflow-hidden">
                                            <img
                                                src={rice5}
                                                className="img-fluid w-100 rounded-top"
                                                alt=""
                                                style={{
                                                    transition: 'transform 0.4s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
                                            Rice
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h4 className="mt-3 text-center">
                                                <a href="/" className="text-decoration-none text-dark">
                                                    <Link to="/Rice/Red-Rice">
                                                        Red Raw Rice
                                                    </Link>
                                                </a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div
                                        className="rounded position-relative fruite-item"
                                        style={{
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 0, 0, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <div className="fruite-img overflow-hidden">
                                            <img
                                                src={rice6}
                                                className="img-fluid w-100 rounded-top"
                                                alt=""
                                                style={{
                                                    transition: 'transform 0.4s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
                                            Rice
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h4 className="mt-3 text-center">
                                                <a href="/" className="text-decoration-none text-dark">
                                                    <Link to="/Rice/Seeragasamba-Rice">
                                                        Seeraga Samba
                                                    </Link>
                                                </a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div
                                        className="rounded position-relative fruite-item"
                                        style={{
                                            overflow: 'hidden',
                                            transition: 'box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 0, 0, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <div className="fruite-img overflow-hidden">
                                            <img
                                                src={rice7}
                                                className="img-fluid w-100 rounded-top"
                                                alt=""
                                                style={{
                                                    transition: 'transform 0.4s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
                                            Rice
                                        </div>
                                        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                            <h4 className="mt-3 text-center">
                                                <a href="/" className="text-decoration-none text-dark">
                                                    <Link to="/Rice/White-Rice">
                                                        White Raw Rice
                                                    </Link>
                                                </a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Rice
