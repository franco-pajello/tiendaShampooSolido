import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Item = ({ items = "item" }) => {

  return (
    <>
      <Card style={{ width: '18rem' }} className="d-flex ">
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
          <Button variant="primary">Detalle</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Item