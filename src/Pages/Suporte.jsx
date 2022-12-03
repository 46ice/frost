import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import '../assets/support.css';

function Suporte() {
  return (
    <div className="suporte-back">
       <div className="produto"><p>Dê uma olhada em nossos produtos!</p></div>
      <div className="suporte conteudo-suporte"> 
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/files/hardware.jpg" />
        <Card.Body>
          <Card.Title>HARDWARE</Card.Title>
          <Card.Text>
            Somos uma empresa impar no mercado atual, com o diferencial de estar
            presente em todos os meios para suporte de hardware para a sua
            necessidade e de sua empresa.
          </Card.Text>
          
          <div className="contrate"><a href="https://api.whatsapp.com/send?phone=14155238886&text=Gostaria%20de%20fazer%20um%20orçamento!" target="_blank">Contrate</a></div>
          
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
          <div className="contrate"><a href="https://api.whatsapp.com/send?phone=14155238886&text=Gostaria%20de%20fazer%20um%20orçamento!" target="_blank">Contrate</a></div>
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
          
          <div className="contrate"><a href="https://api.whatsapp.com/send?phone=14155238886&text=Gostaria%20de%20fazer%20um%20orçamento!" target="_blank">Contrate</a></div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/files/segurança.jpg" />
        <Card.Body>
          <Card.Title>SEGURANÇA</Card.Title>
          <Card.Text>
            Segrança total ao seu comptador, seja ele pessoal ou empresarial no
            qual configuramos e instalamos Servidores, Firewall e Anti-virus
            implementando sempre a melhor opção e solução para sua empresa.
          </Card.Text>
          <div className="contrate">  <a href="https://api.whatsapp.com/send?phone=14155238886&text=Gostaria%20de%20fazer%20um%20orçamento!" target="_blank">Contrate</a></div>
        </Card.Body>
      </Card>
    </div>
  </div>
  );
}
export default Suporte;
