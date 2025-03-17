import React, { useEffect, useState } from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import SinglePageHeader from "./SinglePageHeader"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../app/store"
import { decrementQuantity, incrementQuantity, initItems, removeItem } from "../../../features/cart/cartSlice"
import rice1 from '../../../assets/images/flour/flour1.jpg'
import rice2 from '../../../assets/images/flour/flour2.png'
import rice3 from '../../../assets/images/flour/flour3.png'
import rice4 from '../../../assets/images/flour/flour4.jpg'
import rice5 from '../../../assets/images/flour/flour5.png'
import rice6 from '../../../assets/images/flour//flour2.png'
import rice7 from '../../../assets/images/flour/flour4.jpg'
import rice8 from '../../../assets/images/flour/flour5.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"

interface FlourItem {
    id: number;
    name: string;
    image: string;
    path: string;
}

const flourData: FlourItem[] = [
    { id: 1, name: "Rice Flour", image: rice1, path: "/flour/rice-flour" },
    { id: 2, name: "Red Rice Flour", image: rice2, path: "/flour/red-rice-flour" },
    { id: 3, name: "Ragi Flour", image: rice3, path: "/flour/ragi-flour" },
    { id: 4, name: "Moong Dal Flour", image: rice4, path: "/flour/moong-dal-flour" },
    { id: 5, name: "Urad Dal Flour", image: rice5, path: "/flour/urad-dal-flour" },
    { id: 6, name: "Red Rice Roasted Flour", image: rice6, path: "/flour/red-rice-roasted-flour" },
    { id: 7, name: "Moong Dal Roasted Flour", image: rice7, path: "/flour/moong-dal-roasted-flour" },
    { id: 8, name: "Urad Roasted Flour", image: rice8, path: "/flour/urad-roasted-flour" },

];
const Flour = () => {
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
                                Premium quality flour, milled to perfection for exceptional taste
                            </h1>
                        </div>
                        <div data-aos="fade-up">
                            <div className="container-fluid">
                                <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
                                    At Koogul Industries, we believe great baking starts with exceptional flour. Sourced from trusted growers and milled to perfection, our premium flour delivers unmatched softness, purity, and consistency. Every batch is carefully tested to ensure it meets the highest standards — because quality you can trust makes all the difference.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div className="bg-light p-5 rounded">
                            <div className="row g-4 justify-content-center">
                                {flourData.map((data) => (
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
                                                Flour
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

export default Flour