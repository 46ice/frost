
function HeaderLogged() {
    return(
        <header className="header-header">
            <div className="logo"><a href="/home"><img className="img-logo" src="https://media.discordapp.net/attachments/807092416313688074/1042207300624068708/lg7.png" width="250vw" alt="frost logo"></img></a></div>
            <div className="menu">
                <div>
                    <div className="menu-lista">
                        <div className="link"><a href="/home#sobre">SOBRE NÓS</a></div>
                        <div className="link"><a href="/home#to-valores">VALORES</a></div>
                        <div className="link"><a href="/home#depoimentos">DEPOIMENTOS</a></div>
                        <div className="link"><a href="/suporte">PRODUTOS</a></div>
                    </div>
                </div>
                <div class="btn-group btn-group-toggle">
                    <a class="btn btn-secondary btn-nav" href="/home"><i class="fa fa-home"></i></a>
                    <a class="btn btn-secondary btn-nav" href="/logout"><span class="material-symbols-outlined">logout</span></a>    
                </div>
            </div>
        </header>
    )
}

export default HeaderLogged;