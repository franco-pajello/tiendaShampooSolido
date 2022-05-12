import ButtonSaludo from "../ButtonContenedor/buttonSaludo"
import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({ greeTing = "Saludo" }) => {
  
  function saludoAlert() {
    alert(greeTing)
  }

  return (
    <>
      {greeTing}
      <ItemCount stock={5} inicial={0} onAdd/>
      <ButtonSaludo parametro={saludoAlert} />
    </>
  )
}

export default ItemListContainer