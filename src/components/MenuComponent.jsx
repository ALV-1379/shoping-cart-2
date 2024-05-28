import React from 'react'
import { NavLink } from 'react-router-dom'
import { useBasket } from '../store/basket'

const MenuComponent = () => {
    const { items } = useBasket()
    const accumulatorItems = ((items) => items.reduce((sum, item) => sum + item.quantity, 0))
    const totalItems = accumulatorItems(items)
    return (
        <>
            <div className='bg-gray-900   p-5 flex justify-between'>

                <NavLink to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "text-gray-700" : isActive ? "text-blue-500" : "" 
                    }
                >Home</NavLink>
                <NavLink to='products'
                    className={({ isActive, isPending }) =>
                        isPending ? "text-gray-700" : isActive ? "text-blue-500" : ""
                    }
                >Product</NavLink>
                <NavLink to='/basket'
                    className={({ isActive, isPending }) =>
                        isPending ? "text-gray-700" : isActive ? "text-blue-500" : ""
                    }
                >Basket {totalItems}</NavLink>
            </div>
        </>
    )
}

export default MenuComponent