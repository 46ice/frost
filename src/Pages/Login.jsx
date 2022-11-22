import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from 'react';
import PropTypes from 'prop-types';

var link = "http://localhost:8080/frost/login";
export default function Login({ setToken }) {

  //const [username, setUserName] = useState();
  //const [password, setPassword] = useState();

  return (
    <>
      <Card className="login">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form method="post" action={link}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control className="input-control" type="text" name="email" placeholder="Digite seu email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Senha</Form.Label>
              <Form.Control className="input-control" type="password" name="password" placeholder="Digite sua senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Checkbox">
              <Form.Check type="checkbox" label="Não sou robô" />
            </Form.Group>
            <div className="user-options-div">
              <Button className="user-options buttons" variant="primary" type="submit">Entrar</Button>
              <Button className="user-options buttons" variant="primary" type="submit" href="http://localhost:5173/register">Cadastrar-se</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
//Login.propTypes = {setToken: PropTypes.func.isRequired}
