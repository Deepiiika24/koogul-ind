import type React from 'react'
import { useState } from 'react'
import FruitItem from '../FruitItem'
import TabPane from '../TabPane'

const TabPanedFruits: React.FC = () => {
  const [fruits] = useState([
    {
      imgSrc: 'img/fruite-item-5.jpg',
      name: 'Grapes',
      description: 'Grapes are berries, growing in clusters of 15 to 300, and can be crimson, black, dark blue, yellow, green, orange, and pink.',
      price: 4.99,
    },
    {
      imgSrc: 'img/fruite-item-2.jpg',
      name: 'Raspberries',
      description: 'Raspberries are a rich source of antioxidants, vitamins, and fiber. They may have health benefits including reducing inflammation and protecting against disease.',
      price: 3.99,
    },
    // Add more fruits as needed
  ])
  const [fruitsTab2] = useState([
    {
      imgSrc: 'img/fruite-item-3.jpg',
      name: 'Banana',
      description: 'Bananas are one of the most widely consumed fruits in the world. They are a good source of fiber, potassium, vitamin B6, vitamin C, and various antioxidants and phytonutrients.',
      price: 1.99,
    },
    {
      imgSrc: 'img/fruite-item-4.jpg',
      name: 'Apricots',
      description: 'Apricots are stone fruits that are closely related to peaches and plums. They are rich in vitamins, fiber, and antioxidants, and are especially high in vitamin A and C.',
      price: 2.49,
    },
    // Add more fruits for Tab 2 as needed
  ])
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#tab-1">
            Tab 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Tab 2
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <TabPane id="tab-1" active>
          {fruits.map((fruit, index) => (
            <FruitItem
              key={index}
              imgSrc={fruit.imgSrc}
              name={fruit.name}
              description={fruit.description}
              price={fruit.price}
            />
          ))}
        </TabPane>
        <TabPane id="tab-2" active={false}>
          {fruitsTab2.map((fruit, index) => (
            <FruitItem
              key={index}
              imgSrc={fruit.imgSrc}
              name={fruit.name}
              description={fruit.description}
              price={fruit.price}
            />
          ))}
        </TabPane>
      </div>
    </div>
  )
}
export default TabPanedFruits
