import React from 'react'
import './Prodact.scss'
import ProdactLeft from '../../components/PRODACT_LEFT/ProdactLeft'
import ProdactRight from '../../components/PRODACT_RIGHT/ProdactRight'
import { useParams } from 'react-router-dom'
import { NEWLIST } from '../../data/Data'

const Prodact = () => {

  const { id: productId } = useParams()

  const getProductInfo = (id) => {
    for (let index = 0; index < NEWLIST.length; index++) {
      const category = NEWLIST[index];
      for (let i = 0; i < category.items.length; i++) {
        const element = category.items[i];
        if (element.id === parseInt(id)) {
          return element.moreInfo
        }

      }

    }
    return {}
  }


  return (
    <div className='prodact'>
      {console.log("Ok..", useParams(), "productId", productId, "ProductData", getProductInfo(productId))}
      <div className="prodact-left">
        <ProdactLeft productInfo={getProductInfo(productId)} />
      </div>
      <div className="prodact-right">
        <ProdactRight productInfo={getProductInfo(productId)} />
      </div>
    </div >
  )
}

export default Prodact
