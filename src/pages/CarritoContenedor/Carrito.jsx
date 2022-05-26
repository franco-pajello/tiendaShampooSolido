import { useContext } from "react"
import { CartContext } from "../../contenedores/Context/CartContext"

const Carrito = () => {
  const {ProductoCarrito} =useContext(CartContext)

  return (
    <div>{ProductoCarrito.map(prod => <li>{prod.nombre}</li>)} </div>
  )
}

export default Carrito