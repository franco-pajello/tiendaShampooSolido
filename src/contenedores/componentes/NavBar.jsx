import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"


import IconCart from "../CartWidgetContenedor/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="text-decoration-none"><Navbar.Brand>Curie cosmética</Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none"><Nav.Link>Home</Nav.Link></Link>
            <NavDropdown title="Menú" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shampoo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Acondicionador</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Carrito</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Nosotros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
             <Link to="/carrito" className="text-light" ><IconCart/></Link> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
export default NavBar
