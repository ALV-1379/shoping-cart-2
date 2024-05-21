import React from 'react'
import Mobiles from '../constans/product'
import ProductBox from '../components/ProductBox'
import { useBasket } from '../store/basket'
const Mobile = () => {
    const { addBasketItem } = useBasket((state) => state.actions)
    return (
        <div className='flex flex-wrap justify-center'>
            {Mobiles.map(item => <ProductBox addItem={() => addBasketItem(item)} key={item.id}
                {...item} />)}
        </div>
    )
}

export default Mobile