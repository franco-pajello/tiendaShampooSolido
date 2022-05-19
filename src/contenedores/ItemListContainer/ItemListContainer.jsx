import { useEffect, useState } from "react"
import { ApiProductos } from "../../../ApiMock/ApiMockProductos";
import ItemList from "../../conponentesIndividuales/ItemList";


const ItemListContainer = () => {

  const [Cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  

  useEffect(() => {
    ApiProductos()
      .then(dato => setProductos(dato))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false))
  }, [])

  return (
    <>
      <ItemList productos={productos} Cargando={Cargando}/>
    </>

  )
}

export default ItemListContainer