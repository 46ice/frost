import React from 'react';
import "../../assets/cart.css";
import { useState, useEffect } from 'react';

export default function ChestWithProduct() {

    const [apiState, setApiState] = useState();

    const chest = "/chest/" + localStorage.id;
    useEffect(() => {
    (async () => {
        
        const api = await fetch('http://localhost:8080/frost/product/all').then(e => e.json());
        setApiState(api);
    })()
    }, []);
 
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
                    <div className="products-none">s
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                        <div className='text'></div> 
                    </div> 
                    <a className="add-product"href="/suporte"><div>ADICIONE ALGUM PRODUTO</div></a>
                    {apiState ? <div>{apiState.products.map((e) => (<div>{e.name}</div>))}</div> : 'Blabla'}
                </div>
            </div>
        </div> 
        // </div>
    )
}