import { useContext } from "react"
import { CartContext } from "../../contenedores/Context/CartContext"
import Card  from "react-bootstrap/Card"
const Carrito = () => {
 const {ProductoCarrito} = useContext(CartContext)  

  return (
    <>{ ProductoCarrito.map(prod => 
    <div  key={prod.id} className="d-inline-flex align-text-top col-3"><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${prod.img}`} />
      <Card.Body>
        <Card.Title>{`${prod.nombre}`}</Card.Title>
        <Card.Text>
          {`$${prod.precio}`}
        </Card.Text>
        <Card.Text>
          {`Cantidad ${prod.cantidad}`}
        </Card.Text>
        <Card.Text>
          {`${prod.detalle}`}
        </Card.Text>
      </Card.Body>
    </Card>
</div>)}  </> 
  )
}

export default Carrito