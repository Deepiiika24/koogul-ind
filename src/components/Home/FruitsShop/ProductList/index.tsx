import type React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

const ProductList: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col lg={4} className="text-start">
          <h1>Our Organic Products</h1>
        </Col>
        <Col lg={8} className="text-end">
          <Nav className="d-inline-flex text-center mb-5">
            <Nav.Item>
              <Nav.Link
                href="#tab-1"
                className="d-flex m-2 py-2 bg-light rounded-pill active"
              >
                All Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#tab-2"
                className="d-flex py-2 m-2 bg-light rounded-pill"
              >
                Vegetables
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#tab-3"
                className="d-flex m-2 py-2 bg-light rounded-pill"
              >
                Fruits
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#tab-4"
                className="d-flex m-2 py-2 bg-light rounded-pill"
              >
                Bread
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#tab-5"
                className="d-flex m-2 py-2 bg-light rounded-pill"
              >
                Meat
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductList
