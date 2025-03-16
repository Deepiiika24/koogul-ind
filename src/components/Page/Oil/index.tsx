import type React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { Container } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import leaf1 from '../../../assets/images/oil/peanut.png'
import leaf2 from '../../../assets/images/oil/ghee.png'
import leaf3 from '../../../assets/images/oil/palm.png'
import leaf4 from '../../../assets/images/oil/sunflower.png'
import leaf5 from '../../../assets/images/oil/yellu.png'
import leaf6 from '../../../assets/images/oil/coconut.png'
import leaf7 from '../../../assets/images/oil/mustard.png'
import oil from '../../../assets/images/oil/oil-banner.jpg'
import { Link } from 'react-router-dom';

interface LeafItem {
  id: number;
  name: string;
  image: string;
  path: string;
}

const leafData: LeafItem[] = [
  { id: 1, name: "Peanut Oil", image: leaf1, path: "/Oil/Peanut-oil" },
  { id: 2, name: "Ghee", image: leaf2, path: "/Oil/Ghee" },
  { id: 3, name: "Palm oil", image: leaf3, path: "/Oil/Palm-oil" },
  { id: 4, name: "Sun flower Oil", image: leaf4, path: "/Oil/Sunflower-oil" },
  { id: 5, name: "Sesame Oil", image: leaf5, path: "/Oil/Sesame-oil" },
  { id: 6, name: "Coconut Oil", image: leaf6, path: "/Oil/Coconut-oil" },
  { id: 7, name: "Mustard Oil", image: leaf7, path: "/Oil/Mustard-oil" },
];

const Oil: React.FC = () => {

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
            backgroundImage: `url(${oil}`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "auto"
          }}
        >
          <h1 data-aos="fade-up" className="text-center text-white display-6">Oil</h1>
          <ol data-aos="fade-up" className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/index.html#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Oil</li>
          </ol>
        </div>
        {/* Single Page Header End */}
      </>
      <Container>
        <div data-aos="fade-up">
          <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
            <h1 className="display-4" style={{ fontSize: "1.5rem", paddingTop: "90px" }}>
              OIL EXPORTER FROM INDIA
            </h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="container-fluid">
            <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
              Cooking oil is a versatile kitchen staple used for frying, sautéing, roasting, baking, and as a base for dressings and marinades. It enhances the flavor and texture of food while providing essential fats needed for a balanced diet. Different types of cooking oils, such as olive, sunflower, coconut, and canola oil, have unique properties, including varying smoke points and health benefits, making them suitable for different cooking methods. Additionally, cooking oils are also used in food preservation, as they help to extend shelf life and maintain moisture in various dishes.</p>
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
                          height: "230px",
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
                      Oil
                    </div>
                    <div className="p-4 border  border-top-0 rounded-bottom text-center">
                      <h5 className="mt-3 text-center">
                        <a className="text-decoration-none text-dark">
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


export default Oil
