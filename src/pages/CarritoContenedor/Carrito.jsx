import { useContext } from "react"
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"


import Formulario from "../../conponentes/Formulario/Formulario"
import { CarritoContexto } from "../../contenedores/Context/CarritoContexto"

const Carrito = () => {
  const {
    ProductoCarrito,
    CarritoEstaVacio,
    restarUnidad,
    precioTotalDelCarrito,
    eliminarContenidoDelCarrito,
    sumarUnidad,
    eliminarCartaDelCarrito,
    alertaRestarUnidad,
    cantidadTotalEnIcono
  } = useContext(CarritoContexto)



  return (
    <>
      <div className="d-block justify-content-around col-12 ">

        <div className="col-12 ">
          {
            !CarritoEstaVacio
              ?
              <div className=" mx-auto">

                <h2>
                  El carrito está vacío...
                </h2>
                <Link to="/">

                  <Button variant="info" className="w-10">
                    ir a la tienda
                  </Button>

                </Link>
              </div>
              :
              <>
                {
                  ProductoCarrito.map(prod =>
                    <div key={prod.id} className="d-inline-flex align-text-top " >

                      <Card style={{ width: '18rem' }}>

                        <Card.Img
                          variant="top"
                          src={`${prod.img}`}
                        />

                        <Card.Body>

                          <Card.Title>
                            {`${prod.nombre}`}
                          </Card.Title>

                          <Card.Text>
                            {`$${prod.precio}`}
                          </Card.Text>

                          {
                            prod.cantidad > 1

                              ?

                              <div className="d-flex justify-content-between">

                                <Button onClick={() => sumarUnidad(prod.id)}>
                                  +
                                </Button>
                                <>
                                  {`Cantidad ${prod.cantidad}`}
                                </>
                                <Button onClick={() => restarUnidad(prod.id)}>
                                  -
                                </Button>

                              </div>

                              :

                              <div className="d-flex justify-content-between">

                                <Button onClick={() => sumarUnidad(prod.id)}>
                                  +
                                </Button>
                                <>
                                  {`Cantidad ${prod.cantidad}`}
                                </>
                                <Button onClick={() => alertaRestarUnidad()}>
                                  -
                                </Button>

                              </div>
                          }
                        </Card.Body>

                        <>
                          <Button onClick={() => eliminarCartaDelCarrito(prod.id)}>
                            Eliminar
                          </Button>
                        </>
                      </Card>

                    </div>)
                }

              </>
          }
        </div>

        <>
          {cantidadTotalEnIcono() !== 0
            &&
            <>
              <h4>
                Precio total: {precioTotalDelCarrito()}
              </h4>
              <Button onClick={() => eliminarContenidoDelCarrito()}>
                Vaciar carrito
              </Button>

              <Formulario />

            </>
          }
        </>

      </div>
    </>

  )
}

export default Carrito