import type React from 'react'

const Copyright: React.FC = () => {

  return (
    <>
      {/* Copyright Start */}
      <div className="container-fluid copyright bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-light">
                <a href="/public#">
                  <i className="fas fa-copyright text-light me-2" />
                  Your Site Name
                </a>
                , All right reserved.
              </span>
            </div>
            {/* <div className="col-md-6 my-auto text-center text-md-end text-white">
               Designed By
              {' '}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
              {' '}
              Distributed By
              {' '}
              <a className="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </a>
            // </div> */}
          </div>
        </div>
      </div>
      {/* Copyright End */}
    </>


  )
}

export default Copyright
