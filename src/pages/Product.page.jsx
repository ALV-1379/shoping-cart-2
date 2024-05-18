import React from 'react'
import products from '../constans/product'
import Product from '../components/Product'
import { useBasket } from '../store/basket'
const ProductPage = () => {
    const { addBasketItem } = useBasket((state) => state.actions)
    return (
        <div className='flex flex-wrap justify-center'>
            {products.map(item => <Product addItem={() => addBasketItem(item)} key={item.id}
                {...item} />)}
        </div>
    )
}

export default ProductPage