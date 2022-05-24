import { useEffect, useState } from "react"
import { ApiProductos } from "../../data/ApiMockProductos";
import ItemList from "../../conponentes/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [Cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      ApiProductos()
        .then(dato => setProductos(dato.filter((productos) => productos.categoria === id)))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false))

    } else {
      ApiProductos()
        .then(dato => setProductos(dato))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false))
    }
  }, [id])

  return (
    <>
      <ItemList productos={productos} Cargando={Cargando} />
    </>

  )
}

export default ItemListContainer