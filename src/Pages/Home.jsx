import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />

      <div className="sobre" id="sobre">
        <h1 className="mb-5">Sobre nós</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          distinctio, totam, excepturi voluptas tempora blanditiis sed aliquid
          nemo quae, quis rem nulla! Enim architecto in molestias numquam
          maiores laborum earum. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Cumque eveniet veniam quidem, quas quisquam quo
          excepturi unde quam quos ab fuga, repellat veritatis cum at, itaque
          assumenda nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eum distinctio, totam, excepturi voluptas tempora blanditiis sed
          aliquid nemo quae, quis rem nulla! Enim architecto in molestias
          numquam maiores laborum earum. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Cumque eveniet veniam quidem, quas quisquam quo
          excepturi unde quam quos ab fuga, repellat veritatis cum at, itaque
          assumenda nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eum distinctio, totam, excepturi voluptas tempora blanditiis sed
          aliquid nemo quae, quis rem nulla! Enim architecto in molestias
          numquam maiores laborum earum. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Cumque eveniet veniam quidem, quas quisquam quo
          excepturi unde quam quos ab fuga, repellat veritatis cum at, itaque
          assumenda nesciunt?
        </p>
      </div>
      <div className="conteudo">
        <div className="valores" id="to-valores">
          <div className="valores-conteudo">
            <div className="valores-conteudo-caixa" id="missao">
              <img className="icon" src="../files/missao.png" alt="missão" />
              <h6>Missão </h6>
            </div>

            <div className="valores-conteudo-caixa" id="visao">
              <img className="icon" src="../files/visao.png" alt="visão" />
              <h6>Visão </h6>
            </div>
            <div className="valores-conteudo-caixa" id="valores">
              <img className="icon" src="../files/valor.png" alt="valores" />
              <h6>Valores</h6>
            </div>
          </div>
        </div>
        <div className="depoimentos" id="depoimentos">
          <h1>Depoimentos</h1>
          <p>
            Muitos de nossos clientes estão entusiasmados com o serviço que
            prestamos.
            <br />
            Leia oque alguns disseram sobre nós:
          </p>
          <div className="depoimentos-conteudo">
            <div className="depoimentos-conteudo-caixa">
              <div className="depoimentos-conteudo-caixa-empresa">
                <img
                  className="imagem"
                  src="../files/834-200x200.jpg"
                  alt="logo empresa"
                />
                <p className="nome-empresa"> Nome empresa</p>
              </div>
              <div className="depoimentos-conteudo-caixa-descrição">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae obcaecati eaque illum? Harum blanditiis deserunt.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores natus veritatis accusantium ab vero, fugit eos ipsum,
                  sit modi aut quos, minima reiciendis dicta laborum ex aperiam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ea consequuntur, dolore perspiciatis similique eaque
                  eveniet amet non illum saepe praesentium harum nihil neque.
                </p>
              </div>
              <div className="depoimentos-conteudo-caixa-autor">
                <img
                  className="imagem"
                  src="../files/834-200x200.jpg"
                  alt="imagem autor"
                />
                <p className="nome-autor"> Nome autor</p>
              </div>
            </div>
            <div className="depoimentos-conteudo-caixa">
              <div className="depoimentos-conteudo-caixa-empresa">
                <img
                  className="imagem"
                  src="../files/834-200x200.jpg"
                  alt="logo empresa"
                />
                <p className="nome-empresa"> Nome empresa</p>
              </div>
              <div className="depoimentos-conteudo-caixa-descrição">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae obcaecati eaque illum? Harum blanditiis deserunt.
                </p>
              </div>
              <div className="depoimentos-conteudo-caixa-autor">
                <img
                  className="imagem"
                  src="../files/834-200x200.jpg"
                  alt="imagem autor"
                />
                <p className="nome-autor"> Nome autor</p>
              </div>
            </div>
            <div className="depoimentos-conteudo-caixa">
              <div className="depoimentos-conteudo-caixa-empresa">
                <img
                  className="imagem"
                  src="../files/834-200x200.jpg"
                  alt="logo empresa"
                />
                <p className="nome-empresa"> Nome empresa</p>
              </div>
              <div className="depoimentos-conteudo-caixa-descrição">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae obcaecati eaque illum? Harum blanditiis deserunt.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis quidem, ducimus magni perspiciatis quos facere rem
                  dolor pariatur animi nam officiis sequi quod dignissimos illo.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quas, odio. Placeat maiores aliquam natus aliquid amet, ab
                  possimus.
                </p>
              </div>
              <div className="depoimentos-conteudo-caixa-autor">
                <img
                  className="imagem"
                  src="../files/834-200x200.jpg"
                  alt="imagem autor"
                />
                <p className="nome-autor"> Nome autor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
