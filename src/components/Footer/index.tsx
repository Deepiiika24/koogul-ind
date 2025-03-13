import type React from 'react';
import { useEffect } from 'react'
import Copyright from './Copyright'
import payment from '../../assets/images/payment.png'
import logo1 from '../../assets/images/logo1.png'
const Footer: React.FC = () => {
  useEffect(() => {
    const backToTopButton = document.querySelector('.back-to-top') as HTMLElement

    const handleScroll = () => {

      if (window.scrollY > 300) {
        backToTopButton.style.display = 'block'
        backToTopButton.classList.add('fade-in')
        backToTopButton.classList.remove('fade-out')
      } else {
        backToTopButton.style.display = 'none'
        backToTopButton.classList.add('fade-out')
        backToTopButton.classList.remove('fade-in')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    const start = window.scrollY
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime()

    const scrollDuration = 1500 // duration in ms (1.5 seconds)

    const easeInOutExpo = (t: number): number => {
      // eslint-disable-next-line no-nested-ternary
      return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? 2 ** (20 * t - 10) / 2 : (2 - 2 ** (-20 * t + 10)) / 2
    }
    const scroll = () => {
      const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime()
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / scrollDuration, 1)
      const easedProgress = easeInOutExpo(progress)
      window.scrollTo(0, start * (1 - easedProgress))
      if (timeElapsed < scrollDuration) {
        requestAnimationFrame(scroll)
      }
    }

    requestAnimationFrame(scroll)
  }

  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div className="container py-5">
          <div
            className="pb-4 mb-4"
            style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}
          >
            <div className="row g-4">
              <div className="col-lg-3">
              <img 
      src={logo1} 
      className="img-fluid navbar-brand"  
      style={{ maxWidth: '120px', height: 'auto' }}  
      alt="Fruitables Logo"
    />
              </div>
              <div className="col-lg-6">
                {/* <div className="position-relative mx-auto">
                  <input
                    className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                    type="email"
                    placeholder="Your Email"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                    style={{ top: 0, right: 0 }}
                  >
                    Subscribe Now
                  </button>
                </div> */}
              </div>
              <div className="col-lg-3 ">
                <div className="d-flex justify-content-end pt-3">
                  <a
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href="https://twitter.com"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href="https://facebook.com"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href="https://youtube.com"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-md-square rounded-circle"
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Why People Like us!</h4>
                <p className="mb-4">
                At Koogul Industries, we prioritize quality, innovation, and customer satisfaction. Our commitment to excellence and sustainability makes us a trusted choice across industries.
                </p>
                {/* <a
                  href="/"
                  className="btn border-secondary py-2 px-4 rounded-pill text-primary"
                >
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Shop Info</h4>
                <a className="btn-link" href="/">Home</a>
                <a className="btn-link" href="/">About Us</a>
                <a className="btn-link" href="/">Certificates</a>
                <a className="btn-link" href="/">Products</a>
                <a className="btn-link" href="/">Contact Us</a>
                {/* <a className="btn-link" href="/">FAQs &amp; Help</a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Branches</h4>
                <a className="btn-link" href="/">India</a>
                <a className="btn-link" href="/"> Australia</a>
                {/* <a className="btn-link" href="/">Shopping Cart</a>
                <a className="btn-link" href="/">Wishlist</a>
                <a className="btn-link" href="/">Order History</a>
                <a className="btn-link" href="/">International Orders</a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Contact</h4>
                <p>Address: No:11, M.R.K Nagar, 50feet Main Road, Kolapakkam, Chennai-600128, Tamil Nadu, India</p>
                <p>Email: koogulinfo@gmail.com</p>
                <p>Phone: +91 6374980568</p>
                <p>Payment Accepted</p>
                {/* <img src={payment} className="img-fluid" alt="Payment Methods" /> */}
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* Footer End */}
      <Copyright />
      {/* Back to Top */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fa fa-arrow-up" />
      </a>
    </>
  )
}

export default Footer
