import ButtonSaludo from "../ButtonContenedor/buttonSaludo"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "./ItemList"



const ItemListContainer = ({ greeTing = "Saludo" }) => {

  function saludoAlert() {
    alert(greeTing)
  }

  return (
    <>
      <ItemCount stock={5} inicial={0} onAdd />
      {greeTing}

      <ButtonSaludo parametro={saludoAlert} />

      <ItemList />
    </>


  )
}

export default ItemListContainer