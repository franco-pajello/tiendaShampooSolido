import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import CantidadIrem from "./CantidadIrem"
import StockDisponible from "./StockDisponible"



const ItemCount = () => {

  const [count, cantidadTotal] = useState(0)
  const [stockTotal, stockDisponible] = useState(5)

  function restarCantidad() {
    if (count > 0) {


      cantidadTotal(count - 1)
      stockDisponible(stockTotal + 1)

    }


  }


  function sumarCantidad() {

    if (count < 5) {

      cantidadTotal(count + 1)
      stockDisponible(stockTotal - 1)
    } else {
      alert("El limite es 5")
    }

  }
  function cantidadComprar() {
    if (count === 0) {
      alert("Tiene que elegir una cantidad")

    }
    if (count === 1) {
      alert("Compró " + count + " unidad")

    }
    if (count > 1) {
      alert("Compró " + count + " unidades")
    }
  }

  return (


    <div className="w-100 ">

      <CantidadIrem cantidad={count} />
      <div className="w-25">
        <Button variant="primary" size="lg" active className="w-50" onClick={sumarCantidad} >
          +
        </Button>
        <Button variant="info" size="lg" active className="w-50" onClick={restarCantidad}  >
          -
        </Button>
        <Button variant="success" className="w-100" onClick={cantidadComprar}>Comprar</Button>

        <StockDisponible totalStock={stockTotal} />
      </div>

    </div>




  )
}

export default ItemCount