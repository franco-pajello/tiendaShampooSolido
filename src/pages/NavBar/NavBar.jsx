import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';


import IconCart from "../../contenedores/CartWidgetContenedor/CartWidget"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button";
const NavBar = () => {



  return (<>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="text-decoration-none"><Navbar.Brand>Curie cosmética</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to="/" className="text-decoration-none text-light">Home</Link></Nav.Link>
            <NavDropdown title="Menú" id="collasible-nav-dropdown">
              <Link to="/categoria/shampoo" className="text-decoration-none text-black"><Button variant="light" className="w-100">Shampoo</Button></Link>
              <Link to="/categoria/acondicionador"><Button variant="light" className="w-100">Acondicionador</Button> </Link>
              <Link to="/categoria/otro"><Button variant="light" className="w-100">Otro</Button></Link>
              <NavDropdown.Divider />
              <Link to="/carrito"><Button variant="light" className="w-100">Carrito</Button></Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <Link to="/carrito" className="text-light" ><IconCart /></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )

}
export default NavBar
