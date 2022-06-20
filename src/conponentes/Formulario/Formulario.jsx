import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { CarritoContexto } from '../../contenedores/Context/CarritoContexto';




function Formulario() {

  const {

    finalizarCompra

  } = useContext(CarritoContexto)

  /* formulario de bootstrap */

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
    <Form
      validated={validated}
      onSubmit={handleSubmit}
      className="w-50 mx-auto"
    >
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>
            Nombre
          </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            pattern='[a-zA-Z]+'
            id='nombre'
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>
            Apellido
          </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            pattern='[a-zA-Z]+'
            id='apellido'
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>
            Email
          </Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend ">
              @
            </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              autoComplete='off'
              aria-describedby="inputGroupPrepend"
              required
              id='email'
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>
            Teléfono
          </Form.Label>
          <Form.Control type="tel"
            name="telefono"
            pattern='[0-9]{11}'
            placeholder="EJ: 01125269438"
            autoComplete='off'
            required id='telefono' />
        </Form.Group>
      </Row>
      <Row className='mb-3 '>
        <Form.Group as={Col} md="6">
          <Form.Label>
            Provincia
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese provincia"
            pattern='[a-zA-Z\s]+'
            required
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>
            Partido
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Partido"
            pattern='[a-zA-Z\s]+'
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>
            Localidad
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese localidad"
            pattern='[a-zA-Z\s]+'
            required
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>
            Cod/postal
          </Form.Label>
          <Form.Control
            type="tel"
            placeholder="Cod/postal"
            pattern='[0-9]+'
            required
          />
        </Form.Group>
      </Row>
      <Row className='mb-3 '>

        <Form.Group as={Col} md="6" >
          <Form.Label>
            Calle
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Calle"
            pattern='[a-zA-Z\s]+'
            required
          />
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>
            Altura
          </Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ingrese altura"
            pattern='[0-9]+'
            required
          />
        </Form.Group>
      </Row>
      <Button type="submit">

        finalizar compra

      </Button>
    </Form>
  );
}
export default Formulario