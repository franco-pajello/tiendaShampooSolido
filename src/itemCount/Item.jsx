import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const Item = (items = "item") => {

  return (
    <>



      <Card style={{ width: '18rem' }} className="d-flex ">
        <Card.Img variant="top" src={items.img} />
        <Card.Body>
          <Card.Title>{items.items.nombre}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>${items.items.precio}</ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Button variant="primary">Detalle</Button>
        </Card.Body>
      </Card>

    </>
  )
}

export default Item