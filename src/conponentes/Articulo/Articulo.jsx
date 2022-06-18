import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

const Articulo = ({ articulos = "articulo" }) => {

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={articulos.img} />
        <Card.Body>
          <Card.Title>{articulos.nombre}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>${articulos.precio}</ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Link to={`/detalle/${articulos.id}`} ><Button variant="primary">Detalle</Button></Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default Articulo