import { Link } from "react-router-dom"
import { useContext } from "react";
import { FiAlignJustify } from "react-icons/fi";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button";


import IconoCarrito from "../../contenedores/LogoCarrito/LogoCarrito"
import { CarritoContexto } from "../../contenedores/Context/CarritoContexto";



const BarraDeNavegacion = () => {

  const { cantidadTotalEnIcono } = useContext(CarritoContexto)

  return (


    <div className="BaraaDeNavegacion">

      <div className="logo">
        <Link to="/">

          <h3>Curie cosmética</h3>

        </Link>
      </div>

      <div>
          <div  className="menuHamburguesa">
            
            <button>

            <FiAlignJustify />
            
            </button>
          </div>
        <ul className="Lista">

          <li>
            <Link to="/categoria/shampoo">

              <button className="btnLista">
                Shampoo
              </button>

            </Link>
          </li>
          <li>
            <Link to="/categoria/acondicionador">

              <button className="btnLista">acondicionador</button>

            </Link>
          </li>
          <li>
            <Link to="/categoria/otro">
              <button className="btnLista">otro</button>
            </Link>
          </li>
          <li>
            <div className="iconoCarrito">

              <Link to="/carrito">
                <IconoCarrito />
                {cantidadTotalEnIcono() !== 0
                  &&
                  cantidadTotalEnIcono()}
              </Link>
            </div>
          </li>
        </ul>
      </div>




    </div>

    /*    <Navbar
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

    </Navbar> */

  )

}
export default BarraDeNavegacion
