
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Item from "./Item";

const ItemList = ({ productos, Cargando }) => {

  return (
    < >
      {Cargando ?
        <Button variant="dark" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true" />
          Cargando...
        </Button>
        : productos.map((prod) => <div key={prod.id} className="d-inline-flex align-text-top">
          <Item items={prod} />
        </div>)}

    </>
  )
}

export default ItemList