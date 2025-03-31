import type React from "react"
import AOS from "aos";
import "aos/dist/aos.css";
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
      backgroundImage: `url(https://img.freepik.com/premium-photo/thai-jasmine-rice-white-rice-wooden-bowl_184421-101.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      height: "auto"
    }}
    >
      <div data-aos="fade-up">
        <h1 className="text-center text-white display-6">Rice</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/" className="text-primary">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/" className="text-primary">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Rice</li>
        </ol>
      </div>
    </div>
  )
}
export default SinglePageHeader
