import { useEffect, useState } from "react";
import ItemDetail from "../../conponentes/ItemDetail/ItemDetail"
import { ApiProductos } from "../../data/ApiMockProductos"
import { useParams } from "react-router-dom";
import getFirestoreApp from "../../firebase/configuracion";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [Cargando, setCargando] = useState(true)
  const [producto, setProductos] = useState({})
  const { id } = useParams()
  useEffect(()=>{
    const baseDeDatos = getFirestore()
    const consultaBaseDeDatos = doc(baseDeDatos,"productos",id)
    getDoc(consultaBaseDeDatos)
    .then(resp => setProductos ( {id: resp.id, ...resp.data()}))
    .catch((err) => console.log(err))
    .finally(() => setCargando(false))
      },[id])
  return (
    <ItemDetail producto={producto} Cargando={Cargando} />
  )
}

export default ItemDetailContainer