import Card from "react-bootstrap/Card"

const CantidadArticulo = ({ cantidad = "Cantidad" }) => {

  return (
    <>
      <Card
        className="w-100 d-inline-flex"
      >
        <Card.Body>
          {cantidad}
        </Card.Body>
      </Card>
    </>
  )
}

export default CantidadArticulo