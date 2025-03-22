import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Col, Container, Image, Row } from 'react-bootstrap'
import About from '../../assets/images/KG.jpg'
import RiceBanner from '../../assets/images/Rice-Bundle.jpg'
import PoojaBanner from '../../assets/images/Pooja-Set.jpg'
import FlowerBanner from '../../assets/images/Jasmine-banner.jpg'
import SpicesBanner from '../../assets/images/Spices-Banner.jpg'
import useCountAnimation from '../../useCountAnimation'
import Shipping from '../../assets/images/Shipping.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const Products: React.FC = () => {

  const branches = useCountAnimation(2);
  const years = useCountAnimation(18);
  const shippings = useCountAnimation(100);
  const customers = useCountAnimation(1000);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      branches.setStart(true);
      years.setStart(true);
      shippings.setStart(true);
      customers.setStart(true);
    }
  }, [isVisible]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (

    <>
      <Header />
      {/* Single Page Header start */}
      <div className="container-fluid py-5"
        style={{
          marginTop: "152px",
          position: "relative",
          backgroundImage: `url(https://img.freepik.com/premium-photo/vegetables-paper-bags-purple-background_70287-6032.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "auto"
        }}
      >
        <h1 className="text-center text-white display-6">About</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/index.html#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">About</li>
        </ol>
      </div>
      <Container className='mt-5 mb-5' data-aos="fade-up">
        <Row className='justify-content-between'>
          <Col xs={12} lg={6}>
            <Image src={About} alt='About.png' className='img-fluid rounded' style={{ height: "-webkit-fill-available" }} />
          </Col>
          <Col xs={12} lg={6} className='px-5' id='px-5'>
            <h1 className='text-center mt-4 mb-4' style={{ color: "#D21215" }}>WELCOME TO <br /> KOOGUL INDUSTRIES</h1>
            <p style={{ textAlign: "justify" }}>
              Established in 2013 as a family-owned import/export business, <b>Koogul Industries</b> has grown into one of Melbourne’s leading importers. With a vast network of warehouses and a team of industry experts, we cater to both consumer and commercial clients, ensuring excellence in every transaction.
            </p>
            <p style={{ textAlign: "justify" }}>
              Driven by a vision to achieve global recognition, we are committed to delivering superior service and fostering long-term customer relationships. Our dedication to quality and reliability continues to set us apart in the industry.
            </p>
          </Col>
        </Row>
      </Container>

      <Container style={{ margin: "100px auto" }}>
        <h1 className='text-center mt-5 mb-5'>OUR SERVICES</h1>
        <Row className="justify-content-center">
          <Col xs={12} lg={3} className="mb-4" data-aos="fade-up" id='columns'>
            <div className='card'>
              <img src={FlowerBanner} className='img-thumbnail' alt='Image.png' style={{ height: 200, width: 300, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-primary">FLOWER</h5>
                <p className='card-text' style={{ textAlign: "justify" }}>We offer a wide variety of fresh flowers for all your special occasions, whether it’s weddings, festivals, or any celebration.</p>
                <button className='btn text-primary'>See More <i className="bi bi-arrow-right-circle-fill"></i> </button>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3} className="mb-4" data-aos="fade-down" id='columns'>
            <div className='card'>
              <img src={PoojaBanner} className='img-thumbnail' alt='Image.png' style={{ height: 200, width: 300, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-primary">POOJA PRODUCTS</h5>
                <p className='card-text' style={{ textAlign: "justify" }}>Our pooja products include everything you need for religious rituals, from incense to idols and offerings, all of the highest quality.</p>
                <button className='btn text-primary'>See More <i className="bi bi-arrow-right-circle-fill"></i> </button>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3} className="mb-4" data-aos="fade-up" id='columns'>
            <div className='card'>
              <img src={RiceBanner} className='img-thumbnail' alt='Image.png' style={{ height: 200, width: 300, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-primary">RICE</h5>
                <p className='card-text' style={{ textAlign: "justify" }}>We offer a variety of rice for all your needs. Whether for daily meals or special occasions, enjoy the finest grains with great taste and quality.</p>
                <button className='btn text-primary'>See More <i className="bi bi-arrow-right-circle-fill"></i> </button>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3} className="mb-4" data-aos="fade-down" id='columns'>
            <div className='card'>
              <img src={SpicesBanner} className='img-thumbnail' alt='Image.png' style={{ height: 200, width: 300, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title text-primary">SPICES</h5>
                <p className='card-text' style={{ textAlign: "justify" }}>Add rich flavor to your meals with our premium spices, perfect for any dish, bringing aroma and taste to your kitchen.</p>
                <button className='btn text-primary'>See More <i className="bi bi-arrow-right-circle-fill"></i> </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Row
        id='flight-bg'
        data-aos="fade-up"
        style={{
          backgroundImage: `url(https://skantrans.ie/wp-content/uploads/2017/04/Air-Freight.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 0",
          textAlign: "center",
          color: "black"
        }}
      >
        <Row>
          <Col ref={sectionRef} id='branch-col'>
            {isVisible && (
              <>
                <Row>
                  <Col md={6}>
                    <h2>{branches.count}+</h2>
                    <p>Branches</p>
                  </Col>
                  <Col md={6}>
                    <h2>{years.count}+</h2>
                    <p>Years</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h2>{shippings.count}+</h2>
                    <p>Shippings</p>
                  </Col>
                  <Col md={6}>
                    <h2>{customers.count}+</h2>
                    <p>Happy Customers</p>
                  </Col>
                </Row>
              </>
            )}
          </Col>
          <Col></Col>
        </Row>
      </Row>

      <Container style={{ margin: "100px auto" }}>
        <Row>
          <Col xs={12} lg={6}>
            <Image data-aos="zoom-in-up" src={Shipping} alt='About.png' className='img-fluid rounded' style={{ height: "-webkit-fill-available" }} />
          </Col>
          <Col xs={12} lg={6} id='px-5' className='px-5' data-aos="fade-up">
            <h5 className='text-start mt-3 mb-3' style={{ color: "#D21215" }}>WHY CHOOSE US</h5>
            <h1 className='text-start mt-3 mb-3'>UNMATCHED QUALITY</h1>
            <p className='mt-2 mb-2'>We source our flowers from the best local and international growers, ensuring that every bouquet is fresh, vibrant, and long-lasting.</p>
            <div className='mt-4'>
              <h6 className='mt-3 mb-3'>FRESHNESS AND LONGEVITY</h6>
              <div className="progress mt-3 mb-3" style={{ height: "10px" }}>
                <div
                  className="progress-bar text-end px-5"
                  role="progressbar"
                  style={{ width: "91%" }}
                  aria-valuenow={91}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >91%</div>
              </div>
              <h6 className='mt-3 mb-3'>WORLDWIDE SHIPPING</h6>
              <div className="progress mt-3 mb-3" style={{ height: "10px" }}>
                <div
                  className="progress-bar text-end px-5"
                  role="progressbar"
                  style={{ width: "82%" }}
                  aria-valuenow={82}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >82%</div>
              </div>
              <h6 className='mt-3 mb-3'>DEDICATED SUPPORT</h6>
              <div className="progress mt-3 mb-3" style={{ height: "10px" }}>
                <div
                  className="progress-bar text-end px-5"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >95%</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div style={{ margin: "100px auto" }}>
        <Row
          className='justify-content-center'
          id='faq-section'
          style={{
            backgroundImage: `url(https://img.freepik.com/premium-vector/abstract-banner-template-with-blue-wavy-lines-technology-banner_732218-855.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "50px 20px",
            color: "white",
          }}
        >
          <h1 className='text-center text-light mt-5' data-aos="fade-up">FREQUENTLY ASKED QUESTION</h1>
          <p className='text-center text-light mt-2 mb-5' data-aos="fade-up">Have questions about our products and services? Find answers to the most commonly asked questions below.</p>
          <Col xs={12} lg={6}>
            <div className="accordion mt-2 mb-2" id="accordionExample" data-aos="fade-up">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What products does Koogul Industries import and export?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Koogul Industries</strong> specializes in the worldwide import and export of high-quality agricultural and food products, including fresh flowers, premium rice varieties, nutritious flours, authentic masalas, aromatic spices, and traditional pickles.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion mt-2 mb-2" id="accordionExample" data-aos="fade-up">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How do you ensure the quality of your exported products?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Quality</strong> is our top priority. We source our products from trusted farms and suppliers, follow strict quality control measures, and use hygienic packaging to preserve freshness. Additionally, we comply with international export standards and certifications.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion mt-2 mb-2" id="accordionExample" data-aos="fade-up">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Can I place bulk orders for customized packaging?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Yes, we cater to <strong>bulk orders and offer</strong> customized packaging solutions based on your business requirements. Feel free to contact us for tailored solutions that meet your specific needs.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion mt-2 mb-2" id="accordionExample" data-aos="fade-up">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    How can I place an order or get in touch with Koogul Industries?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    You can place an order or inquire about <strong>our products through our website’s contact form, email, or phone.</strong> Our dedicated team is ready to assist you with all your import and export needs.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion mt-2 mb-2" id="accordionExample" data-aos="fade-up">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    What is the minimum order quantity for exports?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    The minimum order quantity <strong>depends on the product category.</strong> Please reach out to us with your specific requirements, and our team will assist you with the best possible options.
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  )
}


export default Products
