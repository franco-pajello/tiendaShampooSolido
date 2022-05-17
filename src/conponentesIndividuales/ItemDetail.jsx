import Card from 'react-bootstrap/Card'
import ItemCount from "../contenedores/itemCount/ItemCount"
const ItemDetail = ({ productos, Cargando }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }} className="d-flex ">
        <Card.Img variant="top" src={productos.img} />
        <Card.Body>
          <Card.Title>{productos.nombre}</Card.Title>
          <Card.Text>
            {productos.detalle}
          </Card.Text>
        </Card.Body>
        <ItemCount stock={5} inicial={0} onAdd={"onAdd"} />
      </Card>
    </div>
  )
}

export default ItemDetail
