import ButtonSaludo from "../ButtonContenedor/buttonSaludo"


const ItemListContainer = ({ greeTing = "Saludo" }) => {
  function saludoAlert() {
    alert(greeTing)
  }

  return (
    <>
      {greeTing}

      <ButtonSaludo parametro={saludoAlert} />
    </>
  )
}

export default ItemListContainer