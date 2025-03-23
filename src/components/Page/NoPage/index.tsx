import type React from 'react'
import { useEffect, useState } from 'react';
import Header from '../../Header'
import Footer from '../../Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from "react-bootstrap/Carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Flower1 from '../../../assets/images/Flower/White-carnation.jpg'
import Flower2 from '../../../assets/images/Flower/Soft-pink-carnation-heads.jpg'
import Flower3 from '../../../assets/images/Flower/Red-carnation.jpg'
import Flower4 from '../../../assets/images/Flower/Peach-carnation.jpg'
import Flower5 from '../../../assets/images/Flower/Orange-carnation.jpg'
import Flower6 from '../../../assets/images/Flower/Yellow-carnation.jpg'
import Flower7 from '../../../assets/images/Flower/Soft-purple-carnation.jpg'
import Flower8 from '../../../assets/images/Flower/Carnation-bacarat-purple.jpg'
import Flower9 from '../../../assets/images/Flower/Purple-carnation.jpg'
import Flower10 from '../../../assets/images/Flower/Pink-carnation.jpg'
import Flower11 from '../../../assets/images/Flower/Tuberose.jpg'
import Flower12 from '../../../assets/images/Flower/Yellow-Marigold.jpg'
import Flower13 from '../../../assets/images/Flower/Orange-Marigold.webp'
import Flower14 from '../../../assets/images/Flower/Pooja-Flower.webp'
import Flower15 from '../../../assets/images/Flower/Red-button-rose.jpg'
import Flower16 from '../../../assets/images/Flower/Yellow-rose.jpg'
import Flower17 from '../../../assets/images/Flower/Orange-rose.jpg'
import Garland1 from '../../../assets/images/Flower/Carnation-Garland-Hover.png'
import Garland2 from '../../../assets/images/Flower/Rose-garland.png'
import Garland3 from '../../../assets/images/Flower/Wedding-Garland.png'
import Garland4 from '../../../assets/images/Flower/Tuberose-Garland.png'
import Petal1 from '../../../assets/images/Flower/Red-Rose-petels.jpg'
import Petal2 from '../../../assets/images/Flower/Yellow-petals.avif'
import Petal3 from '../../../assets/images/Flower/Orange-Petals.jpg'
import Petal4 from '../../../assets/images/Flower/Mixed-Petals.avif'
import String1 from '../../../assets/images/Flower/Jasmine-string.png'
import String2 from '../../../assets/images/Flower/Mixed-carnation-string.jpg'
import String3 from '../../../assets/images/Flower/Baby-breath.png'
import String4 from '../../../assets/images/Flower/Marigold-string.webp'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const images = [
  { img: Flower1, name: "White Carnation", path: "/flower/white-carnation" },
  { img: Flower2, name: "Soft Pink Carnation", path: "/flower/soft-pink-carnation" },
  { img: Flower3, name: "Red Carnation", path: "/flower/red-carnation" },
  { img: Flower4, name: "Peach Carnation", path: "/flower/peach-carnation" },
  { img: Flower5, name: "Orange Carnation", path: "/flower/orange-carnation" },
  { img: Flower6, name: "Yellow Carnation", path: "/flower/yellow-carnation" },
  { img: Flower7, name: "Soft Purple Carnation", path: "/flower/soft-purple-carnation" },
  { img: Flower8, name: "Carnation bacarat", path: "/flower/carnation-bacarat" },
  { img: Flower9, name: "Purple Carnation", path: "/flower/purple-carnation" },
  { img: Flower10, name: "Pink Carnation", path: "/flower/pink-carnation" },
  { img: Flower11, name: "Tuberose", path: "/flower/tuberose" },
  { img: Flower12, name: "Yellow Marigold", path: "/flower/yellow-marigold" },
  { img: Flower13, name: "Orange Marigold", path: "/flower/orange-marigold" },
  { img: Flower14, name: "Pooja Flower", path: "/flower/pooja-flower" },
  { img: Flower15, name: "Red Rose", path: "/flower/red-rose" },
  { img: Flower16, name: "Yellow Rose", path: "/flower/yellow-rose" },
  { img: Flower17, name: "Orange Rose", path: "/flower/orange-rose" },
];

const garlands = [
  { img: Garland1, name: "Carnation Garland", path: "/flower/carnation-garland" },
  { img: Garland2, name: "Rose Garland", path: "/flower/rose-garland" },
  { img: Garland3, name: "Wedding Garland", path: "/flower/wedding-garland" },
  { img: Garland4, name: "Tuberose Garland", path: "/flower/tuberose-garland" },
];

const petals = [
  { img: Petal1, name: "Red Rose Petals", path: "/flower/red-rose-petals" },
  { img: Petal2, name: "Yellow Rose Petals", path: "/flower/yellow-rose-petals" },
  { img: Petal3, name: "Orange Rose Petals", path: "/flower/orange-rose-petals" },
  { img: Petal4, name: "Mixed Rose Petals", path: "/flower/mixed-rose-petals" },
]

const strings = [
  { img: String1, name: "Jasmine String", path: "/flower/jasmine-string" },
  { img: String2, name: "Carnation String", path: "/flower/carnation-string" },
  { img: String3, name: "Baby Breath", path: "/flower/baby-breath-string" },
  { img: String4, name: "Mixed Marigold String", path: "/flower/mixed-marigold-string" },
]

const getSlidesPerView = (width: number) => {
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
};

const getSlides = (arr: { img: string; name: string; path: string }[], perSlide: number) => {
  let slides: { img: string; name: string; path: string }[][] = [];
  for (let i = 0; i < arr.length; i += perSlide) {
    let slide = arr.slice(i, i + perSlide);

    // Ensure all slides have the required number of images by cycling through the array
    while (slide.length < perSlide) {
      slide.push(arr[slide.length % arr.length]);
    }

    slides.push(slide);
  }
  return slides;
};

const Flower: React.FC = () => {

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = getSlides(images, slidesPerView);

  const garSlides = getSlides(garlands, slidesPerView)

  const petalSlides = getSlides(petals, slidesPerView)

  const stringSlides = getSlides(strings, slidesPerView)

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
    });
  }, []);

  return (
    <>
      <Header />
      <>
        {/* Single Page Header start */}
        <div className="container-fluid py-5"
          style={{
            marginTop: "152px",
            position: "relative",
            backgroundImage: `url(https://img.freepik.com/free-photo/top-view-pink-lilies-red-surface_141793-17915.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "auto"
          }}
        >
          <h1 className="text-center text-white display-6">Flower</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/" className='text-primary'>Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/" className='text-primary'>Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Flower</li>
          </ol>
        </div>
        {/* Single Page Header End */}
      </>
      <Container>
        <div data-aos="fade-up">
          <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
            <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
              TRUSTED PARTNER IN FLORICULTURE EXPORTS
            </h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="container-fluid">
            <p className="text-justify p-3 mx-auto" id='p-3' style={{ width: "100%", textAlign: "center" }}>
              Floriculture in India primarily means the cultivation of flowers or flower farming. Known for its rich diversity, India's floriculture sector thrives with a wide variety of flowers, making it a prominent player in the global flower market. At Koogul Industries, we take pride in being one of the leading exporters of exquisite flowers from India, ensuring that the beauty of Indian floriculture reaches every corner of the world.</p>
          </div>
        </div>
      </Container>
      <div className='bg-light p-5 rounded'>
        <h2 className='text-start mb-4' data-aos="fade-up">Flower Heads</h2>
        <Carousel data-aos="fade-up" interval={null} controls indicators={false} wrap={true}>
          {slides.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-3">
                {group.map((data, i) => (
                  <Col key={i} xs={12} sm={6} md={3} id='columns'>
                    <div className="rounded p-2">
                      <div className="card" style={{ height: 300 }}>
                        <img
                          src={data.img}
                          className="img-fluid w-100 rounded"
                          alt={`Slide ${index * 4 + i + 1}`}
                          style={{
                            height: "243px"
                          }}
                        />
                        <h5 className='py-3'><Link to={data.path}>{data.name}</Link></h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <h2 className='mt-5 mb-5' data-aos="fade-up">Flower Garlands</h2>
        <Carousel data-aos="fade-up" interval={null} controls indicators={false} wrap={true}>
          {garSlides.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-3">
                {group.map((data, i) => (
                  <Col key={i} xs={12} sm={6} md={3} id='columns'>
                    <div className="rounded p-2">
                      <div className="card" style={{ height: 300 }}>
                        <img
                          src={data.img}
                          className="img-fluid w-100 rounded"
                          alt={`Slide ${index * 4 + i + 1}`}
                          style={{
                            height: "243px"
                          }}
                        />
                        <h5 className='py-3'><Link to={data.path}>{data.name}</Link></h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <h2 className='mt-5 mb-5' data-aos="fade-up">Flower Petals</h2>
        <Carousel data-aos="fade-up" interval={null} controls indicators={false} wrap={true}>
          {petalSlides.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-3">
                {group.map((data, i) => (
                  <Col key={i} xs={12} sm={6} md={3} id='columns'>
                    <div className="rounded p-2">
                      <div className="card" style={{ height: 300 }}>
                        <img
                          src={data.img}
                          className="img-fluid w-100 rounded"
                          alt={`Slide ${index * 4 + i + 1}`}
                          style={{
                            height: "243px"
                          }}
                        />
                        <h5 className='py-3'><Link to={data.path}>{data.name}</Link></h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <h2 className='mt-5 mb-5' data-aos="fade-up">Flower String</h2>
        <Carousel data-aos="fade-up" interval={null} controls indicators={false} wrap={true}>
          {stringSlides.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-3">
                {group.map((data, i) => (
                  <Col key={i} xs={12} sm={6} md={3} id='columns'>
                    <div className="rounded p-2">
                      <div className="card" style={{ height: 300 }}>
                        <img
                          src={data.img}
                          className="img-fluid w-100 rounded"
                          alt={`Slide ${index * 4 + i + 1}`}
                          style={{
                            height: "243px"
                          }}
                        />
                        <h5 className='py-3'><Link to={data.path}>{data.name}</Link></h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Footer />
    </>
  )
}



export default Flower
