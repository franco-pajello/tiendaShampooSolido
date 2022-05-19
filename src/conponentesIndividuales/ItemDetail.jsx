import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ItemCount from "../contenedores/itemCount/ItemCount"
const ItemDetail = ({ producto, Cargando }) => {
  return (
    <div>
      {Cargando ? <>
  <Button variant="dark" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Cargando...
  </Button>
</> :   <Card style={{ width: '18rem' }} className="d-flex ">
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{`${producto.nombre}`}</Card.Title>
          <Card.Text>
          {`${producto.detalle}`}
          </Card.Text>
        </Card.Body>
        <ItemCount stock={5} inicial={0} onAdd={"onAdd"} />
      </Card> }
   
    </div>
  )
}

export default ItemDetail
