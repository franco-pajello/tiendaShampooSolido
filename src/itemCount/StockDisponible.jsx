import Card from "react-bootstrap/Card"

const StockDisponible = ({ totalStock = "no hay stock" }) => {
  return (
    <>
      <Card className="w-100">
        <Card.Body className="d-flex">Stock disponible {totalStock}</Card.Body>
      </Card>

    </>
  )
}

export default StockDisponible