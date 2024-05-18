import React from 'react'
import { useBasket } from '../store/basket'
import BasketCard from '../components/BasketCard'

const BasketPage = () => {
    const { items, invoice } = useBasket((state) => state)
    const { removeBasketItem } = useBasket((state) => state.actions)
    return (
        <>
            totalPrice : {invoice.totalPrice}
            {items.map((item) => {
                return <BasketCard {...item} key={item.id} removeItem={() => removeBasketItem(item)} />
            })}
        </>
    )
}

export default BasketPage