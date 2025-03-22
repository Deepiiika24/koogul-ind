
import type React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import sendEmail from '../../emailService'
import { useRef, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formRef.current) {
      sendEmail(formRef.current);
      formRef.current.reset();
    }
  };

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
      <>
        {/* Single Page Header start */}
        <div className="container-fluid py-5"
          style={{
            marginTop: "152px",
            position: "relative",
            backgroundImage: `url(https://img.freepik.com/premium-photo/contact-us-wood-cube-symbol-chat-mail-address-mobile-phone-website-page-contact-us-symbols-different-communication-channels-customer_256259-2855.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "auto"
          }}
        >
          <h1 data-aos="fade-up" className="text-center text-white display-6">Contact</h1>
          <ol data-aos="fade-up" className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/" className='text-primary'>Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="" className='text-primary'>Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Contact</li>
          </ol>
        </div>
        {/* Single Page Header End */}

        {/* Contact Start */}
        <div className="container-fluid contact py-5">
          <div className="container py-5" id='py-5'>
            <div className="p-5 bg-light rounded" id='p-5'>
              <div className="row g-4">
                <div className="col-12">
                  <div className="mx-auto" style={{ maxWidth: 700, textAlign:"justify" }}>
                    <h1 className="text-primary text-center" data-aos="fade-up">Get in touch</h1>
                    <p className="mb-4" data-aos="fade-up">
                      We’d love to hear from you! Whether you have a question about our products, orders, delivery, or anything else, our team is ready to help.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="h-100 rounded">
                    <iframe
                      className="rounded w-100"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12577.829405082637!2d145.18292726064897!3d-37.98979144669541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6138b0956e77d%3A0x7ec2b49b0f1ec698!2s1%2F93B%20Cheltenham%20Rd%2C%20Dandenong%20VIC%203175%2C%20Australia!5e0!3m2!1sen!2sin!4v1741263082598!5m2!1sen!2sin"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <form action="" className="" ref={formRef} onSubmit={handleSubmit} data-aos-duration="1000">
                    <input
                      data-aos="fade-up"
                      type="text"
                      className="w-100 form-control border-0 py-3 mb-4"
                      placeholder="Your Name"
                      name="user_name"
                    />
                    <input
                      data-aos="fade-up"
                      type="email"
                      className="w-100 form-control border-0 py-3 mb-4"
                      placeholder="Enter Your Email"
                      name="user_email"
                    />
                    <textarea
                      data-aos="fade-up"
                      className="w-100 form-control border-0 mb-4"
                      rows={5}
                      cols={10}
                      placeholder="Your Message"
                      defaultValue=""
                      name="message"
                    />
                    <button
                      data-aos="fade-up"
                      className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex p-4 rounded mb-4 bg-white" data-aos="fade-up">
                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                    <div>
                      <p className="mb-2">Level 1, 93B Cheltenham Road, Dandenong, Victoria 3175, Australia</p>
                    </div>
                  </div>
                  <div className="d-flex p-4 rounded mb-4 bg-white" data-aos="fade-up">
                    <i className="fas fa-envelope fa-2x text-primary me-4" />
                    <div>
                      <p className="mb-2">koogulinfo@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-flex p-4 rounded bg-white" data-aos="fade-up">
                    <i className="fa fa-phone fa-2x text-primary me-4" />
                    <div>
                      <p className="mb-2">+91 6374 980 568</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </>

      <Footer />
    </>
  )
}


export default Contact
