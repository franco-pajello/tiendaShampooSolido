
import { useContext, useState } from 'react'

import { Link } from 'react-router-dom'

import Spinner from 'react-bootstrap/Spinner'
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'
import RecuentoDeElementos from '../../contenedores/RecuentoDeElementos/RecuentoDeElementos'

import { CarritoContexto } from '../../contenedores/Context/CarritoContexto'

const ArticuloDetalle = ({ producto, Cargando }) => {

  const [AgregarCarrito, ColocarAgregarCarrito] = useState(true)

  const { OnAdd2 } = useContext(CarritoContexto)

  const AgregarEnDetalle = (cantidad, bool) => {

    ColocarAgregarCarrito(bool),
      OnAdd2({ ...producto, cantidad })

  }






  return (
    <>
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
      </>
        :
        <Card
          style={{ width: '18rem' }}
          className="mx-auto"
        >
          <Card.Img
            variant="top"
            src={`${producto.img}`}
          />
          <Card.Body>
            <Card.Title>
              {`${producto.nombre}`}
            </Card.Title>
            <Card.Text>
              {`${producto.detalle}`}
            </Card.Text>
          </Card.Body>
          {AgregarCarrito === true

            ?

            <RecuentoDeElementos
              stock={5}
              inicial={1}
              AgregarEnDetalle={AgregarEnDetalle}
            />

            :
            <>
              <Link
                to="/carrito"
              >
                <Button
                  variant="success"
                  className="w-100"
                >
                  Ir al carrito
                </Button>
              </Link>
              <Link
                to="/"
              >
                <Button
                  variant="info"
                  className="w-100"
                >
                  Seguir comprando
                </Button>
              </Link>
            </>
          }
        </Card>}

    </>
  )
}

export default ArticuloDetalle