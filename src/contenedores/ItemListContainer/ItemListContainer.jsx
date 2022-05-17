import { useEffect, useState } from "react"
 import ItemList from "../../conponentesIndividuales/ItemList"; 
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
      {greeTing}
         
      <ItemList productos={productos} Cargando={Cargando}/>
    </>


  )
}

export default ItemListContainer