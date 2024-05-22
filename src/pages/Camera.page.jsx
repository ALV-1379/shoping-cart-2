import React from 'react'
import ProductBox from '../components/product components/ProductBox'
import { cameras } from '../constans/product'
import { useBasket } from '../store/basket'
export default function Camera() {
  /* const { addBasketItem } = useBasket((state) => state.actions)  */
  return (
    <div className='flex  justify-center flex-wrap'>
      {cameras.map((item) => {
        return <ProductBox {...item} key={item.id} /* addItem={()=>addBasketItem(item)} */ />
      })}
    </div>
  )
}