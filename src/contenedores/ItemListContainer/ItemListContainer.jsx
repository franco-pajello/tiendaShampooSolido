import { useEffect, useState } from "react"
 import ItemList from "../../conponentesIndividuales/ItemList"; 
import ButtonSaludo from "../ButtonContenedor/ButtonSaludo";
import ItemCount from "../itemCount/ItemCount"

const productos = [
  { id: "0", nombre: "Shampoo graso", precio: 500, img: "./img/shampoo-graso.jpg" },
  { id: "1", nombre: "Shampoo normal", precio: 500, img:"./img/shampoo-normal.jpg" },
  { id: "2", nombre: "Shampoo seco", precio: 500, img: "./img/shampoo-seco.jpg" }
]

const simuladorApi = new Promise((resolve) => {

  setTimeout(() => {
    resolve(productos)
  }, 2000);

})





const ItemListContainer = ({ greeTing = "Saludo" }) => {

  const [Cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    simuladorApi
      .then(dato => setProductos(dato))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false))
  }, [])




  function saludoAlert() {
    alert(greeTing)
  }

  return (
    <>
      <ItemCount stock={5} inicial={0} onAdd />
      {greeTing}

      <ButtonSaludo parametro={saludoAlert} />
         
      <ItemList productos={productos} Cargando={Cargando}/>
    </>


  )
}

export default ItemListContainer