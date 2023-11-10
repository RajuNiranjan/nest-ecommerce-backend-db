import React, { useState } from 'react'
import './CartLeft.scss'
const CartLeft = () => {
  const [count, setCount] = useState(1);

  const Decrement = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1)
  }

  return (
    <div className='cartLeft'>
      <div className="cartLeft-top">
        <div className="cartLeft-top-img-container">
          <img className='cartLeft-top-img' src="https://rukminim2.flixcart.com/image/224/224/xif0q/computer/1/n/p/-original-imagfdfew8gszzhk.jpeg?q=90" alt="" />
        </div>
        <div className="cartLeft-top-info-container">
          <div className="cartLeft-top-info-container-top">
            <p className="cartLeft-top-info-container-top-model-text">APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS)</p>
            <p className="cartLeft-top-info-container-top-model-type">
              13.6 Inch, Silver, 1.24 Kg
            </p>
          </div>
          <div className="cartLeft-top-info-container-bottom">
            <p className="cartLeft-top-info-container-bottom-off-cost">₹1,14,900</p>
            <p className="cartLeft-top-info-container-bottom-org-cost">₹86,990</p>
            <p className="cartLeft-top-info-container-bottom-dis-cost">24% Off</p>
            <p className="cartLeft-top-info-container-bottom-offers">3 offers applied</p>
          </div>
        </div>
        <div className="cartLeft-top-delvery-container">
          <p className="cartLeft-top-delvery-date">Delivery by Thu Nov 9</p>
          <p className="cartLeft-top-delvery-free"> <span className='cartLeft-top-delvery-free-cost'>₹ 40 </span> Free</p>
        </div>
      </div>
      <div className="cartLeft-center">
        <div className="cartLeft-center-counter">
          <button className="cartLeft-center-counter-decress-btn" onClick={Decrement} >-</button>
          <h3 className="cartLeft-center-counter-num">{count}</h3>
          <button className="cartLeft-center-counter-incress-btn" onClick={() => setCount(count + 1)}>+</button>
        </div>
        <p className="cartLeft-center-save-later-text">save for later</p>
        <p className="cartLeft-center-remove">remove</p>
      </div>
      <div className="cartLeft-bottom">
        <button className="cartLeft-bottom-placeOrder-btn">place order</button>
      </div>
    </div >
  )
}

export default CartLeft


