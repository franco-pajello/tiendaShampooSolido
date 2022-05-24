import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

const Item = ({ items = "item" }) => {

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={items.img} />
        <Card.Body>
          <Card.Title>{items.nombre}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>${items.precio}</ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Link to={`/detalle/${items.id}`} ><Button variant="primary">Detalle</Button></Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default Item