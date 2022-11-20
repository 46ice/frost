import Button from "react-bootstrap/Button";
function Header() {
    return(
        <div>
            
            <header >
            <div className="logo">
                <img className="img-logo" src="https://media.discordapp.net/attachments/807092416313688074/1042207300624068708/lg7.png" width="250vw" alt="frost logo"></img>
            </div>
            <div className="menu">
                <div>
                <ul className="menu-lista">
                    <li><a href="#sobre">Sobre nós</a></li>
                    <li><a href="#to-valores">Valores</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li><a href="/suporte">Suporte</a></li>
                    <li><a href="/vendas">Vendas</a></li>  
                </ul>
                </div>
                <div>
                    <Button variant="primary" href="login.html">Login</Button>
                </div>

            </div>

        </header>

        </div>
    )
}

export default Header;