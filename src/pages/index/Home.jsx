import "../../assets/home.css";
import React from 'react';

function Home() {
  

  return (
    <div className="div-home">
      <div className="sobre" id="sobre">
        <h1 className="mb-5">Sobre nós</h1>
        <p>
        A Frost Technology tem como objetivo realizar atendimentos com a máxima excelência e competência, contamos com profissionais qualificados e com experiência na área.
        Prezamos sempre pela satisfação do cliente. Para que você se sinta sempre a vontade para retornar quando precisar.
        Estamos aqui para melhorar a rapidez de atendimentos e suporte mantendo esse diferencial das outras empresas, sempre estando 100% focado em satisfazer nosso cliente. 
        </p>
        <p>
        A Frost não é só mais uma empresa, não é ísso que buscamos, o futuro está chegando, a era da tecnologia, a cada dia trazendo mais facilidade para atender e resolver os problemas de sua vida.
        </p>
      </div>
      <div className="conteudo">
        <div className="valores" id="to-valores">
          <div className="valores-conteudo">
            <div className="valores-conteudo-caixa" id="missao">
              <img className="icon" src="../files/missao.png" alt="missão" />
              <h6>Missão </h6>
              <br></br>
              <p> Nossa missão é capacitar todas as pessoas e organizações do planeta com a tecnologia mais e mais.</p>
            </div>
            <div className="valores-conteudo-caixa" id="visao">
              <img className="icon" src="../files/visao.png" alt="visão" />
              <h6>Visão </h6>
              <br></br>
              <p>Nos dedicamentos a desenvolver tecnologias inovadoras e processos eficientes que criam mercados e enriquecem as vidas das pessoas, fazendo da Frost um líder da tecnologia.</p>
            </div>
            <div className="valores-conteudo-caixa" id="valores">
              <img className="icon" src="../files/valor.png" alt="valores" />
              <h6>Valores</h6>
              <br></br>
              <p>Excelência, Integridade, Pessoas, Mudança, Co-Prosperidade</p>
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
            <div className="depoimento-div">
              <img
                className="imagem"
                src="https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1614314079/content-items/007/216/200/Thisperson-original.jpg?1614314079"
                alt="imagem autor"
              />
              <div className="nome-autor">Saulo Campos</div>
              <div className="empresa">Eletrolux</div>
              <div className="depoimentos-conteudo-caixa-descrição">
                <p>
                Com uma estrutura adequada, eficaz, rigorosamente selecionada e com um suporte perfeito, estamos felizes com a qualidade e precisão, onde a maior preocupação é a satisfação consumidor e isso foi feito.               
                </p>
              </div>
            </div>
            <div className="depoimento-div">
              <img
                className="imagem"
                src="https://images.iphonephotographyschool.com/24755/portrait-photography.jpg"
                alt="imagem autor"
              />
              <div className="nome-autor">Carla Kruv</div>
              <div className="empresa">BOSCH</div>
              <div className="depoimentos-conteudo-caixa-descrição">
                <p>
                Fica evidente que a empresa sempre se preocupa com seu trabalho e dedica um tempo para fazê-lo corretamente. Eu gostei especialmente do suporte rapido, sem falar que perguntou sobre suas preferências de tudo e cada detalhe antes de começar.
                </p>
              </div>
            </div>
            <div className="depoimento-div">
              <img
                className="imagem"
                src="https://photographypro.com/wp-content/uploads/2017/08/portrait-photography-focal-length-50mm-1.jpg"
                alt="imagem autor"
              />
              <div className="nome-autor">Maria Martins</div>
              <div className="empresa">Shell Company</div>
              <div className="depoimentos-conteudo-caixa-descrição">
                <p>
                  A Shell encontrou na Frost tudo que precisavamos, estamos sempre atualizados no meio da tecnologia, sempre com os melhores softwares em nossa rede, seja como coisas fisicas atualizadas ou mesmo dentro da nossa rede de computadores deixamos tudo na mão da Frost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
