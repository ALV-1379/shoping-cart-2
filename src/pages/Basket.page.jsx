import React from 'react'
import { useBasket } from '../store/basket'
import BasketCard from '../components/Basket/BasketCard'

const BasketPage = () => {
    const { items, invoice } = useBasket((state) => state)
    const { removeBasketItem } = useBasket((state) => state.actions)
    return (
        <>
            {items.map((item) => {
                return <BasketCard {...item} key={item.id} removeItem={() => removeBasketItem(item)} />
            })}
            <h2 className='text-center text-4xl'>totalPrice : {invoice.totalPrice}</h2>
        </>
    )
}

export default BasketPage