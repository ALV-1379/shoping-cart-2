import React from 'react'
import { useBasket } from '../store/basket'
import BasketCard from '../components/Basket/BasketCard'
import { Button } from '@mui/material'

const BasketPage = () => {
    const { items, invoice } = useBasket((state) => state)
    const { removeBasketItem } = useBasket((state) => state.actions)
    const { clearall } = useBasket((state) => state.actions)
    return (
        <>
            {items.map((item) => {
                return <BasketCard {...item} key={item.id} removeItem={() => removeBasketItem(item)} />
            })}
            
            <h2 className='text-center text-4xl'>totalPrice : {invoice.totalPrice}</h2>
            {items.length > 0 && <div className='flex justify-center'>
            <button onClick={()=>clearall()} class="bg-red-500 m-auto hover:bg-red-700 text-white font-bold py-2  px-4 rounded-full">
                clear all 
            </button>
            </div>}
        </>
    )
}

export default BasketPage