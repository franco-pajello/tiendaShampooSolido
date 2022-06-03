import { useEffect, useState } from "react"
import { ApiProductos } from "../../data/ApiMockProductos";
import ItemList from "../../conponentes/ItemList/ItemList";
import { useParams } from "react-router-dom";
import getFirestoreApp from "../../firebase/configuracion";
import { collection,getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {

  const [Cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const { id } = useParams()


  useEffect(() => {
    if (id) {
      const baseDeDatos= getFirestore()
    const consultaColeccion = collection(baseDeDatos, "productos")
      const filtroDeConsultaColeccion = query(consultaColeccion, where("categoria", "==", id))
      getDocs(filtroDeConsultaColeccion)
        .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false))
        console.log(id) 
    } else {
      const baseDeDatos = getFirestore()
    const consultaColeccion= collection(baseDeDatos, "productos")
      getDocs(consultaColeccion)
        .then(resp => setProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false))
    }
  },[id])

  return (
    <>
      <ItemList productos={productos} Cargando={Cargando} />
    </>

  )
}

export default ItemListContainer