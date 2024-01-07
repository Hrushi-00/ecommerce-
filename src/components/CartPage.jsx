import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import CartList from "./CartList"
import "./CardPage.css";
const CartPage = () => {

  const cartItems = useSelector((store)=>store.cart.items)

  const dispatch = useDispatch()
  const handleClearCart = () =>{
          dispatch(clearCart())
  }

  return (
    <div style={{padding:"0 20px", marginLeft:"70px"}}>
    
    {cartItems.length ===0 ?
    <h1>Cart Is Empty</h1> :
    <button
    onClick={handleClearCart}
     className='clear-cart'>Clear Cart</button>
}
    <div>
         <CartList data={cartItems}/>
    </div>
    </div>
  )
}

export default CartPage