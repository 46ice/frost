import React from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Cadastro() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Cadastre-se</Card.Title>
          <Form method="post" action="http://localhost:8080/frost/user/create">

          <Form.Group controlId="username">
            <Form.Label>Nome do usuário</Form.Label>
            <Form.Control type="text" name="username" placeholder="Digite o nome do usuário" />
          </Form.Group>

            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control className="input-control" type="email" name="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Senha</Form.Label>
              <Form.Control className="input-control" type="text" name="password" placeholder="Digite sua senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ConfirmationPassword">
              <Form.Label>Confirmação de senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha novamente" />
            </Form.Group>

            <Form.Group controlId="email_recover">
              <Form.Label>Digite um email de recuperação</Form.Label>
              <Form.Control className="input-control" type="text" name="email_recover" placeholder="Digite um email de recuperação" />
            </Form.Group>

            <Form.Group controlId="contact">
              <Form.Label>Número de contato</Form.Label>
              <Form.Control className="input-control" type="text" name="contact" placeholder="contact" />
            </Form.Group>

            <Button type="hidden" name="chest_id" value="1"></Button>

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
