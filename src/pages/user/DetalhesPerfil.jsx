import React from 'react';
import '../../assets/profile.css';

export default function DetalhesPerfil() {
  return(
  <div className='row'>
    <div className='col-md-4'>

      <div className='profile-picture'>
        <div className='avatar'>
          <div className='avatar-img'><div className='alter-photo'><span className="material-symbols-outlined">add_a_photo</span></div></div>
          <div className='username'>@suelenoc</div>
        </div>
      </div>
    </div>

      <div className='information col-md-8'>
        <div className='infos'>
          <p className='title'>MEU PERFIL</p>
          <div className='chest-user'><span className="material-symbols-outlined">shopping_basket</span></div>
        </div>

      
        <div className='name-user'><p>Suelen Carvalho</p></div>

        <div className='contact-info'>
          <div className="email"><p>su@gmail.com</p></div>
          <div className="telephone"><p>(41) 99999-9999</p></div>
        </div>

        <p className='title'>MINHAS COMPRAS</p>
        <div className='buys-user'>
          <div className="buy-id">Id: 1</div> 
          <div className="buy-date">Data: 22/12/2022</div>
          <div className="buy-value">Valor: 598,92</div>
          <div className="buy-assurance">Comprante</div>
        </div>

        <div className='buys-user'>
          <div className="buy-id">Id: 1asds</div> 
          <div className="buy-date">Data: 22/12/2022</div>
          <div className="buy-value">Valor: 598,92</div>
          <div className="buy-assurance">Comprante</div>
        </div>

        <div className='buys-user'>
          <div className="buy-id">Id: 1</div> 
          <div className="buy-date">Data: 22/12/2022</div>
          <div className="buy-value">Valor: 598,92</div>
          <div className="buy-assurance">Comprante</div>
        </div>

      

        </div>
        <div className='delete-account'></div>
      </div>
    
    
      
      
      
   
  );
}