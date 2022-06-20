import { Link } from "react-router-dom"
import { useContext } from "react";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button";

import { CarritoContexto } from "../../contenedores/Context/CarritoContexto";
import IconoCarrito from "../../contenedores/LogoCarrito/LogoCarrito"



const BarraDeNavegacion = () => {

  const { cantidadTotalEnIcono } = useContext(CarritoContexto)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Link to="/" className="text-decoration-none">

          <Navbar.Brand>
            Curie cosmética
          </Navbar.Brand>

        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">

            <NavDropdown title="Menú" id="collasible-nav-dropdown">

              <Link to="/categoria/shampoo" className="text-decoration-none text-black">

                <Button variant="light" className="w-100">
                  Shampoo
                </Button>

              </Link>

              <Link to="/categoria/acondicionador">

                <Button variant="light" className="w-100">
                  Acondicionador
                </Button>

              </Link>

              <Link to="/categoria/otro">

                <Button variant="light" className="w-100">
                  Otro
                </Button>

              </Link>
              <NavDropdown.Divider />

              <Link to="/carrito">

                <Button variant="light" className="w-100">
                  Carrito
                </Button>

              </Link>

            </NavDropdown>

          </Nav>

          <Nav>

            <Link to="/carrito" className="text-light text-decoration-none"  >

              <IconoCarrito />
              {cantidadTotalEnIcono() !== 0
                &&
                cantidadTotalEnIcono()}

            </Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  )

}
export default BarraDeNavegacion
