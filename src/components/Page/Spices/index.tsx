import React, { useEffect, useState } from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import SinglePageHeader from "./SinglePageHeader"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../app/store"
import { decrementQuantity, incrementQuantity, initItems, removeItem } from "../../../features/cart/cartSlice"
import spices1 from '../../../assets/images/spices/garlic.jpg'
import spices2 from '../../../assets/images/spices/clove.jpg'
import spices3 from '../../../assets/images/spices/mustard.jpg'
import spices4 from '../../../assets/images/spices/bayleaf.jpg'
import spices5 from '../../../assets/images/spices/turmeric.jpg'
import spices6 from '../../../assets/images/spices/sukku.jpg'
import spices7 from '../../../assets/images/spices/star.jpg'
import spices8 from '../../../assets/images/spices/cinnamon.jpg'
import spices9 from '../../../assets/images/spices/nutmeg.jpg'
import spices10 from '../../../assets/images/spices/cumin.jpg'
import spices11 from '../../../assets/images/spices/blackpeppr.jpg'
import spices12 from '../../../assets/images/spices/redchilli.jpg'
import spices13 from '../../../assets/images/spices/greencardamom.jpg'
import spices14 from '../../../assets/images/spices/peppercorn.jpg'
import spices15 from '../../../assets/images/spices/brown.jpg'
import spices16 from '../../../assets/images/spices/saffron.jpg'
import spices17 from '../../../assets/images/spices/coriander.jpg'
import spices18 from '../../../assets/images/spices/caromseeds.jpg'
import spices19 from '../../../assets/images/spices/mace.jpg'
import spices20 from '../../../assets/images/spices/poppy.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"

interface SpicesItem {
    id: number;
    name: string;
    image: string;
    path: string;
}

const spicesData: SpicesItem[] = [
    // { id: 1, name: "Garlic", image: spices1, path: "/spices/garlic" },
    { id: 1, name: "Clove", image: spices2, path: "/spices/clove" },
    { id: 2, name: "Mustard Seeds", image: spices3, path: "/spices/mustard-seeds" },
    { id: 3, name: "Bay-leaf", image: spices4, path: "/spices/bay-leaf" },
    { id: 4, name: "Turmeric", image: spices5, path: "/spices/turmeric" },
    { id: 5, name: "Dry Ginger", image: spices6, path: "/spices/sukku" },
    { id: 6, name: "Star-anise", image: spices7, path: "/spices/star-anise" },
    { id: 7, name: "Cinnamon", image: spices8, path: "/spices/cinnamon" },
    { id: 8, name: "Nutmeg", image: spices9, path: "/spices/nutmeg" },
    { id: 9, name: "Cumin", image: spices10, path: "/spices/cumin" },
    { id: 10, name: "Black pepper", image: spices11, path: "/spices/black-pepper" },
    { id: 11, name: "Red chilli", image: spices12, path: "/spices/red-chilli" },
    { id: 12, name: "Coriander", image: spices13, path: "/spices/coriander" },
    { id: 13, name: "Carom seeds", image: spices14, path: "/spices/carom-seeds" },
    { id: 14, name: "Mace", image: spices15, path: "/spices/mace" },
    { id: 15, name: "Poppy seed", image: spices16, path: "/spices/poppy-seed" },
    { id: 16, name: "Green Cardamom", image: spices17, path: "/spices/green-cardamom" },
    { id: 17, name: "Peppercorns", image: spices18, path: "/spices/pepper-corns" },
    { id: 18, name: "Brown cardamam", image: spices19, path: "/spices/brown-cardamam" },
    { id: 19, name: "Saffron", image: spices20, path: "/spices/saffron" },
];
const Spices = () => {
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
                                Get mesmerized with the fragrance of the superb Quality of Spices bought from Koogul Industries food Exports
                            </h1>
                        </div>

                        <div data-aos="fade-up">
                            <div className="container-fluid">
                                <p className="text-justify p-3 mx-auto" id="p-3" style={{ width: "100%", textAlign: "justify" }}>
                                    Koogul Industries Food Exports is famous for delivering excellent quality of organic Indian spices to middle east nations. The taste and aroma these spices add to your food is beyond the best experience. We have a range of customers who come back to us specially for buying our range of spices because it gives them ultimate satisfaction of eating very tasty food. A high quality standard is maintained while delivering organic Indian spices to the customers.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div className="bg-light p-5 rounded">
                            <div className="row g-4 justify-content-center">
                                {spicesData.map((data) => (
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
                                                Spice
                                            </div>
                                            <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                                                <h4 className="mt-3 text-center">
                                                    <a className="text-decoration-none text-dark">
                                                        <Link to={data.path}>
                                                            {data.name}
                                                        </Link>
                                                    </a></h4>
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

export default Spices
