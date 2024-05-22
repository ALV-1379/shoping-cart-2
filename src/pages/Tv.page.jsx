import React from 'react'
import { useBasket } from '../store/basket'
import ProductBox from '../components/product components/ProductBox'
import { Televisions } from '../constans/product'
export default function Tv() {
  const {addBasketItem}= useBasket((state) =>state.actions)
  return (
    <div className='flex justify-center flex-wrap'>
      {Televisions.map((item)=>{
        return <ProductBox {...item} key={item.id} addItem={()=>addBasketItem(item)}/>
      })}
    </div>
  )
}
