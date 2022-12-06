import Card from "react-bootstrap/Card";
import "../../assets/support.css";

import Button from 'react-bootstrap/Button';
import '../../assets/ButtonSupport.css';

const product1 = 'http://localhost:8080/frost/chest/add/1/' + localStorage.getItem('id');
const product2 = 'http://localhost:8080/frost/chest/add/2/' + localStorage.getItem('id');
const product3 = 'http://localhost:8080/frost/chest/add/3/' + localStorage.getItem('id');
const product4 = 'http://localhost:8080/frost/chest/add/4/' + localStorage.getItem('id');

function Suporte() {
  return (
    <div className="suporte-back">
      <div className="produto">
        <p>Dê uma olhada em nossos produtos!</p>
      </div>
      <div className="suporte conteudo-suporte">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/files/hardware.jpg" />
          <Card.Body>
            <Card.Title>HARDWARE</Card.Title>
            <Card.Text>
              Somos uma empresa impar no mercado atual, com o diferencial de
              estar presente em todos os meios para suporte de hardware para a
              sua necessidade e de sua empresa.
            </Card.Text>
            <div className="contrate"><a href={product1} target="_blank">Colocar no carrinho</a></div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/files/software.png" />
          <Card.Body>
            <Card.Title>SOFWARE</Card.Title>
            <Card.Text>
              Desenvolvemos todos os tipos de software, contando com uma equipe
              qualificada para melhor atender sua necessidade.
            </Card.Text>
            <div className="contrate"><a href={product2} target="_blank" value='2'>Colocar no carrinho</a></div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/files/infra.png" />
          <Card.Body>
            <Card.Title>INFRAESTRUTURA</Card.Title>
            <Card.Text>
              Realizamos a instalação da sua rede, cabeamento, instalação de
              roteadores e Switchs. Tudo que sua estrutura precisar.
            </Card.Text>

            <div className="contrate"><a href={product3} target="_blank" value='3'>Colocar no carrinho</a></div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/files/segurança.jpg" />
          <Card.Body>
            <Card.Title>SEGURANÇA</Card.Title>
            <Card.Text>
              Segrança total ao seu comptador, seja ele pessoal ou empresarial
              no qual configuramos e instalamos Servidores, Firewall e
              Anti-virus implementando sempre a melhor opção e solução para sua
              empresa.
            </Card.Text>
            <div className="contrate"><a href={product4} target="_blank" value='4'>Colocar no carrinho</a></div>
          </Card.Body>
        </Card>
        <div>
          <Button variant="link" className="buttonSupport" data-bs-toggle="tooltip" title="Suporte">
            <a href="https://api.whatsapp.com/send?phone=14155238886&text=Gostaria%20de%20fazer%20um%20orçamento!"><img src="../../../public/files/whatsapp.png" alt="" /></a>
          </Button>
        </div>
        
      </div>
    </div>
  );
}
export default Suporte;
