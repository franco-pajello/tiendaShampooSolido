import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import CantidadIrem from "../../conponentes/CantidadIrem"
import StockDisponible from "../../conponentes/StockDisponible"

const ItemCount = ({ stock = "stok", inicial = "inicial", OnAdd = "onAdd" }) => {

  const [count, cantidadTotal] = useState(inicial)
  const [stockTotal, stockDisponible] = useState(stock)

  function restarCantidad() {
    if (count > inicial) {


      cantidadTotal(count - 1)
      stockDisponible(stockTotal + 1)

    }


  }


  function sumarCantidad() {

    if (count < stock) {

      cantidadTotal(count + 1)
      stockDisponible(stockTotal - 1)
    } else {
      alert("El limite es 5")
    }

  }
  function cantidadComprar() {
    if (count === inicial) {
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
      <div className="w-100">
        <Button variant="primary" size="lg" active className="w-50" onClick={sumarCantidad} >
          +
        </Button>
        <Button variant="info" size="lg" active className="w-50" onClick={restarCantidad}  >
          -
        </Button>
        <Button variant="success" className="w-100" onClick={OnAdd}>Agregar al carrito</Button>

        <StockDisponible totalStock={stockTotal} />
      </div>

    </div>




  )
}

export default ItemCount