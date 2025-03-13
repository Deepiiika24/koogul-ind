import React, { useEffect, useState } from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import SinglePageHeader from "./SinglePageHeader"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../app/store"
import { decrementQuantity, incrementQuantity, initItems, removeItem } from "../../../features/cart/cartSlice"
import rice1 from '../../../assets/images/snacks/Black_Sesame.png'
import rice2 from '../../../assets/images/snacks/Banana.png'
import rice3 from '../../../assets/images/snacks/Peanut_Powder.png'
import rice4 from '../../../assets/images/snacks/Garlic_Mixture_Packet.png'
import rice5 from '../../../assets/images/snacks/Chana_Dal.png'
import rice6 from '../../../assets/images/snacks/Hot_Mixture.png'
import rice7 from '../../../assets/images/snacks/Peanut_Chikii.png'
import rice8 from '../../../assets/images/snacks/Masala_Peanut.png'
import rice9 from '../../../assets/images/snacks/Pepper_Peanut.png'
import rice10 from '../../../assets/images/snacks/Salted_Peanut.png'
import rice11 from '../../../assets/images/snacks/Tapioca_Chips.png'
import rice12 from '../../../assets/images/snacks/Tapioca_Stick.png'
import rice13 from '../../../assets/images/snacks/Thattai.png'
import rice14 from '../../../assets/images/snacks/White_Sesame.png'
import rice15 from '../../../assets/images/snacks/Masala_Chikpeas.png'

import AOS from "aos";
import "aos/dist/aos.css";

const initialItems = [

]
const Snacks = () => {
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
               
GET MESMERIZED WITH THE FRAGRANCE OF THE SUPERB QUALITY OF SPICES BOUGHT FROM KOOGUL INDUSTRIES FOOD EXPORTS
              </h1>
            </div>

            <div data-aos="fade-up">
              <div className="container-fluid">
                <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
                Koogul Industries Food Exports is famous for delivering excellent quality of organic Indian spices to middle east nations. The taste and aroma these spices add to your food is beyond the best experience. We have a range of customers who come back to us specially for buying our range of spices because it gives them ultimate satisfaction of eating very tasty food. A high quality standard is maintained while delivering organic Indian spices to the customers.</p>
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Snacks
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                   Sesame Balls

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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Banana Chips
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
           Spices
        </div> */}
        <div className="p-4 border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Peanut Powder

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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
          Spices
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Garlic Mixture
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4 border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Channa Dal
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
          Spices
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Hot Mixture

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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Peanut Chikkies
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
                src={rice8} 
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Peanut Chilli
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
                src={rice9} 
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Peanut Pepper
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
                src={rice10} 
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Peanut Salt
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
                src={rice11} 
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Tapioca Chips
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
                src={rice12} 
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4   border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Tapioca Stick
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
                src={rice13} 
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4  border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Thattai Vadai </a></h4>
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
        onMouseLeave
                ={(e) => {
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
        }}
    >
        <div className="fruite-img overflow-hidden">
            <img 
                src={rice14} 
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4 border border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    White Sesame Balls
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
            cursor: 'pointer',
           
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
                src={rice15} 
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
        {/* <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div> */}
        <div className="p-4 text-center">
            <h4 className="mt-3 text-center">
                <a href="/" className="text-decoration-none text-dark">
                Chikpeas

                </a>
            </h4>
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

export default Snacks
