import { useContext } from "react"
import { CartContext } from "../../contenedores/Context/CartContext"
import Card from "react-bootstrap/Card"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
const Carrito = () => {
  const { ProductoCarrito, CarritoEstaVacio, restarUnidad, precioTotalDelCarrito, eliminarContenidoDelCarrito, sumarUnidad, eliminarCartaDelCarrito } = useContext(CartContext)

  return (
    <>
      {
        !CarritoEstaVacio ?
          <>
            <h2>El carrito está vacío...</h2>
            <Link to="/"><Button variant="info" className="w-10">
              ir a la tienda</Button>
            </Link>
          </>
          :
          <>
            {ProductoCarrito.map(prod =>
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
                  {
                    prod.cantidad > 1 ?
                      <>
                        <Button onClick={() => sumarUnidad(prod.id)}>+</Button>
                        <Button onClick={() => restarUnidad(prod.id)}>-</Button>
                      </>
                      :
                      <Button onClick={() => sumarUnidad(prod.id)}>+</Button>
                  }
                </Card.Body>
                <><Button onClick={() => eliminarCartaDelCarrito(prod.id)}>eliminar</Button></>
              </Card>
              </div>)}
            <h4>Precio total: {precioTotalDelCarrito()} <Button onClick={() => eliminarContenidoDelCarrito()}>Vaciar carrito</Button></h4>
          </>
      }
    </>

  )
}

export default Carrito