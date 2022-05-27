import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import CantidadIrem from "../../conponentes/CantidadItem/CantidadIrem"
import StockDisponible from "../../conponentes/StockDisponible/StockDisponible"

const ItemCount = ({ stock = "stok", inicial = "inicial", OnAdd = "onAdd" }) => {

  const [cantidad, cantidadTotal] = useState(inicial)
  const [stockTotal, stockDisponible] = useState(stock)

  function restarCantidad() {
    if (cantidad > inicial) {
      cantidadTotal(cantidad - 1)
      stockDisponible(stockTotal + 1)
      OnAdd(cantidad, true)
    }


  }


  function sumarCantidad() {

    if (cantidad < stock) {
      cantidadTotal(cantidad + 1)
      stockDisponible(stockTotal - 1)
      OnAdd(cantidad, true)
    } else {
      alert("El limite es 5")
    }

  }
  function cantidadComprar() {
    if (cantidad === inicial) {
      alert("Tiene que elegir una cantidad")

    }
    if (cantidad === 1) {
      alert("Compró " + cantidad + " unidad")

    }
    if (cantidad > 1) {
      alert("Compró " + cantidad + " unidades")
    }
  }
  return (


    <div className="w-100 ">

      <CantidadIrem cantidad={cantidad} />
      <div className="w-100">
        <Button variant="primary" size="lg" active className="w-50" onClick={sumarCantidad} >
          +
        </Button>
        <Button variant="info" size="lg" active className="w-50" onClick={restarCantidad}  >
          -
        </Button>
        <Button variant="success" className="w-100" onClick={() => OnAdd(cantidad, false)}>Agregar al carrito</Button>

        <StockDisponible totalStock={stockTotal} />
      </div>

    </div>




  )
}

export default ItemCount