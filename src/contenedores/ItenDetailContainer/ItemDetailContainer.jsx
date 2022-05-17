import { useEffect, useState } from "react";
import ItemDetail from "../../conponentesIndividuales/ItemDetail"
const productos = [
    { id: "0", nombre: "Shampoo graso", precio: 500, img: "./img/shampoo-graso.jpg" },
  ]
  
  const simuladorApi = new Promise((resolve) => {
  
    setTimeout(() => {
      resolve(productos)
    }, 2000);
  
  })
  
  



const ItemDetailContainer = () => {

    const [Cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([])
  
    useEffect(() => {
      simuladorApi
        .then(dato => setProductos(dato))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false))
    }, [])
  


  return (
    <ItemDetail productos={productos} Cargando={Cargando}/>
  )
}

export default ItemDetailContainer