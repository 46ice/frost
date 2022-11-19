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
          <a href="index.html">Home</a>
          <a href="portifolio.html">Portifólio</a>
          <a href="contato.html">Contatos</a>
          <a href="contato.html">Formulário de Contato</a>
        </div>
        <div className="footer-conteudo-caixa">
          <h6>CONTATOS</h6>
          <a href="https://www.google.com/">Email</a>
          <a href="https://www.google.com/">Telefone</a>
          <a href="https://www.google.com/">WhatsApp</a>
        </div>
        <div className="footer-conteudo-caixa">
          <h6>SIGA-NOS</h6>
          <div className="redes-sociais">
            <a
              href="https://www.instagram.com/frost.technology/"
            >
              <img
                className="icon"
                src="../files/icons8-instagram-old-24.png"
                alt="instagram"
              />
            </a>
            <a href="https://www.google.com/">
              <img
                className="icon"
                src="../files/icons8-twitter-24.png"
                alt="twitter"
              />
            </a>
            <a href="https://www.google.com/">
              <img
                className="icon"
                src="../files/icons8-linkedin-24.png"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <div className="footer-to-top">
          <a href="https://www.google.com/"> ^ </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p> Copyright © Frost. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
