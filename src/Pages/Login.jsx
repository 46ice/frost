import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form method="post" action="http://localhost:8080/frost/login">
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
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Login;
