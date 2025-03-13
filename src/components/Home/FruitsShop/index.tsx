import type React from 'react'
import ProductList from './ProductList'
import TabbedFruits from './TabbedFruits'

const FruitsShop: React.FC = () => {

  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          <ProductList />
          <div className="tab-content">
            <TabbedFruits />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FruitsShop
