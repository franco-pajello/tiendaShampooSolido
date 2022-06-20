import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ArticuloDetalle from "../../conponentes/ArticuloDetalle/ArticuloDetalle"

const ArticuloDetalleContenedor = () => {
  const [Cargando, establecerCargando] = useState(true)
  const [producto, establecerProductos] = useState({})
  const { id } = useParams()
  useEffect(() => {
    const baseDeDatos = getFirestore()
    const consultaBaseDeDatos = doc(baseDeDatos, "productos", id)
    getDoc(consultaBaseDeDatos)
      .then(resp => establecerProductos({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => establecerCargando(false))
  }, [id])
  return (
    <ArticuloDetalle producto={producto} Cargando={Cargando} />
  )
}

export default ArticuloDetalleContenedor