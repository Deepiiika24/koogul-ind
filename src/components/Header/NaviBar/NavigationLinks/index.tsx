import type React from "react"
import { Nav, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NavigationLinks: React.FC<{ activeLink: string }> = ({ activeLink }) => {
  const navigate = useNavigate()

  return (
    <Nav className="mx-auto">
      <Nav.Link onClick={() => navigate("/")} active={activeLink === ""}>
        Home
      </Nav.Link>
      <Nav.Link onClick={() => navigate("/about-us")} active={activeLink === "about-us"}>
        About Us
      </Nav.Link>
      <Nav.Link onClick={() => navigate("/certificates")} active={activeLink === "certificates"}>
        Certificates
      </Nav.Link>
      <NavDropdown title="Product" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => navigate("/Rice")}>
          Rice
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/spices")}>
          Spices
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/Snacks")}>
          Snacks
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/Flour")}>
          Flour
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/pooja")}>
          Pooja Product
        </NavDropdown.Item>

        <NavDropdown.Item onClick={() => navigate("/Flower")}>
          Flower
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/Leaf")}>
          Leaf
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/Vegetables")}>
          Vegetables
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/Pickle")}>
          Pickle
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/Oil")}>
          Oil
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/Beeda")}>
          Paan Beeda
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/Masala")}>
          Masala
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={() => navigate("/contact-us")} active={activeLink === "contact-us"}>
        Contact Us
      </Nav.Link>
    </Nav>
  )
}

export default NavigationLinks
