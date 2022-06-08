import { addDoc, collection, getFirestore, orderBy } from "firebase/firestore"
import { createContext, useState } from "react"
import Swal from "sweetalert"


export const CartContext = createContext([])

const CartContextProvider = ({ children }) => {

  const [ProductoCarrito, SetProductoCarrito] = useState([])
  const [CarritoEstaVacio, SetCarritoEstaVacio] = useState(false)

  function OnAdd2(producto) {

    let obtenerProducto = ProductoCarrito.find(prod => prod.id === producto.id)

    if (obtenerProducto) {

      obtenerProducto.cantidad = obtenerProducto.cantidad + producto.cantidad

      SetProductoCarrito([...ProductoCarrito])

      SetCarritoEstaVacio(true)

    } else {


      SetProductoCarrito([...ProductoCarrito, producto])

      SetCarritoEstaVacio(true)
    }
  }

  const restarUnidad = (id) => {
    let obtenerProducto = ProductoCarrito.find(prod => prod.id === id)

    if (obtenerProducto.cantidad > 1) {

      obtenerProducto.cantidad = obtenerProducto.cantidad - 1

      SetProductoCarrito([...ProductoCarrito])
    }
  }

  const sumarUnidad = (id) => {

    let obtenerProducto = ProductoCarrito.find(prod => prod.id === id)
    obtenerProducto.cantidad = obtenerProducto.cantidad + 1
    SetProductoCarrito([...ProductoCarrito])

  }
  const cantidadTotalEnIcono = () => {

    return ProductoCarrito.reduce((acumulador, prod) => acumulador + prod.cantidad, 0)
  }

  const precioTotalDelCarrito = () => {

    return ProductoCarrito.reduce((acumulador, prod) => acumulador + (prod.cantidad * prod.precio), 0)
  }

  const eliminarContenidoDelCarrito = () => {
    SetProductoCarrito([])
    SetCarritoEstaVacio(false)
  }
  const eliminarCartaDelCarrito = (id) => {
    if (ProductoCarrito.length > 1) {
      SetProductoCarrito(ProductoCarrito.filter(prod => prod.id !== id))

    } else {
      SetProductoCarrito(ProductoCarrito.filter(prod => prod.id !== id))
      SetCarritoEstaVacio(false)

    }

  }
  const alertaRestarUnidad = () => {

    Swal({
      toast: true,
      color: '#716add',
      position: 'center',
      icon: 'error',
      title: 'Se puede comprar a partir de 1 unidad',
      button: false,
      timer: 1000
    })

  }
  function finalizarCompra() {

    let orden = {}
    orden.buyer = { nombre: "fulano", correo: "fulano@gmail", telefono: "11652485245" }
    orden.total = precioTotalDelCarrito()
    orden.productos = ProductoCarrito.map(producto => {
      const id = producto.id
      const nombre = producto.nombre
      const precio = producto.precio
      const cantidad = producto.cantidad

      return { id, nombre, precio, cantidad }

    })
    const baseDeDatos = getFirestore()
    const consultarColeccion = collection(baseDeDatos, "ordenes")
    addDoc(consultarColeccion, orden)
      .then(resp => console.log(resp))
      .finally(eliminarContenidoDelCarrito())

  }

  return (
    <CartContext.Provider value={{
      ProductoCarrito,
      OnAdd2,
      CarritoEstaVacio,
      restarUnidad,
      cantidadTotalEnIcono,
      precioTotalDelCarrito,
      eliminarContenidoDelCarrito,
      sumarUnidad,
      eliminarCartaDelCarrito,
      finalizarCompra,
      alertaRestarUnidad
    }}>
      {children}

    </CartContext.Provider>
  )
}

export default CartContextProvider