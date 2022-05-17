
import Item from "./Item";






 
const ItemList = ({productos, Cargando, buton}) => {

  return (
    <div className="d-flex ">
      {Cargando ? <h2>cargando</h2> : productos.map((prod) => <div key={prod.id}>
       <Item items={prod} buton={buton}/>
      </div>)}

    </div>
  )
}

export default ItemList