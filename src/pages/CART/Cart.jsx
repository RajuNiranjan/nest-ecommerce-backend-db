import React from 'react'
import './Cart.scss'
import CartLeft from '../../components/CART_LEFT/CartLeft'
import CartRight from '../../components/CART_RIGHT/CartRight'

const Cart = () => {
  return (
    <div className='cart'>
      <div className="cart-left">
        <CartLeft />
       
      </div>
      <div className="cart-right">
        <CartRight />
      </div>
    </div>
  )
}

export default Cart
