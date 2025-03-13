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

const initialItems = [

]
const Flour = () => {
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
            Flour
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                     Rice Flour
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
            Flour
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                  Red Rice Flour
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
           Flour
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                   Ragi Flour
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
          Flour
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Moong Dal Flour
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
            Flour
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Urad Dal Flour
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
          Flour
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                   Red Rice Roasted Flour
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
            Flour
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                    Moong Dal Roasted Flour
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
            Flour
        </div>
        <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
        <h4 className="mt-3 text-center">
                    <a href="/" className="text-decoration-none text-dark">
                  Urad Roasted Flour
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

export default Flour
