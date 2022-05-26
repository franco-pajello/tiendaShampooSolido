import { createContext, useState} from "react"

export const CartContext = createContext([])


const CartContextProvider = ({children}) => {
    
    const [ProductoCarrito, SetProductoCarrito]=useState([])


  function OnAdd2(producto) {
      SetProductoCarrito([...ProductoCarrito, producto ])
      
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