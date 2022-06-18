import { useEffect, useState } from "react"

import ArticuloLista from "../../conponentes/ArticuloLista/ArticuloLista"
import { useParams } from "react-router-dom";
import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

const ListaDeArticuloContenedora = () => {

  const [Cargando, establecerCargando] = useState(true)
  const [productos, establecerProductos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const baseDeDatos = getFirestore()
      const consultaColeccion = collection(baseDeDatos, "productos")
      const filtroDeConsultaColeccion = query(consultaColeccion, where("categoria", "==", id))
      getDocs(filtroDeConsultaColeccion)
        .then(resp => establecerProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch((err) => console.log(err))
        .finally(() => establecerCargando(false))
    } else {
      const baseDeDatos = getFirestore()
      const consultaColeccion = collection(baseDeDatos, "productos")
      getDocs(consultaColeccion)
        .then(resp => establecerProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        .catch((err) => console.log(err))
        .finally(() => establecerCargando(false))
    }
  }, [id])

  return (
    <>
      <ArticuloLista productos={productos} Cargando={Cargando} />
    </>

  )
}

export default ListaDeArticuloContenedora