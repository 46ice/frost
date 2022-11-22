import React from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {Routes, Route, useNavigate} from 'react-router-dom';
import App from '../App';



function Cadastro() {
  var link = "http://localhost:8080/frost/user/create";

  
  return (
    <>
    <div className="wall">
      <Card className="login">
        <Card.Body>
          <Card.Title className="register-title">Cadastre-se</Card.Title>
          <Form method="post" action={link} href="http://localhost:5173/frost/user/create" target="_blank">

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
              <Form.Control className="input-control" type="password" name="password" placeholder="Digite sua senha" />
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
              <Form.Control className="input-control" type="text" name="contact" placeholder="Contato" />
            </Form.Group>

            <input  type="hidden" name="chest_id" value="1"></input >

            <Form.Group className="mb-3" controlId="Checkbox">
              <Form.Check type="checkbox" label="Não sou robô" />
            </Form.Group>
            
            <Button className="buttons" variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </div>

      <Routes><Route path="/home" element={<App />} /></Routes>
    </>
  );
}
export default Cadastro;
