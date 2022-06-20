import { addDoc, collection, getFirestore } from "firebase/firestore"
import { createContext, useState } from "react"
import Swal from "sweetalert"

export const CarritoContexto = createContext([])

const CarritoContextoProveedor = ({ children }) => {

  const [ProductoCarrito, establecerProductoCarrito] = useState([])
  const [CarritoEstaVacio, establecerCarritoEstaVacio] = useState(false)

  function AgregarCantidadEnCarrito(producto) {


    let obtenerProducto = ProductoCarrito.find(prod => prod.id === producto.id)

    if (obtenerProducto) {

      obtenerProducto.cantidad = obtenerProducto.cantidad + producto.cantidad

      establecerProductoCarrito([...ProductoCarrito])

      establecerCarritoEstaVacio(true)

    } else {


      establecerProductoCarrito([...ProductoCarrito, producto])

      establecerCarritoEstaVacio(true)
    }
  }

  const restarUnidad = (id) => {
    let obtenerProducto = ProductoCarrito.find(prod => prod.id === id)

    if (obtenerProducto.cantidad > 1) {

      obtenerProducto.cantidad = obtenerProducto.cantidad - 1

      establecerProductoCarrito([...ProductoCarrito])
    }
  }

  const sumarUnidad = (id) => {

    let obtenerProducto = ProductoCarrito.find(prod => prod.id === id)
    obtenerProducto.cantidad = obtenerProducto.cantidad + 1
    establecerProductoCarrito([...ProductoCarrito])

  }
  const cantidadTotalEnIcono = () => {


    return ProductoCarrito.reduce((acumulador, prod) => acumulador + prod.cantidad, 0)
  }

  const precioTotalDelCarrito = () => {

    return ProductoCarrito.reduce((acumulador, prod) => acumulador + (prod.cantidad * prod.precio), 0)
  }

  const eliminarContenidoDelCarrito = () => {
    establecerProductoCarrito([])
    establecerCarritoEstaVacio(false)
  }
  const eliminarCartaDelCarrito = (id) => {
    if (ProductoCarrito.length > 1) {
      establecerProductoCarrito(ProductoCarrito.filter(prod => prod.id !== id))

    } else {
      establecerProductoCarrito(ProductoCarrito.filter(prod => prod.id !== id))
      establecerCarritoEstaVacio(false)

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

    let datosDelFormularioEmail = document.getElementById("email").value
    let datosDelFormularioNombre = document.getElementById("nombre").value
    let datosDelFormularioApellido = document.getElementById("apellido").value
    let datosDelFormularioTelefono = document.getElementById("telefono").value


    let orden = {}
    orden.buyer = { nombre: datosDelFormularioNombre + " " + datosDelFormularioApellido, correo: datosDelFormularioEmail, telefono: datosDelFormularioTelefono }
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
      .then(resp => CompraExitosaDatoIdAlert(datosDelFormularioNombre, resp.id))
      .catch((err) => (() => alert("¡ups! ocurrio un error :("), console.log(err)))
      .finally(eliminarContenidoDelCarrito())

  }
  function CompraExitosaDatoIdAlert(nombre, id) {

    Swal({
      toast: true,
      color: '#716add',
      position: 'center',
      icon: 'success',
      title: `${nombre}, estamos preparando tu pedido`,
      text: `el numero de orden es ${id}`,
      button: true,
    })
  }

  return (
    <CarritoContexto.Provider value={{
      ProductoCarrito,
      CarritoEstaVacio,
      AgregarCantidadEnCarrito,
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

    </CarritoContexto.Provider>
  )
}

export default CarritoContextoProveedor