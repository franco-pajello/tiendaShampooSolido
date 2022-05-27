import { createContext, useState } from "react"

export const CartContext = createContext([])


const CartContextProvider = ({ children }) => {

  const [ProductoCarrito, SetProductoCarrito] = useState([])


  function OnAdd2(producto) {

    const SumarCantidadProductos = ProductoCarrito.find(objetoProducto => objetoProducto.id === producto.id)

    if (SumarCantidadProductos) {
      ProductoCarrito([SumarCantidadProductos.cantidad = producto.cantidad, SumarCantidadProductos.precio = producto.precio * producto.cantidad])


    } else {

      SetProductoCarrito([...ProductoCarrito, producto])
    }

  }
  return (
    <CartContext.Provider value={{
      ProductoCarrito,
      OnAdd2
    }}>
      {children}

    </CartContext.Provider>
  )
}

export default CartContextProvider