import '../assets/home.css';

function Home() {

  const missao = document.querySelector('#missao');
const visao = document.querySelector('#visao');
const valores = document.querySelector('#valores');


function missaoTexto() { 
    missao.innerHTML = ('<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit Repudiandae obcaecati eaque illum?</p>');
 }

function visaoTexto() {
    visao.innerHTML = ('<p> Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit Repudiandae obcaecati eaque illum?');
 }

function valoresTexto() {
    valores.innerHTML = ('<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit Repudiandae obcaecati eaque illum?');
 }

function missaoTitulo() { 
    missao.innerHTML = ('<img class="icon" src="files/missao.png" alt="missao"> <h6>Missão </h6>');
  }

function visaoTitulo() { 
    visao.innerHTML = ('<img class="icon" src="files/visao.png" alt="visao"> <h6>Visão </h6>');
 }

function valoresTitulo() {
    valores.innerHTML = ('<img class="icon" src="files/valor.png" alt="valores"><h6>Valores</h6>');
}

//  missao.addEventListener('mouseenter', missaoTexto );
//  visao.addEventListener('mouseenter', visaoTexto);
//  valores.addEventListener('mouseenter', valoresTexto);
//  missao.addEventListener('mouseout', missaoTitulo);
//  visao.addEventListener('mouseout', visaoTitulo);
//  valores.addEventListener('mouseout', valoresTitulo);
  return (
    <div className="div-home">
      
      <div className="sobre" id="sobre">
        <h1 className="mb-5">Sobre nós</h1>
        <p>
        A Frost Technology tem como objetivo realizar atendimentos com a máxima excelência e competência, contamos com profissionais qualificados e com experiência na área.
        Prezamos sempre pela satisfação do cliente. Para que você se sinta sempre a vontade para retornar quando precisar.
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
            <div className="depoimento-div">

            <img
                  className="imagem"
                  src="../files/834-200x200.jpg"
                  alt="imagem autor"
                />
            <div className="depoimentos-conteudo-caixa-autor">
                
                <p className="nome-autor">Marcia Martins</p>
              </div>
              
              <div className='empresa'>Shell Company</div>

              <div className="depoimentos-conteudo-caixa-descrição">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae obcaecati eaque illum? Harum blanditiis deserunt.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                
                </p>
              </div>
              
            </div>
            <div className="depoimento-div">

              <img
                    className="imagem"
                    src="../files/834-200x200.jpg"
                    alt="imagem autor"
                  />
            <div className="depoimentos-conteudo-caixa-autor">
                
                <p className="nome-autor">Marcia Martins</p>
              </div>
              
              <div className='empresa'>Shell Company</div>

              <div className="depoimentos-conteudo-caixa-descrição">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae obcaecati eaque illum? Harum blanditiis deserunt.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                
                </p>
              </div>
              
            </div>
            <div className="depoimento-div">

              <img
                    className="imagem"
                    src="../files/834-200x200.jpg"
                    alt="imagem autor"
                  />
              <div className="depoimentos-conteudo-caixa-autor">
                  
                  <p className="nome-autor">Marcia Martins</p>
                </div>
                
                <div className='empresa'>Shell Company</div>

                <div className="depoimentos-conteudo-caixa-descrição">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae obcaecati eaque illum? Harum blanditiis deserunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  
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
