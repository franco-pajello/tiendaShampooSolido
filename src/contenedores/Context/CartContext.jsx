import { createContext, useState } from "react"


export const CartContext = createContext([])












const CartContextProvider = ({ children }) => {

  const [ProductoCarrito, SetProductoCarrito] = useState([])
  const [CarritoEstaVacio, SetCarritoEstaVacio] = useState(false)

  function OnAdd2(producto) {
    const SumarCantidadProductos = ProductoCarrito.find(objetoProducto => objetoProducto.id === producto.id)


    if (SumarCantidadProductos) {
      if (producto.cantidad < 0) {

        SumarCantidadProductos.cantidad--

        SumarCantidadProductos.precio = SumarCantidadProductos.cantidad * producto.precio


      } else {
        SumarCantidadProductos.cantidad++

        SumarCantidadProductos.precio = SumarCantidadProductos.cantidad * producto.precio

      }

      SetCarritoEstaVacio(true)

      SetProductoCarrito([...ProductoCarrito])
    } else {

      SetProductoCarrito([...ProductoCarrito, producto])
      SetCarritoEstaVacio(true)
    }


  }





  const eliminarUnidad = (id) => {
    let a = ProductoCarrito.find(prod => prod.id === id)

    if (a.cantidad > 1) {

      console.log(a.cantidad)

      a.cantidad = a.cantidad - 1

      SetProductoCarrito([...ProductoCarrito])

    } else {

      if (ProductoCarrito.length > 1) {

        SetProductoCarrito(ProductoCarrito.filter(prod => prod.id !== id))

      } else {

        SetProductoCarrito(ProductoCarrito.filter(prod => prod.id !== id))
        SetCarritoEstaVacio(false)
      }


    }

  }



  return (
    <CartContext.Provider value={{
      ProductoCarrito,
      OnAdd2,
      CarritoEstaVacio,
      eliminarUnidad
    }}>
      {children}

    </CartContext.Provider>
  )
}

export default CartContextProvider