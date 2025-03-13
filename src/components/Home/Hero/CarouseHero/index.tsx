import type React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import hero1 from '../../../../assets/images/hero1.png'
import hero2 from '../../../../assets/images/hero2.jpg'
import hero3 from '../../../../assets/images/hero3.jpg'
const CarouselHero: React.FC = () => (
  <Carousel id="carouselId" slide className="position-relative">
    <Carousel.Item className="rounded">
      <img
        srcSet=""
        src={hero1}
        className="img-fluid w-100 h-100 bg-secondary rounded"
        alt="First slide"
      />
      <a href="/#" className="btn px-4 py-2 text-white rounded">
      Vegetables
      </a>
    </Carousel.Item>
    <Carousel.Item className="rounded">
      <img
        src={hero2}
        className="img-fluid w-100 h-100 rounded"
        alt="Second slide"
      />
      <a href="/#" className="btn px-4 py-2 text-white rounded">
       Spices
      </a>
    </Carousel.Item>
    <Carousel.Item className="rounded">
      <img
        src={hero3}
        className="img-fluid w-100 h-100 rounded"
        alt="Second slide"
      />
      <a href="/#" className="btn px-4 py-2 text-white rounded">
       Rice
      </a>
    </Carousel.Item>
  </Carousel>
)

export default CarouselHero
