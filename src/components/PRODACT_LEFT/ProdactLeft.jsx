import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './ProdactLeft.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const ProdactLeft = ({ productInfo }) => {

  const [imgs, setImg] = useState("")


  return (
    <>
      {
        productInfo?.map((e) => {
          return <div className='prodactLeft'>
            {console.log("productInfo from Left", productInfo)}
            <div className="prodactLeft-left">
              {
                e.smallImgs?.map((e) => {
                  return <img src={e.smallImg} alt="" className='prodactLeft-left-img' onMouseEnter={() => setImg(e.smallImg)} />
                })
              }
            </div>
            <div className="prodactLeft-right">
              <div className="prodactLeft-right-top">
                <FavoriteBorderIcon className='prodactLeft-right-top-fav-icon' />
              </div>
              <div className="prodactLeft-right-center">

                {productInfo && productInfo.length && productInfo[0].smallImgs?.length > 0 ? <>
                  {/* {console.log("I'm here..")} */}
                  <img src={imgs || productInfo[0].smallImgs[0].smallImg} alt="" className='prodactLeft-right-center-img' />
                </> : <>
                </>
                }
                {/* <img src={imgs} alt="" className='prodactLeft-right-center-img' /> */}
              </div>

              <div className="prodactLeft-right-bottom">
                <NavLink to={'/cart'} className='prodactLeft-right-bottom-addCart'
                // onClick={() => addToCart(e.id, e.off_cost, e.org_cost, e.itemName, productInfo)}
                >
                  <button className='prodactLeft-right-bottom-addCart' >
                    <ShoppingCartIcon className='prodactLeft-right-bottom-addCart-icon' />
                    add cart
                  </button>

                </NavLink>
                <button className='prodactLeft-right-bottom-buyNow'>
                  <FlashOnIcon className='prodactLeft-right-bottom-buyNow-icon' />
                  buy now
                </button>

              </div>
            </div>
          </div>
        })
      }
    </>
  )
}

export default ProdactLeft;
