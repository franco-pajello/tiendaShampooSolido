import { useState } from "react"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import CantidadIrem from "../../conponentes/CantidadItem/CantidadIrem"
import StockDisponible from "../../conponentes/StockDisponible/StockDisponible"

const ItemCount = ({ stock = "stok", inicial = "inicial", OnAdd = "onAdd" }) => {

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


      <div className="w-100 d-flex">
        <Button  variant="primary" size="lg" active  onClick={sumarCantidad} >
          +
        </Button>
        <CantidadIrem cantidad={cantidad} />
        <Button variant="info" size="lg" active  onClick={restarCantidad}  >
          -
        </Button>
      </div>
      <Button variant="success" className="w-100" onClick={cantidad === 0 ? () => elijaUnaCantidad() : () => OnAdd(cantidad, false)}>Agregar al carrito</Button>
      <Link to="/"><Button variant="info" className="w-100">
        ir a la tienda</Button>
      </Link>
      <StockDisponible totalStock={stockTotal} />

    </div>




  )
}

export default ItemCount