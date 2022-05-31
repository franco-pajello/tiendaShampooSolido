import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ItemCount from "../../contenedores/itemCount/ItemCount"
import { useContext, useState } from 'react'
import { Link} from 'react-router-dom'
import { CartContext } from '../../contenedores/Context/CartContext'
const ItemDetail = ({ producto, Cargando }) => {

  const [AgregarCarrito, ColocarAgregarCarrito] = useState(true)

  const { OnAdd2 } = useContext(CartContext)

  const OnAdd = (cantidad, bool) => {
    ColocarAgregarCarrito(bool),
      OnAdd2({ ...producto, cantidad })

  }
  return (
    <div>
      {Cargando ? <>
        <Button variant="dark" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Cargando...
        </Button>
      </> : <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${producto.img}`} />
        <Card.Body>
          <Card.Title>{`${producto.nombre}`}</Card.Title>
          <Card.Text>
            {`${producto.detalle}`}
          </Card.Text>
        </Card.Body>
        {AgregarCarrito === true ?

          <ItemCount stock={5} inicial={0} OnAdd={OnAdd} />
          :
          <>
            <Link to="/carrito">
              <Button variant="success" className="w-100">Ir al carrito</Button>
            </Link>
            <Link to="/"><Button variant="info" className="w-100">
              Seguir comprando</Button>
            </Link>
          </>
        }
      </Card>}

    </div>
  )
}

export default ItemDetail
