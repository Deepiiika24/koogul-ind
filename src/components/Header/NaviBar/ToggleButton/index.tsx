import type React from 'react'
import { Navbar } from 'react-bootstrap'

const ToggleButton: React.FC = () => (
  <Navbar.Toggle aria-controls="navbarCollapse">
    <i className="fa fa-bars py-2 px-3 text-primary" />
  </Navbar.Toggle>
)
export default ToggleButton
