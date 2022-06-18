import { useState } from "react"
import { Link } from "react-router-dom"
import CantidadArticulo from "../../conponentes/CantidadArticulo/CantidadArticulo"
import StockDisponible from "../../conponentes/StockDisponible/StockDisponible"

import Button from "react-bootstrap/Button"

const RecuentoDeElementos = ({ stock = "stok", inicial = "inicial", AgregarEnDetalle = "onAdd" }) => {

  const [cantidad, cantidadTotal] = useState(inicial)
  const [stockTotal, stockDisponible] = useState(stock)





  function restarCantidad() {

    if (cantidad > inicial) {

      cantidadTotal(cantidad - 1)
      stockDisponible(stockTotal + 1)
    }


  }
  function sumarCantidad() {

    if (cantidad < stock) {

      cantidadTotal(cantidad + 1)
      stockDisponible(stockTotal - 1)
    } else {
      alert("El limite es 5")
    }

  }
  function elijaUnaCantidad() {
    alert("Elija una cantidad")
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
        onClick=
        {
          cantidad === 0
            ?
            () => elijaUnaCantidad()
            :
            () => AgregarEnDetalle(cantidad, false)
        }
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
          ir a la tienda
        </Button>
      </Link>
      <StockDisponible
        totalStock={stockTotal}
      />

    </div>




  )
}

export default RecuentoDeElementos