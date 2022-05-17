import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"


import IconCart from "../CartWidgetContenedor/CartWidget"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Curie cosmética</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <NavDropdown title="Meú" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ofertas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Compra mayorista</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Carrito</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Nosotros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <IconCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
export default NavBar
