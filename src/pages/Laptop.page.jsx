import React from 'react'
import { useBasket } from '../store/basket'
import { laptops } from '../constans/product'
import ProductBox from '../components/product components/ProductBox'
export default function Laptop() {
  const { addBasketItem } = useBasket((state) => state.actions)
  return (
    <div className='flex justify-center flex-wrap'>
      {laptops.map((item) => {
        return <ProductBox key={item.id} {...item} addItem={() => addBasketItem(item)} />
      })}
    </div>
  )
}
