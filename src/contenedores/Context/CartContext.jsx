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
    let a = ProductoCarrito.find(prod => prod.id === id)
    console.log(a)
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
  const cantidadTotal = () => {

    return ProductoCarrito.reduce((contador, prod) => contador + prod.cantidad, 0)
  }



  return (
    <CartContext.Provider value={{
      ProductoCarrito,
      OnAdd2,
      CarritoEstaVacio,
      eliminarUnidad,
      cantidadTotal
    }}>
      {children}

    </CartContext.Provider>
  )
}

export default CartContextProvider