import type React from 'react'
import featur1 from '../../../../assets/images/featur-1.jpg'
import featur2 from '../../../../assets/images/featur-2.jpg'
import featur3 from '../../../../assets/images/featur-3.jpg'
import vegetableitem4 from '../../../../assets/images/vegetable-item-4.jpg'
import vegetableitem5 from '../../../../assets/images/vegetable-item-5.jpg'
import vegetableitem6 from '../../../../assets/images/vegetable-item-6.jpg'
import bannerfruits from '../../../../assets/images/banner-fruits.jpg'

const Right: React.FC = () => {
  return (
    <div className="col-lg-4 col-xl-3">
      <div className="row g-4 fruite">
        <div className="col-lg-12">
          <div className="input-group w-100 mx-auto d-flex mb-4">
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
                <i className="fa fa-search" />
              </span>
          </div>
          <div className="mb-4">
            <h4>Categories</h4>
            <ul className="list-unstyled fruite-categorie">
              <li>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="/#">
                    <i className="fas fa-apple-alt me-2" />
                    Apples
                  </a>
                  <span>(3)</span>
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="/#">
                    <i className="fas fa-apple-alt me-2" />
                    Oranges
                  </a>
                  <span>(5)</span>
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="/#">
                    <i className="fas fa-apple-alt me-2" />
                    Strawbery
                  </a>
                  <span>(2)</span>
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="/#">
                    <i className="fas fa-apple-alt me-2" />
                    Banana
                  </a>
                  <span>(8)</span>
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="/#">
                    <i className="fas fa-apple-alt me-2" />
                    Pumpkin
                  </a>
                  <span>(5)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12">
          <h4 className="mb-4">Featured products</h4>
          <div className="d-flex align-items-center justify-content-start">
            <div className="rounded" style={{ width: 100, height: 100 }}>
              <img
                src={featur1}
                className="img-fluid rounded"
                alt="Big Banana"
              />
            </div>
            <div>
              <h6 className="mb-2">Big Banana</h6>
              <div className="d-flex mb-2">
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star" />
              </div>
              <div className="d-flex mb-2">
                <h5 className="fw-bold me-2">2.99 $</h5>
                <h5 className="text-danger text-decoration-line-through">
                  4.11 $
                </h5>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-start">
            <div className="rounded" style={{ width: 100, height: 100 }}>
              <img
                src={featur2}
                className="img-fluid rounded"
                alt="Big Banana"
              />
            </div>
            <div>
              <h6 className="mb-2">Big Banana</h6>
              <div className="d-flex mb-2">
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star" />
              </div>
              <div className="d-flex mb-2">
                <h5 className="fw-bold me-2">2.99 $</h5>
                <h5 className="text-danger text-decoration-line-through">
                  4.11 $
                </h5>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-start">
            <div className="rounded" style={{ width: 100, height: 100 }}>
              <img
                src={featur3}
                className="img-fluid rounded"
                alt="Big Banana"
              />
            </div>
            <div>
              <h6 className="mb-2">Big Banana</h6>
              <div className="d-flex mb-2">
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star" />
              </div>
              <div className="d-flex mb-2">
                <h5 className="fw-bold me-2">2.99 $</h5>
                <h5 className="text-danger text-decoration-line-through">
                  4.11 $
                </h5>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-start">
            <div className="rounded me-4" style={{ width: 100, height: 100 }}>
              <img
                src={vegetableitem4}
                className="img-fluid rounded"
                alt=""
              />
            </div>
            <div>
              <h6 className="mb-2">Big Banana</h6>
              <div className="d-flex mb-2">
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star" />
              </div>
              <div className="d-flex mb-2">
                <h5 className="fw-bold me-2">2.99 $</h5>
                <h5 className="text-danger text-decoration-line-through">
                  4.11 $
                </h5>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-start">
            <div className="rounded me-4" style={{ width: 100, height: 100 }}>
              <img
                src={vegetableitem5}
                className="img-fluid rounded"
                alt=""
              />
            </div>
            <div>
              <h6 className="mb-2">Big Banana</h6>
              <div className="d-flex mb-2">
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star" />
              </div>
              <div className="d-flex mb-2">
                <h5 className="fw-bold me-2">2.99 $</h5>
                <h5 className="text-danger text-decoration-line-through">
                  4.11 $
                </h5>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-start">
            <div className="rounded me-4" style={{ width: 100, height: 100 }}>
              <img
                src={vegetableitem6}
                className="img-fluid rounded"
                alt="Big Banana"
              />
            </div>
            <div>
              <h6 className="mb-2">Big Banana</h6>
              <div className="d-flex mb-2">
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star" />
              </div>
              <div className="d-flex mb-2">
                <h5 className="fw-bold me-2">2.99 $</h5>
                <h5 className="text-danger text-decoration-line-through">
                  4.11 $
                </h5>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center my-4">
            <a
              href="/#"
              className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
            >
              Vew More
            </a>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="position-relative">
            <img
              src={bannerfruits}
              className="img-fluid w-100 rounded"
              alt=""
            />
            <div
              className="position-absolute"
              style={{ top: '50%', right: 10, transform: 'translateY(-50%)' }}
            >
              <h3 className="text-secondary fw-bold">
                Fresh <br /> Fruits <br /> Banner
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Right
