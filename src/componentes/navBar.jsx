import { NavDropdown, Container, Navbar, Nav  } from "react-bootstrap"
/* import { Container } from "react-bootstrap/Container"
import { Navbar } from "react-bootstrap/Navbar"
import { Nav } from "react-bootstrap/Nav"
 */
const NavBar = () =>{
return(
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Curie cosmética</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <NavDropdown title="Meú" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Ofertas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Compra mayorista</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">carrito</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Siguenos en instagram</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

}
export default NavBar