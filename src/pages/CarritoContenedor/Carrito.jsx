import { useContext } from "react"
import { CartContext } from "../../contenedores/Context/CartContext"
import Card from "react-bootstrap/Card"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
const Carrito = () => {
  const { ProductoCarrito, CarritoEstaVacio, eliminarUnidad, precioTotalDelCarrito, eliminarContenidoDelCarrito } = useContext(CartContext)

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
          
          <Button className="position-absolute end-0  btn-secondary" onClick={()=>eliminarContenidoDelCarrito()}>Vaciar carrito</Button>
          
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
                  <Button onClick={() => eliminarUnidad(prod.id)}>eliminar</Button>
                </Card.Body>
              </Card>
              </div>)}

            <h4>Precio total: {precioTotalDelCarrito()}</h4>

          </>
      }
    </>

  )
}

export default Carrito