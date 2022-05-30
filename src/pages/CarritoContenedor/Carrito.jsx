import { useContext } from "react"
import { CartContext } from "../../contenedores/Context/CartContext"
import Card from "react-bootstrap/Card"
import { Button } from "react-bootstrap"
const Carrito = () => {
  const { ProductoCarrito, CarritoEstaVacio, eliminarUnidad } = useContext(CartContext)


  return (
    <>
      {
        CarritoEstaVacio ?

          ProductoCarrito.map(prod =>
            <div key={prod.id} className="d-inline-flex align-text-top col-3"><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${prod.img}`} />
              <Card.Body>
                <Card.Title>{`${prod.nombre}`}</Card.Title>
                <Card.Text>
                  {`$${prod.precio}`}
                </Card.Text>
                <Card.Text>
                  {`Cantidad ${prod.cantidad}`}
                </Card.Text>
                <Button onClick={() => eliminarUnidad(prod.id)}>eliminar</Button>
              </Card.Body>
            </Card>
            </div>)
          :
          <h2>El carrito está vacío...</h2>
      }  </>



  )
}

export default Carrito