import { useEffect, useState } from "react";
import ItemDetail from "../../conponentesIndividuales/ItemDetail"
import { ApiProductos } from "../../../ApiMock/ApiMockProductos"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [Cargando, setCargando] = useState(true)
  const [producto, setProductos] = useState({})
  const {id} = useParams()
  useEffect(() => {
    ApiProductos(id)
      .then(dato => setProductos(dato))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false))
  }, [id])
  return (
    <ItemDetail producto={producto} Cargando={Cargando} />
  )
}

export default ItemDetailContainer