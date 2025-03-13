import type React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import FruitsShop from './FruitsShop'
import SinglePageHeader from './SinglePageHeader'


const Shop: React.FC = () => (
  <>
    <Header />
    <SinglePageHeader />
    <FruitsShop />
    <Footer />
  </>
)


export default Shop
