
import Item from "./Item";






 
const ItemList = ({productos, Cargando}) => {

  return (
    <div className="d-flex ">
      {Cargando ? <h2>cargando</h2> : productos.map((prod) => <div key={prod.id}>
       <Item items={prod}/>
      </div>)}

    </div>
  )
}

export default ItemList