
function Header() {
    return(
    
            
            <header className="header-header">
            <div className="logo"><a href="http://localhost:5173/home"><img className="img-logo" src="https://media.discordapp.net/attachments/807092416313688074/1042207300624068708/lg7.png" width="250vw" alt="frost logo"></img></a></div>
            <div className="menu">
                <div>
                    <div className="menu-lista">
                        <div className="link"><a href="http://localhost:5173/home#sobre">SOBRE NÓS</a></div>
                        <div className="link"><a href="http://localhost:5173/home#to-valores">VALORES</a></div>
                        <div className="link"><a href="http://localhost:5173/home#depoimentos">DEPOIMENTOS</a></div>
                        <div className="link"><a href="http://localhost:5173/suporte">SUPORTE</a></div>
                        <div className="link"><a href="/vendas">VENDAS</a></div>  
                    </div>
                </div>
                <div class="btn-group btn-group-toggle">
                    <a class="btn btn-secondary btn-nav" href="http://localhost:5173/home"><i class="fa fa-home"></i></a>
                    <a class="btn btn-secondary btn-nav" href="http://localhost:5173/login"><i class="fa fa-sign-in"></i></a>    
                </div>
            </div>
        </header>
    )
}

export default Header;