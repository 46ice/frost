function Footer() {
  return (
    <footer>
      <div className="footer-conteudo">
        <div className="footer-logo">
          <img
            className="img-logo m-5"
            src="https://media.discordapp.net/attachments/807092416313688074/1042207300624068708/lg7.png"
            alt=""
          />
        </div>
        <div className="footer-conteudo-caixa">
          <h6>MAPA DO SITE</h6>
          <a href="/home">Home</a>
          <a href="/suporte">Produtos</a>
          <a href="/register">Cadastre-se</a>
        </div>
        <div className="footer-conteudo-caixa">
          <h6>CONTATOS</h6>
          <a href="mailto:thiago.t46t@gmail.com">Email</a>
          <a href="tel:+5541987748330">Telefone</a>
          <a href="https://api.whatsapp.com/send?phone=5541987748330&text=Gostaria%20de%20fazer%20um%20orçamento!">WhatsApp</a>
        </div>
        <div className="footer-conteudo-caixa">
          <h6>SIGA-NOS</h6>
          <div className="redes-sociais">
            <a
              href="https://www.instagram.com/frost.technology/" target="_blank"
            >
              <img
                className="icon"
                src="../files/icons8-instagram-old-24.png"
                alt="instagram"
              />
            </a>
            <a href="https://twitter.com/46_frost" target="_blank">
              <img
                className="icon"
                src="../files/icons8-twitter-24.png"
                alt="twitter"
              />
            </a>
            <a href="https://www.linkedin.com/in/thiago-oliveira-b99425206/" target="_blank">
              <img
                className="icon"
                src="../files/icons8-linkedin-24.png"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p> Copyright © Frost. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
