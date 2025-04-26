import type React from 'react'
import { useEffect, useState } from 'react';
import Header from '../../Header'
import Footer from '../../Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from "react-bootstrap/Carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from 'react-router-dom';
import { getData, postData } from '../../../WebService/API';
import { toast } from 'react-toastify';

const userId = Number(localStorage.getItem('userId') || 0);

interface flowerItem {
  id: number;
  name: string;
  price: number;
  full_image_url: string;
  quantity?: number;
}

const getSlidesPerView = (width: number) => {
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
};

const getSlides = (arr: flowerItem[], perSlide: number) => {
  let slides: flowerItem[][] = [];
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
  const [flowerHeads, setFlowerHeads] = useState<flowerItem[]>([]);
  const [garlands, setGarlands] = useState<flowerItem[]>([]);
  const [petals, setPetals] = useState<flowerItem[]>([]);
  const [strings, setStrings] = useState<flowerItem[]>([]);
  const [loading, setLoading] = useState({
    flowerHeads: true,
    garlands: true,
    petals: true,
    strings: true
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Fetch all flower data
    const fetchFlowerData = async () => {
      try {
        // Fetch flower heads
        const headsResponse = await getData('flower/flower-head');
        setFlowerHeads(headsResponse.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          full_image_url: item.full_image_url,
          quantity: 1,
          path: `/flower/${item.slug || item.name.toLowerCase().replace(/\s+/g, '-')}`
        })));
        setLoading(prev => ({ ...prev, flowerHeads: false }));

        // Fetch garlands
        const garlandsResponse = await getData('flower/flower-garland');
        setGarlands(garlandsResponse.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          full_image_url: item.full_image_url,
          quantity: 1,
          path: `/flower/${item.slug || item.name.toLowerCase().replace(/\s+/g, '-')}`
        })));
        setLoading(prev => ({ ...prev, garlands: false }));

        // Fetch petals
        const petalsResponse = await getData('flower/flower-petals');
        setPetals(petalsResponse.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          full_image_url: item.full_image_url,
          quantity: 1,
          path: `/flower/${item.slug || item.name.toLowerCase().replace(/\s+/g, '-')}`
        })));
        setLoading(prev => ({ ...prev, petals: false }));

        // Fetch strings
        const stringsResponse = await getData('flower/flower-string');
        setStrings(stringsResponse.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          full_image_url: item.full_image_url,
          quantity: 1,
          path: `/flower/${item.slug || item.name.toLowerCase().replace(/\s+/g, '-')}`
        })));
        setLoading(prev => ({ ...prev, strings: false }));

      } catch (err) {
        setError("Failed to load flower data. Please try again later.");
        setLoading({
          flowerHeads: false,
          garlands: false,
          petals: false,
          strings: false
        });
        console.error("Error fetching flower data:", err);
      }
    };

    fetchFlowerData();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const flowerHeadSlides = getSlides(flowerHeads, slidesPerView);
  const garlandSlides = getSlides(garlands, slidesPerView);
  const petalSlides = getSlides(petals, slidesPerView);
  const stringSlides = getSlides(strings, slidesPerView);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
    });
  }, []);

  const handleAddToCart = async (data: flowerItem) => {
    debugger
    try {

      if (!userId || userId === 0) {
        toast.error("Please login to add items to cart");
        navigate('/LoginRegister');
        return;
      }

      const quantity = typeof data.quantity === 'number' && data.quantity > 0 
      ? data.quantity 
      : 1;

      const itemToSend = {
        userId,
        productId: data.id,
        name: data.name,
        price: data.price,
        quantity: quantity,
        imageUrl: data.full_image_url
      };

      const response = await postData("cart/add-to-cart", itemToSend);
      console.log("Response:", response)
      toast.success("Product Added to Cart");
    } catch (error) {
      console.error("Add to Cart failed:", error);
      toast.error("Something went wrong");
    }
  };

  if (error) {
    return (
      <>
        <Header />
        <div className="container-fluid py-5" style={{ marginTop: "102px" }}>
          <div className="alert alert-danger">{error}</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <>
        {/* Single Page Header start */}
        <div className="container-fluid py-5"
          style={{
            marginTop: "102px",
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
              Trusted Partner in Floriculture Exports
            </h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="container-fluid">
            <p className="text-justify p-3 mx-auto" id='p-3' style={{ width: "100%", textAlign: "justify" }}>
              Floriculture in India primarily means the cultivation of flowers or flower farming. Known for its rich diversity, India's floriculture sector thrives with a wide variety of flowers, making it a prominent player in the global flower market. At Koogul Industries, we take pride in being one of the leading exporters of exquisite flowers from India, ensuring that the beauty of Indian floriculture reaches every corner of the world.</p>
          </div>
        </div>
      </Container>

      <div className='bg-light p-5 rounded'>
        <h2 className='text-start mb-4' data-aos="fade-up">Flower Heads</h2>
        <Carousel data-aos="fade-up" interval={null} id='slider-items' controls indicators={false} wrap={true}>
          {flowerHeadSlides.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-3">
                {group.map((data, i) => (
                  <Col key={i} xs={12} sm={6} md={3} id='columns'>
                    <div className="rounded p-2">
                      <div className="card" style={{ height: 425 }}>
                        <img
                          src={data.full_image_url}
                          className="img-fluid w-100 rounded"
                          alt={`Slide ${index * 4 + i + 1}`}
                          style={{
                            height: "243px"
                          }}
                        />
                        <h5 className='py-3'><Link to={data.name}>{data.name}</Link></h5>
                        <div className="justify-content-center">
                          <p className="text-dark p-2 fs-5 fw-bold mb-0">${data.price}</p>
                          <a
                            // href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                            onClick={() => handleAddToCart(data)}
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        <h2 className='mt-5 mb-5' data-aos="fade-up">Flower Garlands</h2>
        <Carousel data-aos="fade-up" interval={null} id='slider-items' controls indicators={false} wrap={true}>
          {garlandSlides.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-3">
                {group.map((data, i) => (
                  <Col key={i} xs={12} sm={6} md={3} id='columns'>
                    <div className="rounded p-2">
                      <div className="card" style={{ height: 425 }}>
                        <img
                          src={data.full_image_url}
                          className="img-fluid w-100 rounded"
                          alt={`Slide ${index * 4 + i + 1}`}
                          style={{
                            height: "243px"
                          }}
                        />
                        <h5 className='py-3'><Link to={data.name}>{data.name}</Link></h5>
                        <div className="justify-content-center">
                          <p className="text-dark p-2 fs-5 fw-bold mb-0">${data.price}</p>
                          <a
                            // href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                            onClick={() => handleAddToCart(data)}
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        <h2 className='mt-5 mb-5' data-aos="fade-up">Flower Petals</h2>
        <Carousel data-aos="fade-up" interval={null} id='slider-items' controls indicators={false} wrap={true}>
          {petalSlides.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-3">
                {group.map((data, i) => (
                  <Col key={i} xs={12} sm={6} md={3} id='columns'>
                    <div className="rounded p-2">
                      <div className="card" style={{ height: 425 }}>
                        <img
                          src={data.full_image_url}
                          className="img-fluid w-100 rounded"
                          alt={`Slide ${index * 4 + i + 1}`}
                          style={{
                            height: "243px"
                          }}
                        />
                        <h5 className='py-3'><Link to={data.name}>{data.name}</Link></h5>
                        <div className="justify-content-center">
                          <p className="text-dark p-2 fs-5 fw-bold mb-0">${data.price}</p>
                          <a
                            // href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                            onClick={() => handleAddToCart(data)}
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        <h2 className='mt-5 mb-5' data-aos="fade-up">Flower String</h2>
        <Carousel data-aos="fade-up" interval={null} id='slider-items' controls indicators={false} wrap={true}>
          {stringSlides.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-3">
                {group.map((data, i) => (
                  <Col key={i} xs={12} sm={6} md={3} id='columns'>
                    <div className="rounded p-2">
                      <div className="card" style={{ height: 425 }}>
                        <img
                          src={data.full_image_url}
                          className="img-fluid w-100 rounded"
                          alt={`Slide ${index * 4 + i + 1}`}
                          style={{
                            height: "243px"
                          }}
                        />
                        <h5 className='py-3'><Link to={data.name}>{data.name}</Link></h5>
                        <div className="justify-content-center">
                          <p className="text-dark p-2 fs-5 fw-bold mb-0">${data.price}</p>
                          <a
                            // href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                            onClick={() => handleAddToCart(data)}
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                            Add to cart
                          </a>
                        </div>
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
