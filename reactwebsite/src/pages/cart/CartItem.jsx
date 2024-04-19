import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export  function CartItem(props) {


const {id, productName, price, productImage}=props.data;
const {cartItems, addToCart, removeFromCart, updateCartItemCount}=useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="decription">
        <p>
            <b>{productName}</b>
        </p>
        <p>{price}</p>
        <div className="countHandler">
            <button className='button' onClick={()=>removeFromCart(id)}>-</button>
            <input className="input" value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
            <button className="button" onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}


