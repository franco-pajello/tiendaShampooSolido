import Card from "react-bootstrap/Card"
import ItemCount from "./ItemCount"


const CantidadIrem = ({ cantidad = "cantidad" }) => {

  return (
    <>
      <Card className="w-25">
        <Card.Body>{cantidad}</Card.Body>
      </Card>
    </>
  )
}

export default CantidadIrem