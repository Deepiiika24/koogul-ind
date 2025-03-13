import type React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Hero from './Hero'
import FeaturesSection from './FeaturesSection'
import Features from './Featurs'
import BestsalerProduct from '../BestsalerProduct'
import Fact from './Fact'
// import FruitsShop from './FruitsShop'
// import Tastimonial from './Tastimonial'

const Home: React.FC = () => (
  <>
    <Header />
    <Hero />
    <FeaturesSection />
    {/*<FruitsShop />*/}
    <Features />
    <BestsalerProduct />
    <Fact />
    {/*<Tastimonial />*/}
    <Footer />
  </>
)


export default Home
