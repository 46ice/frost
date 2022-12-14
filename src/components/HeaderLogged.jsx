import { useNavigate } from "react-router-dom";

function HeaderLogged() {
    const navigate = useNavigate();
    const logOut = async e => {
        
        e.preventDefault();
        localStorage.clear();
        navigate("/logout");
      }

      

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
                <div className="btn-group btn-group-toggle">
                    <a className="btn btn-secondary btn-nav" href={"/chestfull"}><i className="fa fa-shopping-cart"></i></a>
                    <a className="btn btn-secondary btn-nav" onClick={logOut}><i class="fa fa-sign-out" aria-hidden="true"></i></a>    
                </div>
            </div>
        </header>
    )
}

export default HeaderLogged;