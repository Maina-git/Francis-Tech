import React from 'react'
import { PRODUCTS } from '../../Products'
import { Product } from './Product'
import "./Shop.css"
export const Shop=()=>{
    return <div className="shop">
        <h1 className="shopTitle">FrancisTech Shop</h1>
        <div className="products">
<div className="products">
    {PRODUCTS.map((product)=>
    <Product data={product}/>
    )
    }</div>
        </div>
    </div>
}
