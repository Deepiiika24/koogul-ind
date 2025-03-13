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
    <div className="container-fluid Flour-banner py-5">
      <div data-aos="fade-up">
      <h1 className="text-center text-white display-6">Rice</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="/index.html#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/public#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Rice</li>
      </ol>
    </div>
    </div>
  )
}
export default SinglePageHeader
