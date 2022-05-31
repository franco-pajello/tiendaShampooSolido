import { createContext, useState } from "react"


export const CartContext = createContext([])

const CartContextProvider = ({ children }) => {

  const [ProductoCarrito, SetProductoCarrito] = useState([])
  const [CarritoEstaVacio, SetCarritoEstaVacio] = useState(false)

  function OnAdd2(producto) {

    SetProductoCarrito([...ProductoCarrito, producto])

    SetCarritoEstaVacio(true)

  }

  const eliminarUnidad = (id) => {
    let obtenerProducto = ProductoCarrito.find(prod => prod.id === id)
    
    if (obtenerProducto.cantidad > 1) {

      obtenerProducto.cantidad = obtenerProducto.cantidad - 1

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
  const cantidadTotalEnIcono = () => {

    return ProductoCarrito.reduce((acumulador, prod) => acumulador + prod.cantidad, 0)
  }

  const precioTotalDelCarrito = () => {

    return ProductoCarrito.reduce((acumulador , prod)=> acumulador + (prod.cantidad * prod.precio),0)
  }
  
  const eliminarContenidoDelCarrito = ()=>{
  SetProductoCarrito([]) 
 SetCarritoEstaVacio(false)
  }
  return (
    <CartContext.Provider value={{
      ProductoCarrito,
      OnAdd2,
      CarritoEstaVacio,
      eliminarUnidad,
      cantidadTotalEnIcono,
      precioTotalDelCarrito,
      eliminarContenidoDelCarrito
    }}>
      {children}

    </CartContext.Provider>
  )
}

export default CartContextProvider