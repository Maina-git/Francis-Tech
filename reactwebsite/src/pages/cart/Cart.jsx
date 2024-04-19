import React from 'react'
import { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../context/ShopContext'
import { CartItem } from './CartItem'
import "./Cart.css"

import {useNavigate}  from "react-router-dom"

export const Cart=()=>{
const{ cartItems, getTotalCartAmount}=useContext(ShopContext);
const totalAmount=getTotalCartAmount();

const navigate=useNavigate();


    return <div className="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !==0){
                    return <CartItem data={product}/>
                }
            })}
        </div>
<p> Subtotal : ${totalAmount}</p>
<section>
<div className="checkout">
    <button onClick={()=>navigate("/")}>Continue Shopping</button>
    <button>Checkout</button>
        </div>

</section>
    </div>
}