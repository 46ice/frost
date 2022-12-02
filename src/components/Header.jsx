import Button from "react-bootstrap/Button";
function Header() {
    return(
        <div>
            
            <header className="header-header">
            <div className="logo">
                <a href="http://localhost:5173/home"><img className="img-logo" src="https://media.discordapp.net/attachments/807092416313688074/1042207300624068708/lg7.png" width="250vw" alt="frost logo"></img></a>
            </div>
            <div className="menu">
                <div>
                <ul className="menu-lista">
                    <li><a href="#sobre">Sobre nós</a></li>
                    <li><a href="#to-valores">Valores</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li><a href="http://localhost:5173/suporte">Suporte</a></li>
                    <li><a href="/vendas">Vendas</a></li>  
                </ul>
                </div>
                <div>
                    <Button classname="buttons" variant="primary" href="http://localhost:5173/login">Login</Button>
                </div>

            </div>

        </header>

        </div>
    )
}

export default Header;