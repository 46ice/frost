import React from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Cadastro() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Cadastre-se</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ConfirmationPassword">
              <Form.Label>Confirmação de senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Checkbox">
              <Form.Check type="checkbox" label="Não sou robô" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
export default Cadastro;
