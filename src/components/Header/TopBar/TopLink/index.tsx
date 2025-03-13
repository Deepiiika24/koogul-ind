import type React from 'react'

const TopLink: React.FC = () =>{
  const menu = [
    {
      name: ' Customer Support',
      link: '/index.html',
      target: '/',
    },
    {
      name: ' Delivery Information',
      link: '/index.html',
      target: '/',
    },
    {
      name: 'Seasonal Offers',
      link: '/index.html',
      target: ' ',
    },
  ]

  return (
    <div className="top-link pe-2">
      {menu.map((v, index) => ( // Adding unique key prop
        <a key={index} href={v.link} className="text-white">
          <small className="text-white mx-2">{v.name}</small>
          {v.target}
        </a>
      ))}
    </div>
  )
}

export default TopLink
