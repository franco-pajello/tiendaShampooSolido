import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import Articulo from "../Articulo/Articulo"


const ArticuloLista = ({ productos, Cargando }) => {

  return (
    <div
      className="col-12"
    >
      {
        Cargando
          ?
          <Button
            variant="dark"
            disabled
          >
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Cargando...
          </Button>
          :
          productos.map((prod) =>
            <div
              key={prod.id}
              className="d-inline-flex align-text-top col-3"
            >
              <Articulo
                articulos={prod}
              />
            </div>)}

    </div>
  )
}

export default ArticuloLista