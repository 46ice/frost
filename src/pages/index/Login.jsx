import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  return fetch('http://localhost:8080/frost/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {

  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    
    e.preventDefault();
    const token = await loginUser({ email, password});
    setToken(token);
    navigate("/home"), {state:{refresh:true}};
  }

      
  return (
    <>
    <div className="wall">
      <Card className="login">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form method="post" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control className="input-control" type="text" name="email" placeholder="Digite seu email" onChange={e => setEmail(e.target.value)} />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Senha</Form.Label>
              <Form.Control className="input-control" type="password" name="password" placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Checkbox">
              <Form.Check type="checkbox" label="Não sou robô" />
            </Form.Group>
            <div className="user-options-div">
              <Button className="user-options buttons" variant="primary" type="submit">Entrar</Button>
              <Button className="user-options buttons" variant="primary" href="http://localhost:5173/register">Cadastrar-se</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>  
    </>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
