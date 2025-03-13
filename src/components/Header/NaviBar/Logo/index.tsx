import type React from 'react'
import { Navbar } from 'react-bootstrap'
import logo1 from '../../../../assets/images/logo1.png'

const Logo: React.FC = () => (
  <Navbar.Brand href="/index.html">
    <img 
      src={logo1} 
      className="img-fluid navbar-brand"  
      style={{ maxWidth: '120px', height: 'auto' }}  
      alt="Fruitables Logo"
    />
  </Navbar.Brand>
)

export default Logo

