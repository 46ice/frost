import React from 'react';
import "../../assets/cart.css";

export default function ChestWithProduct() {
 
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
                <div className=" product-chest">
                    <div className="product-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>
                    <div className='product-details'>
                        <div className="product-name">HARDWARE</div>
                        <div className="product-description">Hardware para a sua necessidade e de sua empresa.</div>
                        <div className="product-name">Valor: 1.599,00</div>
                    </div>
                </div>
                <div className=" product-chest">
                    <div className="product-icon"><i class="fa fa-lock" aria-hidden="true"></i></div>
                    <div className='product-details'>
                        <div className="product-name">SEGURANÇA</div>
                        <div className="product-description">Segrança total para você, tanto pessoal ou empresarial.</div>
                        <div className="product-name">Valor: 3.099,00</div>
                    </div>
                </div>
                <div className="total">Total: 4.698,00 </div>
                <a href="https://mpago.la/13avQYy" className="btn-pix">PAGUE COM PIX</a>
                
            </div>
        </div> 
    
    )
}