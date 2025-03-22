import type React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import bestProduct1 from '../../assets/images/best-product-1.jpg'
import bestProduct2 from '../../assets/images/best-product-2.jpg'
import bestProduct3 from '../../assets/images/best-product-3.jpg'
import bestProduct4 from '../../assets/images/best-product-4.jpg'
import bestProduct5 from '../../assets/images/best-product-5.jpg'
import bestProduct6 from '../../assets/images/best-product-6.jpg'
import fruitItem1 from '../../assets/images/product1.jpg'
import fruitItem2 from '../../assets/images/product2.png'
import fruitItem3 from '../../assets/images/product3.jpg'
import fruitItem4 from '../../assets/images/product4.jpg'
import fruitItem5 from '../../assets/images/product5.jpg'
import fruitItem6 from '../../assets/images/product6.jfif'
import fruitItem7 from '../../assets/images/product7.jpg'
import fruitItem9 from '../../assets/images/product9.jpg'
import fruitItem10 from '../../assets/images/product10.jpg'
import fruitItem11 from '../../assets/images/product13.jpg'
import fruitItem12 from '../../assets/images/product12.jpg'
import fruitItem8 from '../../assets/images/product8.jpg'
const BestsalerProduct: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing

    });
  }, []);
  return (
    <div className="container-fluid py-5" id='py-5'>
      <div className="container py-5" id='py-5'>
      <div data-aos="fade-up">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
          <h1 className="display-4" style={{paddingTop:"0rem"}}>Bestseller Products</h1>
          <p>
            Latin words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
        </div>
        <div data-aos="fade-up">
        <div className="rounded">
        <div className="row g-4">
            <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem1}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-4">
                <a href="/Rice" className="h5">
                 Rice
                </a>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem2}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-4">
                <a href="/Flower" className="h5">
                 Flower
                </a>
          
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img src={fruitItem3} className="img-fluid rounded" alt="" />
              <div className="py-4">
                <a href="/Pooja" className="h5">
                Pooja product
                </a>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem4}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-2">
                <a href="/spices" className="h5">
                Spices

                </a>
                
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem5}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-2">
                <a href="/Vegetables" className="h5">
                Vegetables
                </a>
                
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem6}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-2">
                <a href="/Leaf" className="h5">
                Leaf
                </a>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem7}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-2">
                <a href="/Beeda" className="h5">
               Paan Beeda
                </a>
                           
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem8}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-2">
                <a href="/Snacks" className="h5">
                Snacks
                </a>
                
                
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem9}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-2">
                <a href="/Oil" className="h5">
                Oil
                </a>
                
                
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem10}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-2">
                <a href="/Masala" className="h5">
                Masala
                </a>
                               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem11}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-2">
                <a href="/Pickle" className="h5">
                Pickle
                </a>
                              
              </div>           
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="text-center">
              <img
                src={fruitItem12}
                className="img-fluid rounded"
                alt=""
              />
              <div className="py-2">
                <a href="/Flour" className="h5">
                Flour
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>

  )

}
export default BestsalerProduct
