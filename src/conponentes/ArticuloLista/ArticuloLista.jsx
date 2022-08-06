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
        <div className="CargandoArticulo">

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
              </div>
          :
          productos.map((prod) =>
            <div
              key={prod.id}
              className="d-inline-flex align-text-top col-xl-3 col-lg-4 col-md-4 col-sm-6"
            >
              <Articulo
                articulos={prod}
              />
            </div>)}

    </div>
  )
}

export default ArticuloLista