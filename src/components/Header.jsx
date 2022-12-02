import Button from "react-bootstrap/Button";
function Header() {
    return(
    
            
            <header className="header-header">
            <div className="logo"><a href="http://localhost:5173/home"><img className="img-logo" src="https://media.discordapp.net/attachments/807092416313688074/1042207300624068708/lg7.png" width="250vw" alt="frost logo"></img></a></div>
            <div className="menu">
                <div>
                    <ul className="menu-lista">
                        <li><a href="#sobre">SOBRE NÓS</a></li>
                        <li><a href="#to-valores">VALORES</a></li>
                        <li><a href="#depoimentos">DEPOIMENTOS</a></li>
                        <li><a href="http://localhost:5173/suporte">SUPORTE</a></li>
                        <li><a href="/vendas">VENDAS</a></li>  
                    </ul>
                </div>
                <div>
                    <button type="button" className="btn button-login" href="http://localhost:5173/login">LOGIN</button>
                </div>
            </div>
        </header>
    )
}

export default Header;