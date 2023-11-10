import React from 'react'
import './ProdactRight.scss'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import PlaceIcon from '@mui/icons-material/Place';


const ProdactRight = ({ productInfo }) => {
  return (

    <>
      {
        productInfo?.map((e) => {
          return <div className='ProdactRight'>

            <div className="ProdactRight-top">
              <div className="ProdactRight-top-container-1">
                <h3 className="ProdactRight-top-container-1-text">{e.itemName}</h3>
                <ShareIcon className='ProdactRight-top-container-1-shareIcon' />
              </div>
              <div className="ProdactRight-top-container-2">
                <div className="ProdactRight-top-container-2-stars">
                  <p className="ProdactRight-top-container-2-star">{e.starts}</p>
                  <StarIcon className='ProdactRight-top-container-2-star-icon' />
                </div>
                <div className="ProdactRight-top-container-2-reviews">
                  <small className="ProdactRight-top-container-2-review">{e.rating} ratings & {e.reviews} Reviews</small>
                </div>
              </div>
              <div className="ProdactRight-top-container-3">
                <p className="ProdactRight-top-container-3-orgPri">₹ {e.org_cost}</p>
                <p className="ProdactRight-top-container-3-offPri">₹ {e.off_cost}</p>
                <small className="ProdactRight-top-container-3-dis">{e.dis} % off</small>
              </div>
              <div className="ProdactRight-top-container-4">
                <p className="ProdactRight-top-container-4-text">Available offers</p>
                {
                  e.offers?.map((e) => {
                    return <ul className='ProdactRight-top-container-4-ul'>
                      <li className='ProdactRight-top-container-4-li'><LocalOfferIcon className='ProdactRight-top-container-4-offIcon' />{e.off}</li>
                    </ul>
                  })
                }
              </div>
            </div>
            <div className="ProdactRight-center">
              <h3 className="ProdactRight-center-text">Specifications</h3>
              {
                e.general?.map((e) => {
                  return <div className="ProdactRight-center-container">
                    <section className='ProdactRight-center-container-section'>
                      <p className='ProdactRight-center-container-section-leftText'>{e.name}</p>
                      <p className='ProdactRight-center-container-section-rightText'>
                        {e.nameTag}</p>
                    </section>
                  </div>
                })
              }
            </div>
            <div className="ProdactRight-bottom">
              <div className="ProdactRight-bottom-container-1">
                <div className="ProdactRight-bottom-container-1-left">
                  <h3 className="ProdactRight-bottom-container-1-left-text">delivery</h3>
                </div>
                <div className="ProdactRight-bottom-container-1-right">
                  <PlaceIcon className='ProdactRight-bottom-container-1-right-place-icon' />
                  <p className="ProdactRight-bottom-container-1-right-text">enter delivery pincode</p>
                </div>
              </div>
              <div className="ProdactRight-bottom-container-2">
                <div className="ProdactRight-bottom-container-2-left_Container">
                  <div className="ProdactRight-bottom-container-2-left_Container-left">
                    <h3 className="ProdactRight-bottom-container-2-left_Container-left-text">
                      hightlights
                    </h3>
                  </div>
                  <div className="ProdactRight-bottom-container-2-left_Container-right">
                    {
                      e.hilights?.map((e) => {
                        return <ul className='ProdactRight-bottom-container-2-left_Container-right-ul'>
                          <li className='ProdactRight-bottom-container-2-left_Container-right-li'>
                            &bull;  {e.hilight}.
                          </li>
                        </ul>
                      })
                    }
                  </div>
                </div>
                <div className="ProdactRight-bottom-container-2-right_Container">
                  <div className="ProdactRight-bottom-container-2-right_Container-left">
                    <h3 className="ProdactRight-bottom-container-2-right_Container-left-text">
                      Easy Payment Options
                    </h3>
                  </div>
                  <div className="ProdactRight-bottom-container-2-right_Container-right">
                    {
                      e.epos?.map((e) => {
                        return <ul className='ProdactRight-bottom-container-2-right_Container-right-ul'>
                          <li className='ProdactRight-bottom-container-2-right_Container-right-li'>
                            &bull; {e.epo}.
                          </li>
                        </ul>
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="ProdactRight-bottom-container-3">
                <div className="ProdactRight-bottom-container-3-left">
                  <h3 className="ProdactRight-bottom-container-3-left-text">description</h3>
                </div>
                <div className="ProdactRight-bottom-container-3-right">
                  <p className="ProdactRight-bottom-container-3-right-text">{e.description}</p>
                </div>
              </div>
            </div>
          </div>
        })
      }
    </>
  )
}

export default ProdactRight;
