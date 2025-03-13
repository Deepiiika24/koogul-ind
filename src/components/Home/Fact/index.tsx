import type React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Fact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing

    });
  }, []);
  return (
    <div className="container-fluid py-5">
      
      <div className="container">
      <div data-aos="fade-up">
      <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px"}}>
          <h1 className="display-4" style={{fontSize:"2.5rem"}}>
          Why Shop with us?</h1>
        </div>
        <div data-aos="fade-up">
        <div className="container-fluid">
          <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
          We are a dynamic creative agency based in Melbourne, Australia, specializing in multilingual localization and top-notch translation solutions. With our extensive experience, we deliver high-quality, precise translations tailored to meet your global communication needs.  </p>
        </div>
        </div>
        </div>
        <div data-aos="fade-up">
        <div className="bg-light p-5 rounded">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
              <i className="fa-solid fa-spa text-secondary"></i>
                <h4>Freshness Guaranteed</h4>
               
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
              <i className="fa-solid fa-cart-shopping text-secondary"></i>
                <h4>Wide Selection</h4>
                
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
              <i className="fa-solid fa-recycle text-secondary"></i>
                <h4>Sustainable Practices</h4>
               
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
              <i className="fa-solid fa-handshake-angle text-secondary"></i>
                <h4>Exceptional Customer Service</h4>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Fact


