import Card from "react-bootstrap/Card"

const CantidadIrem = ({ cantidad = "Cantidad" }) => {

  return (
    <>
      <Card className="w-25">
        <Card.Body>{cantidad}</Card.Body>
      </Card>
    </>
  )
}

export default CantidadIrem