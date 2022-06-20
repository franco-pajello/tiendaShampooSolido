import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

import CantidadArticulo from "../../conponentes/CantidadArticulo/CantidadArticulo"
import StockDisponible from "../../conponentes/StockDisponible/StockDisponible"

const RecuentoDeElementos =
  ({
    stock = "stok",
    inicial = "inicial",
    AgregarCantidadEnDetalle = "onAdd"
  }) => {

    const [cantidad, cantidadTotal] = useState(inicial)
    const [stockTotal] = useState(stock)

    function restarCantidad() {

      if (cantidad > inicial) {

        cantidadTotal(cantidad - 1)
     
      }

    }
    function sumarCantidad() {

      if (cantidad < stock) {

        cantidadTotal(cantidad + 1)
       
      } else {
        alert("El limite es 5")
      }

    }

    return (

      <div className="w-100 ">

        <div
          className="w-100 d-flex"
        >
          <Button
            variant="primary"
            size="lg"
            active
            onClick={sumarCantidad}
          >
            +
          </Button>
          <CantidadArticulo
            cantidad={cantidad}
          />
          <Button
            variant="info"
            size="lg"
            active
            onClick={restarCantidad}
          >
            -
          </Button>
        </div>
        <Button
          variant="success"
          className="w-100"
          onClick={() => AgregarCantidadEnDetalle(cantidad, false)}
        >
          Agregar al carrito
        </Button>
        <Link
          to="/"
        >
          <Button
            variant="info"
            className="w-100"
          >
            Ir a la tienda
          </Button>
        </Link>
        <StockDisponible
          totalStock={stockTotal}
        />
      </div>
    )
  }

export default RecuentoDeElementos