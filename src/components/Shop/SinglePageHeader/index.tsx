import type React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import certificate1 from '../../../assets/images/apeda.jpg'
import certificate2 from '../../../assets/images/fssai.jpg'
import certificate3 from '../../../assets/images/importe.jpg'
import certificate4 from '../../../assets/images/CDB.jpg'
const SinglePageHeader: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing

    });
  }, []);

  return (
    <div>
      <div className="container-fluid page-banner py-5">
        <h1 className="text-center text-white display-6">Certificates</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Certificates</li>
        </ol>
      </div>

      <div className='container'>
        <div data-aos="fade-up">
          <div className='text-center mx-auto mb-5' style={{ maxWidth: "700px" }}>
            <h1 className="display-4" style={{ fontSize: "2.5rem", paddingTop:"90px" }}>
            Certifications
            </h1>
          </div>

          <div data-aos="fade-up">
            <div className="container-fluid">
              <p className="text-justify p-3 mx-auto" style={{ width: "90%", textAlign: "center" }}>
              When it comes to food handling and export, maintaining high levels of hygiene, quality and safety are crucial. This is why, at Koogul Industries, we meet international food safety and quality standards through various quality checks and following strict protocols throughout the process. This has allowed us to be accredited to a number of quality and food safety certifications. </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
      <div data-aos="fade-up">
  <div className="row g-4"> 
    <div className="col-md-4">
      <div className="text-center">
        <img
          src={certificate1}
          className="img-fluid rounded"
          alt=""
          style={{ width: "70%", height: "auto", boxShadow:"10px 4px 8px rgba(0, 0, 0, 0.2)"}}
        />
        <div className="py-2">
          <a  className="h5 text-primary">
          apeda Licence
          </a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="text-center">
        <img
          src={certificate2}
          className="img-fluid rounded"
          alt="" style={{ width: "70%", height: "auto", boxShadow:"10px 4px 8px rgba(0, 0, 0, 0.2)" }}
        />
        <div className="py-2">
          <a  className="h5 text-primary">
          fssai Licence
          </a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="text-center">
        <img
          src={certificate3}
          className="img-fluid rounded"
          alt="" style={{ width: "70%", height: "auto",boxShadow:"10px 4px 8px rgba(0, 0, 0, 0.2)" }}
        />
        <div className="py-2">
          <a  className="h5 text-primary">
          IEC Certificate
          </a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="text-center">
        <img
          src={certificate4}
          className="img-fluid rounded"
          alt="" style={{ width: "70%", height: "auto", boxShadow:"10px 4px 8px rgba(0, 0, 0, 0.2)" }}
        />
        <div className="py-2">
          <a className="h5 text-primary">
          Coconut Licence

          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

    </div>
  );
};

export default SinglePageHeader;
