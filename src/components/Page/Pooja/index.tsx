import type React from 'react'
import { useEffect, useState } from 'react';
import Header from '../../Header'
import Footer from '../../Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from "react-bootstrap/Carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Flower1 from '../../../assets/images/pooja/kit1.jpg'
import Flower2 from '../../../assets/images/pooja/kit2.jpg'
import Flower3 from '../../../assets/images/pooja/kit3.jpg'
import Flower4 from '../../../assets/images/pooja/kit4.jpg'
import Flower5 from '../../../assets/images/pooja/kit4.jpg'
import Flower6 from '../../../assets/images/pooja/kit5.jpg'
import Flower7 from '../../../assets/images/pooja/kit6.jpg'
import Flower8 from '../../../assets/images/pooja/kit7.jpg'
import Flower9 from '../../../assets/images/pooja/kit8.jpg'
import brass1 from '../../../assets/images/pooja/kalash.jpg'
import brass2 from '../../../assets/images/pooja/bell.jpg'
import brass3 from '../../../assets/images/pooja/kunkumthattu.jpg'
import brass4 from '../../../assets/images/pooja/pooja.jpg'
import brass5 from '../../../assets/images/pooja/thalika.jpg'
import brass6 from '../../../assets/images/pooja/lota.png'
import spiritual1 from '../../../assets/images/pooja/kungumam.jpg'
import spiritual2 from '../../../assets/images/pooja/kottaipakku.jpg'
import spiritual3 from '../../../assets/images/pooja/cow cake.jpg'
import spiritual5 from '../../../assets/images/pooja/seeval.jpg'
import spiritual6 from '../../../assets/images/pooja/kopparathengai.jpg'
import spiritual7 from '../../../assets/images/pooja/vettiver.jpg'
import spiritual8 from '../../../assets/images/pooja/viputhi.jpg'
import spiritual9 from '../../../assets/images/pooja/omam kit.png'
import harbel1 from '../../../assets/images/pooja/rosewater.jpg'
import harbel2 from '../../../assets/images/pooja/sambrani.jpg'
import harbel3 from '../../../assets/images/pooja/sandal.jpg'
import harbel4 from '../../../assets/images/pooja/sandhanam.jpg'
import harbel5 from '../../../assets/images/pooja/panchinool.jpg'
import harbel6 from '../../../assets/images/pooja/sambrani1.png'
import harbel7 from '../../../assets/images/pooja/kalasanool.jpg'
import harbel8 from '../../../assets/images/pooja/karpuram.jpg'
import harbel9 from '../../../assets/images/pooja/kattimanjal.jpg'
import harbel10 from '../../../assets/images/pooja/nama katti.jpg'
import harbel11 from '../../../assets/images/pooja/kashthurimanjal.jpg'
import harbel12 from '../../../assets/images/pooja/navathaniyam.jpg'
import natural1 from '../../../assets/images/pooja/arugampul.jpg'
import natural2 from '../../../assets/images/pooja/nel.jpg'
import natural3 from '../../../assets/images/pooja/mangostick.jpg'
import natural4 from '../../../assets/images/pooja/pori.jpg'
import natural5 from '../../../assets/images/pooja/arasankatta.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import banner from '../../../assets/images/pooja/pooja-product-banner.jpg'
import { Link } from 'react-router-dom';

interface PoojaItem {
  id: number;
  name: string;
  img: string;
  path: string;
}
const images: PoojaItem[] = [
  { id: 1, name: "Sudrashana Pooja", img: Flower1, path: "/pooja/sudrashana-pooja" },
  { id: 2, name: "varalakshmi Pooja", img: Flower2, path: "/pooja/varalakshmi-pooja" },
  { id: 3, name: "Shiva pooja", img: Flower3, path: "/pooja/shiva-pooja" },
  { id: 4, name: "Satyanarayana pooja", img: Flower4, path: "/pooja/satyanarayana-pooja" },
  { id: 5, name: "Haridarshan Pooja", img: Flower5, path: "/pooja/haridarshan-pooja" },
  { id: 6, name: "Navgraha Pooja", img: Flower6, path: "/pooja/navgraha-pooja" },
  { id: 7, name: "Ganapathi Pooja", img: Flower7, path: "/pooja/ganapathi-pooja" },
  { id: 8, name: "108 Om Thiraviya", img: Flower8, path: "/pooja/108-om-thiraviya" },
  { id: 9, name: "Durga Pooja", img: Flower9, path: "/pooja/durga-pooja" },
];

const garlands: PoojaItem[] = [
  { id: 1, img: brass1, name: "Kalash", path: "/pooja/kalash" },
  { id: 2, img: brass2, name: "Bell", path: "/pooja/bell" },
  { id: 3, img: brass3, name: "kunkum Plate", path: "/pooja/kunkum-plate" },
  { id: 4, img: brass4, name: "Agarbatti holder", path: "/pooja/agarbatti-holder" },
  { id: 5, img: brass5, name: "Thalika", path: "/pooja/thalika" },
  { id: 6, img: brass6, name: "Lota", path: "/pooja/lota" },
];

const petals: PoojaItem[] = [
  { id: 1, img: spiritual1, name: "Kungumam", path: "/pooja/kungumam" },
  { id: 2, img: spiritual2, name: "Kottai Pakku", path: "/pooja/kottai-pakku" },
  { id: 3, img: spiritual3, name: "Cow Dung Cake", path: "/pooja/cow-dung-cake" },
  { id: 4, img: spiritual5, name: "Sival Pakku", path: "/pooja/sival-pakku" },
  { id: 5, img: spiritual6, name: "Koppara Thenga", path: "/pooja/koppara-thenga" },
  { id: 6, img: spiritual7, name: "Vetti Ver", path: "/pooja/vetti-ver" },
  { id: 7, img: spiritual8, name: "Vibuthi", path: "/pooja/vibuthi" },
  { id: 8, img: spiritual9, name: "Omam Kit 108", path: "/pooja/omam-kit-108" },
]

const strings: PoojaItem[] = [
  { id: 1, img: harbel1, name: "Paneer Water", path: "/pooja/paneer-water" },
  { id: 2, img: harbel2, name: "Sambrani Powder", path: "/pooja/sambrani-powder" },
  { id: 3, img: harbel3, name: "Sandhanam Powder", path: "/pooja/sandhanam-powder" },
  { id: 4, img: harbel4, name: "Sandhanam Katti", path: "/pooja/sandhanam-katti" },
  { id: 5, img: harbel5, name: "Panchi Nool", path: "/pooja/panchi-nool" },
  { id: 6, img: harbel6, name: "Sambrani Cup", path: "/pooja/sambrani-cup" },
  { id: 7, img: harbel7, name: "Kalasa Nool", path: "/pooja/kalasa-nool" },
  { id: 8, img: harbel8, name: "Karpuram", path: "/pooja/karpuram" },
  { id: 9, img: harbel9, name: "Katti Manjal", path: "/pooja/katti-manjal" },
  { id: 10, img: harbel10, name: "Namaa Katti", path: "/pooja/namaa-katti" },
  { id: 11, img: harbel11, name: "Kasthuri Manjal", path: "/pooja/kasthuri-manjal" },
  { id: 12, img: harbel12, name: "Navathaniyam", path: "/pooja/navathaniyam" },
]
const natural: PoojaItem[] = [
  { id: 1, img: natural1, name: "Grass", path: "/pooja/grass" },
  { id: 2, img: natural2, name: "Nel", path: "/pooja/nel" },
  { id: 3, img: natural3, name: "Mango Stick", path: "/pooja/mango-stick" },
  { id: 4, img: natural4, name: "Nel Pori", path: "/pooja/nel-pori" },
  { id: 5, img: natural5, name: "Arasan Kattai", path: "/pooja/arasan-kattai" },
];


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

const Pooja: React.FC = () => {

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

  const naturalslide = getSlides(natural, slidesPerView)


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
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "auto"
          }}
        >
          <h1 className="text-center text-white display-6">Pooja Product</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/" className='text-primary'>Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/" className='text-primary'>Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Pooja Product</li>
          </ol>
        </div>
        {/* Single Page Header End */}
      </>
      <Container>
        <div data-aos="fade-up">
          <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
            <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
              POOJA PRODUCT EXPORT FROM INDIA
            </h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="container-fluid">
            <p className="text-justify p-3 mx-auto" id='p-3' style={{ width: "100%", textAlign: "center" }}>
              Koogul Industries Pooja Products encompass a range of meticulously crafted items that are essential for performing rituals and ceremonies. These products are designed to enhance the spiritual experience and create an atmosphere of devotion and reverence. Our Pooja Products offer a wide variety of items, including ghee diya, sambrani cups, chandan tika, camphor, kapoor, hawan samagri, puja oils, and more.</p>
          </div>
        </div>
      </Container>
      <div className='bg-light p-5 rounded'>
        <h2 className='text-start mb-4' data-aos="fade-up">Special Pooja Kit</h2>
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
        <h2 className='mt-5 mb-5' data-aos="fade-up">Brass Pooja Product</h2>
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
        <h2 className='mt-5 mb-5' data-aos="fade-up">Spiritual and Religious</h2>
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
        <h2 className='mt-5 mb-5' data-aos="fade-up">Medicinal and Herbal</h2>
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
        <h2 className='mt-5 mb-5' data-aos="fade-up">Agricultural and Natural</h2>
        <Carousel data-aos="fade-up" interval={null} controls indicators={false} wrap={true}>
          {naturalslide.map((group, index) => (
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
                        <h5 className='py-3'>
                          <Link to={data.path}>{data.name}</Link>
                        </h5>
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

export default Pooja