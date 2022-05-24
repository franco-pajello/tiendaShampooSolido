import Card from "react-bootstrap/Card"

const CantidadIrem = ({ cantidad = "Cantidad" }) => {

  return (
    <>
      <Card className="w-100">
        <Card.Body>{cantidad}</Card.Body>
      </Card>
    </>
  )
}

export default CantidadIrem