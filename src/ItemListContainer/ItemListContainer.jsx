import ButtonSaludo from "../ButtonContenedor/buttonSaludo"


const ItemListContainer = ({greeTing="saludo"}) => {
 function saludoAlert(){
alert(greeTing)
 }
 
    return (
<>
<ButtonSaludo parametro = {saludoAlert}/>
    </>
  )
}

export default ItemListContainer