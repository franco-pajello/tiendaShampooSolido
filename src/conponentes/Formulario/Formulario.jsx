import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import { CartContext } from '../../contenedores/Context/CartContext';

function Formulario() {

  const {

    finalizarCompra

  } = useContext(CartContext)

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {

      finalizarCompra()
      setValidated(true);
    }
  };
  return (
    <Form validated={validated} onSubmit={handleSubmit} className="w-50 mx-auto">
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            id='nombre'
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            id='apellido'
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend ">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              id='email'
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="tel"
            name="telefono"
            pattern='[0-9]{10}'
            placeholder="EJ: 1125269438"
            autoComplete='off'
            required id='telefono' />
        </Form.Group>
      </Row>
      <Row className='mb-3 '>

        <Form.Group as={Col} md="6">
          <Form.Label>Provincia</Form.Label>
          <Form.Control type="text" placeholder="Ingrese provincia" required />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Partido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese Partido" required />
        </Form.Group>
      </Row>
      <Row className="mb-3">

      <Form.Group as={Col} md="6">
        <Form.Label>Localidad</Form.Label>
        <Form.Control type="text" placeholder="Ingrese localidad" required />
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Cod/postal</Form.Label>
        <Form.Control type="text" placeholder="Cod/postal" required />
      </Form.Group>
      </Row>
      <Row className='mb-3 '>

        <Form.Group as={Col} md="6" >
          <Form.Label>Calle</Form.Label>
          <Form.Control type="text" placeholder="Ingrese Calle" required />
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Altura</Form.Label>
          <Form.Control type="tel" placeholder="Ingrese altura" required />
        </Form.Group>
      </Row>
      <Button type="submit">finalizar compra</Button>
    </Form>
  );
}
export default Formulario