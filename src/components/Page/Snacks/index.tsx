import React, { useEffect, useState } from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import SinglePageHeader from "./SinglePageHeader"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../app/store"
import { decrementQuantity, incrementQuantity, initItems, removeItem } from "../../../features/cart/cartSlice"
import snacks1 from '../../../assets/images/snacks/Black_Sesame.png'
import snacks2 from '../../../assets/images/snacks/Banana.png'
import snacks3 from '../../../assets/images/snacks/Peanut_Powder.png'
import snacks4 from '../../../assets/images/snacks/Garlic_Mixture_Packet.png'
import snacks5 from '../../../assets/images/snacks/Chana_Dal.png'
import snacks6 from '../../../assets/images/snacks/Hot_Mixture.png'
import snacks7 from '../../../assets/images/snacks/Peanut_Chikii.png'
import snacks8 from '../../../assets/images/snacks/Masala_Peanut.png'
import snacks9 from '../../../assets/images/snacks/Pepper_Peanut.png'
import snacks10 from '../../../assets/images/snacks/Salted_Peanut.png'
import snacks11 from '../../../assets/images/snacks/Tapioca_Chips.png'
import snacks12 from '../../../assets/images/snacks/Tapioca_Stick.png'
import snacks13 from '../../../assets/images/snacks/Thattai.png'
import snacks14 from '../../../assets/images/snacks/White_Sesame.png'
import snacks15 from '../../../assets/images/snacks/Masala_Chikpeas.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"

interface SnacksItem {
    id: number;
    name: string;
    image: string;
    path: string;
}

const snacksData: SnacksItem[] = [
    { id: 1, name: "Black Sesame", image: snacks1, path: "/snacks/black-sesame" },
    { id: 2, name: "Banana Chips", image: snacks2, path: "/snacks/banana-chips" },
    { id: 3, name: "Peanut Powder", image: snacks3, path: "/snacks/peanut-powder" },
    { id: 4, name: "Garlic Mixture", image: snacks4, path: "/snacks/garlic-mixture" },
    { id: 5, name: "Chana Dal", image: snacks5, path: "/snacks/chana-dal" },
    { id: 6, name: "Hot Mixture", image: snacks6, path: "/snacks/hot-mixture" },
    { id: 7, name: "Peanut Chikki", image: snacks7, path: "/snacks/peanut-chikki" },
    { id: 8, name: "Masala Peanut", image: snacks8, path: "/snacks/masala-peanut" },
    { id: 9, name: "Pepper Peanut", image: snacks9, path: "/snacks/pepper-peanut" },
    { id: 10, name: "Salted Peanut", image: snacks10, path: "/snacks/salted-peanut" },
    { id: 11, name: "Tapioca Chips", image: snacks11, path: "/snacks/tapioca-chips" },
    { id: 12, name: "Tapioca Stick", image: snacks12, path: "/snacks/tapioca-stick" },
    { id: 13, name: "Thattai", image: snacks13, path: "/snacks/thattai" },
    { id: 14, name: "White Sesame", image: snacks14, path: "/snacks/white-sesame" },
    { id: 15, name: "Masala Chikpeas", image: snacks15, path: "/snacks/masala-chikpeas" },
];

const Snacks = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: "ease-in-out", // Animation easing
        });
    }, []);

    return (
        <>
            <Header />
            <SinglePageHeader />
            <div>
                <div className='container'>
                    <div data-aos="fade-up">
                        <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
                            <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
                                GET MESMERIZED WITH THE FRAGRANCE OF THE SUPERB QUALITY OF SPICES BOUGHT FROM KOOGUL INDUSTRIES FOOD EXPORTS
                            </h1>
                        </div>
                        <div data-aos="fade-up">
                            <div className="container-fluid">
                                <p className="text-justify p-3 mx-auto" id="p-3" style={{ width: "100%", textAlign: "center" }}>
                                    Koogul Industries Food Exports is famous for delivering excellent quality of organic Indian spices to middle east nations. The taste and aroma these spices add to your food is beyond the best experience. We have a range of customers who come back to us specially for buying our range of spices because it gives them ultimate satisfaction of eating very tasty food. A high quality standard is maintained while delivering organic Indian spices to the customers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div className="bg-light p-5 rounded">
                            <div className="row g-4 justify-content-center">
                                {snacksData.map((data) => (
                                    <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
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
                                                    src={data.image}
                                                    className="img-fluid w-100 rounded-top"
                                                    alt={data.name}
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
                                                Snacks
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Snacks