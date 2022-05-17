import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import ItemCount from "../contenedores/itemCount/ItemCount"
import StockDisponible from "./StockDisponible"

const Item = ({items = "item"}) => {

  return (
    <>



      <Card style={{ width: '18rem' }} className="d-flex ">
        <Card.Img variant="top" src={items.img} />
        <Card.Body>
          <Card.Title>{items.nombre}</Card.Title>
          <Card.Text>
             detalle detalle detalle
          </Card.Text>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>${items.precio}</ListGroupItem>
            </ListGroup>
          </Card.Body>
          <ItemCount stock={5} inicial={0} onAdd />
        </Card.Body>
      </Card>

    </>
  )
}

export default Item