// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';

const Header = () => {


  // Selector used to read the data
  const cart = useSelector((store)=>store.cart.items)
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
        <span className="navbar-heading">Ecommerce</span>
        </Link>
      </div>
      <div className="navbar-right">
        <ul>
          
          <li><Link to="/productlist">Product</Link></li>
          <li><Link to="/cartpage"><AiOutlineShoppingCart/><span className='card'>{cart.length}</span></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
