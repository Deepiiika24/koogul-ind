import type React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import SinglePageHeader from './SinglePageHeader'
import SingleProduct from './SingleProduct'


const ProductDetail: React.FC = () => {

  return (
    <>
      <Header />
      <SinglePageHeader />
      <SingleProduct />
      <Footer />
    </>
  )
}

export default ProductDetail
