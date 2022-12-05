import React from 'react';
import "../../assets/cart.css";

export default function Chest() {

    return(
        <div className='cart'>
            <div className='row cart-title'>
                <i className="fa fa-shopping-cart col-md-1" aria-hidden="true"><div className='text'>CARRINHO</div></i>
            </div>
            <div className='cart-body'>
                <div className="row cart-body-title">
                    <div className='text col-md-10'>PRODUTOS</div>
                    <i className="fa fa-gift col-md-1" aria-hidden="true"></i>
                </div>
                <div className="cart-body-items-none"> 
                    <div className="products-none">
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                        <div className='text'>SEU CARRINHO ESTÁ VAZIO</div>
                    </div>
                    <a className="add-product"href="/suporte"><div>ADICIONE ALGUM PRODUTO</div></a>
                </div>
            </div>
        </div>
    )
}