import type React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { Container } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import leaf1 from '../../../assets/images/Leaf/Banana-leaf.jpg'
import leaf2 from '../../../assets/images/Leaf/Neem-leaf.jpg'
import leaf3 from '../../../assets/images/Leaf/Ashoka-leaf.jpg'
import leaf4 from '../../../assets/images/Leaf/Mango-leaf.jpg'
import leaf5 from '../../../assets/images/Leaf/Betel-leaf.jpg'
import leaf6 from '../../../assets/images/Leaf/Teak-leaf.jpg'
import leaf7 from '../../../assets/images/Leaf/Eucalyptus-leaf.jpg'
import leaf8 from '../../../assets/images/Leaf/Palm-leaf.jpg'
import leaf9 from '../../../assets/images/Leaf/Tulsi-leaf.jpg'
import leaf10 from '../../../assets/images/Leaf/Bamboo-leaf.jpg'
import leaf11 from '../../../assets/images/Leaf/Guava-leaf.jpg'
import leaf12 from '../../../assets/images/Leaf/Fig-leaf.jpg'
import leaf13 from '../../../assets/images/Leaf/Moringa-leaf.jpg'
import leaf14 from '../../../assets/images/Leaf/Toran-leaf.jpg'
import { Link } from 'react-router-dom';

interface LeafItem {
  id: number;
  name: string;
  image: string;
  path: string;
}

const leafData: LeafItem[] = [
  { id: 1, name: "Banana Leaves", image: leaf1, path: "/Leaf/banana-leaf" },
  { id: 2, name: "Neem Leaves", image: leaf2, path: "/Leaf/neem-leaf" },
  { id: 3, name: "Ashoka Leaves", image: leaf3, path: "/Leaf/ashoka-leaf" },
  { id: 4, name: "Mango Leaves", image: leaf4, path: "/Leaf/mango-leaf" },
  { id: 5, name: "Betel Leaves", image: leaf5, path: "/Leaf/betel-leaf" },
  { id: 6, name: "Teak Leaves", image: leaf6, path: "/Leaf/teak-leaf" },
  { id: 7, name: "Eucalyptus Leaves", image: leaf7, path: "/Leaf/eucalyptus-leaf" },
  { id: 8, name: "Palm Leaves", image: leaf8, path: "/Leaf/palm-leaf" },
  { id: 9, name: "Tulsi Leaves", image: leaf9, path: "/Leaf/tulsi-leaf" },
  { id: 10, name: "Bamboo Leaves", image: leaf10, path: "/Leaf/bamboo-leaf" },
  { id: 11, name: "Guava Leaves", image: leaf11, path: "/Leaf/guava-leaf" },
  { id: 12, name: "Fig Leaves", image: leaf12, path: "/Leaf/fig-leaf" },
  { id: 13, name: "Moringa Leaves", image: leaf13, path: "/Leaf/moringa-leaf" },
  { id: 14, name: "Toran", image: leaf14, path: "/Leaf/toran" }
];

const Leaf: React.FC = () => {

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
            backgroundImage: `url(src/assets/images/Leaf/leaf-banner.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "auto"
          }}
        >
          <h1 data-aos="fade-up" className="text-center text-white display-6">Leaves</h1>
          <ol data-aos="fade-up" className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/" className='text-primary'>Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/" className='text-primary'>Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Leaves</li>
          </ol>
        </div>
        {/* Single Page Header End */}
      </>
      <Container>
        <div data-aos="fade-up">
          <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
            <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
              Exporting Premium Quality Leaves for all your needs
            </h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="container-fluid">
            <p className="text-justify p-3 mx-auto" id='p-3' style={{ width: "100%", textAlign: "justify" }}>
              At Koogul Industries, we pride ourselves on providing a diverse range of premium quality leaves to meet all your culinary, decorative, and ceremonial needs. Our leaves are handpicked, ensuring the utmost freshness and quality with every shipment. We cater to both large-scale commercial orders and individual customer requests, making us your trusted partner in leaf export.</p>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="bg-light p-5 rounded">
            <div className="row g-4 justify-content-center">
              {leafData.map((data) => (
                <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div
                    className="rounded position-relative fruite-item"
                    style={{
                      overflow: "hidden",
                      transition: "box-shadow 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 8px 26px rgba(0, 0, 0, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <div className="fruite-img overflow-hidden">
                      <img
                        src={data.image}
                        className="img-fluid w-100 rounded-top"
                        alt={data.name}
                        style={{
                          transition: "transform 0.4s ease",
                          height: "180px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </div>
                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-0 start-0 m-2">
                      Leaf
                    </div>
                    <div className="p-4 border border-primary border-top-0 rounded-bottom text-center">
                      <h5 className="mt-3 text-center">
                        <a href="/" className="text-decoration-none text-dark">
                          <Link to={data.path}>
                            {data.name}
                          </Link>
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}


export default Leaf
