import { useEffect, useState } from "react";
import Item from "../itemCount/Item";

 const productos = [
  { id: "0", nombre: "Shampoo graso", precio: 500, img: "" },
  { id: "1", nombre: "Shampoo normal", precio: 500, img: "" },
  { id: "2", nombre: "Shampoo seco", precio: 500, img: "" }
]

const simuladorApi = new Promise((resolve) => {

  setTimeout(() => {
    resolve(productos)
  }, 2000);

})
 
const ItemList = () => {
  const [Cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    simuladorApi
      .then(dato => setProductos(dato))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false))
  }, [])




  return (
    <div className="d-flex ">
      {Cargando ? <h2>cargando</h2> : productos.map((prod) => <div key={prod.id}>
        <><Item items={prod} /></>
      </div>)}

    </div>
  )
}

export default ItemList