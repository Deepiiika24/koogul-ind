import type React from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import banner from '../../../../assets/images/snacks/snacks-banner.png'
import { useEffect } from "react";
const SinglePageHeader: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing

    });
  }, []);
  return (
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
        <div data-aos="fade-up">
      <h1 className="text-center text-white display-6">Snacks</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="/index.html#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/public#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Snacks</li>
      </ol>
    </div>
    </div>
  )
}
export default SinglePageHeader
