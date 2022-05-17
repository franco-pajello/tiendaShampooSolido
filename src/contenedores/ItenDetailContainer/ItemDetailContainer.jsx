import { useEffect, useState } from "react";
import ItemDetail from "../../conponentesIndividuales/ItemDetail"
import { ApiProductos } from "../../../ApiMock/ApiMockProductos"

const ItemDetailContainer = () => {

  const [Cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState({})
  useEffect(() => {
    ApiProductos("1")
      .then(dato => setProductos(dato))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false))
  }, [])
  console.log(productos)
  return (
    <ItemDetail productos={productos} Cargando={Cargando} />
  )
}

export default ItemDetailContainer