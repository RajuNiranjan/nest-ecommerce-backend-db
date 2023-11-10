import React from 'react'
import './CartRight.scss'
import GppGoodIcon from '@mui/icons-material/GppGood';

const CartRight = () => {
  return (
    <div className='cartRight'>
      <div className="cartRight-topConatiner">
        <div className="cartRight-topConatiner-price-details">
          <h3 className="cartRight-topConatiner-price-details-text">PRICE DETAILS</h3>
        </div>
        <div className="cartRight-topConatiner-info">
          <div className="cartRight-topConatiner-info-price">
            <div className="cartRight-topConatiner-info-price-left">
              <h3 className="cartRight-topConatiner-info-price-left-text">Price (1 item)</h3>
            </div>
            <div className="cartRight-topConatiner-info-price-right">
              <h3 className="cartRight-topConatiner-info-price-right-num">₹99,900</h3>
            </div>
          </div>
          <div className="cartRight-topConatiner-info-discount">
            <div className="cartRight-topConatiner-info-discount-left">
              <h3 className="cartRight-topConatiner-info-discount-left-text">Discount</h3>

            </div>
            <div className="cartRight-topConatiner-info-discount-right">
              <h3 className="cartRight-topConatiner-info-discount-right-num">− ₹4,910</h3>
            </div>
          </div>
          <div className="cartRight-topConatiner-info-delivery-charges">
            <div className="cartRight-topConatiner-info-delivery-charges-left">
              <h3 className="cartRight-topConatiner-info-delivery-charges-left-text">Delivery Charges</h3>
            </div>
            <div className="cartRight-topConatiner-info-delivery-charges-right">
              <h3 className="cartRight-topConatiner-info-delivery-charges-right-num">
                <span className="cartRight-topConatiner-info-delivery-charges-right-num-cross">₹40 </span> Free
              </h3>
            </div>
          </div>
        </div>
        <div className="cartRight-topConatiner-total-amount">
          <div className="cartRight-topConatiner-total-amount-left">
            <h3 className="cartRight-topConatiner-total-amount-left-text">Total Amount</h3>
          </div>
          <div className="cartRight-topConatiner-total-amount-right">
            <h3 className="cartRight-topConatiner-total-amount-right-num">₹94,990</h3>
          </div>
        </div>

        <div className="cartRight-topConatiner-saved">
          <p className="cartRight-topConatiner-saved-text">
            You will save <span className='cartRight-topConatiner-saved-text-span'>₹ 4,910</span> on this order
          </p>
        </div>
      </div>
      <div className="cartRight-bottomConatiner">
        <GppGoodIcon className='cartRight-bottomConatiner-gppGood-Icon' />
        <h3 className="cartRight-bottomConatiner-text">Safe and Secure Payments.Easy returns.100% Authentic products.</h3>
      </div>
    </div>
  )
}

export default CartRight
