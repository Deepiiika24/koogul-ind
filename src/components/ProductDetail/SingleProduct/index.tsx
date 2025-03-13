import type React from 'react'
import Right from './Right'
import Left from './Left'

const SingleProduct: React.FC = () => (
  <div className="container-fluid py-5 mt-5">
    <div className="container py-5">
      <div className="row g-4 mb-5">
        <Left />
        <Right />
      </div>
    </div>
  </div>
)

export default SingleProduct
