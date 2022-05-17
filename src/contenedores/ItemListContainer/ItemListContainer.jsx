import { useEffect, useState } from "react"
import { ApiProductos } from "../../../ApiMock/ApiMockProductos";
import ItemList from "../../conponentesIndividuales/ItemList";


const ItemListContainer = ({ greeTing = "Saludo" }) => {

  const [Cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    ApiProductos()
      .then(dato => setProductos(dato))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false))
  }, [])

  function saludoAlert() {
    alert(greeTing)
  }

  return (
    <>
      {greeTing}

      <ItemList productos={productos} Cargando={Cargando} />
    </>

  )
}

export default ItemListContainer