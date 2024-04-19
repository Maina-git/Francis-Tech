import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navicon">
      </div>
        <div className="Links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
            <img width={"32px"} src="/images/shopping-cart-304843_640.webp" alt="" />
        </Link>
        </div>
    </div>
  )
}

export default Navbar;

