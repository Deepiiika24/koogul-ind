import React, { useEffect, useState } from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import SinglePageHeader from "./SinglePageHeader"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../app/store"
import { decrementQuantity, incrementQuantity, initItems, removeItem } from "../../../features/cart/cartSlice"
import rice1 from '../../../assets/images/spices/garlic.jpg'
import rice2 from '../../../assets/images/spices/clove.jpg'
import rice3 from '../../../assets/images/spices/mustard.jpg'
import rice4 from '../../../assets/images/spices/bayleaf.jpg'
import rice5 from '../../../assets/images/spices/turmeric.jpg'
import rice6 from '../../../assets/images/spices/ginger.jpg'
import rice7 from '../../../assets/images/spices/star.jpg'
import rice8 from '../../../assets/images/spices/cinnamon.jpg'
import rice9 from '../../../assets/images/spices/nutmeg.jpg'
import rice10 from '../../../assets/images/spices/cumin.jpg'
import rice11 from '../../../assets/images/spices/blackpeppr.jpg'
import rice12 from '../../../assets/images/spices/redchilli.jpg'
import rice13 from '../../../assets/images/spices/greencardamom.jpg'
import rice14 from '../../../assets/images/spices/peppercorn.jpg'
import rice15 from '../../../assets/images/spices/brown.jpg'
import rice16 from '../../../assets/images/spices/saffron.jpg'
import rice17 from '../../../assets/images/spices/coriander.jpg'
import rice18 from '../../../assets/images/spices/caromseeds.jpg'
import rice19 from '../../../assets/images/spices/mace.jpg'
import rice20 from '../../../assets/images/spices/poppy.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const initialItems = [

]
const Spices = () => {
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
        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spice
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Garlic
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
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Clove
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
           Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Mustard Seeds
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
          Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Bay-leaf
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
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Turmeric
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
          Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Ginger

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
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Start-anise
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
        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Cinnamon
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
        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Nutmeg

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
        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Cumin
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
        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Black pepper
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
        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Red chilli
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
        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    GreenCardamom  </a></h4>
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
        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Peppercorns
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
        <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Browncardamam
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
                src={rice16} 
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
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Saffron
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
                src={rice17} 
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
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Coriander

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
                src={rice18} 
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
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Carom seeds
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
                src={rice19} 
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
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Mace
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
                src={rice20} 
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
            Spices
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    poppy seed
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

export default Spices
