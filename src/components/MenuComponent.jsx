import React from 'react'
import { NavLink } from 'react-router-dom'
import { useBasket } from '../store/basket'

const MenuComponent = () => {
    const { items } = useBasket()
    const accumulatorItems = ((items) => items.reduce((sum, item) => sum + item.quantity, 0))
    const totalItems = accumulatorItems(items)
    return (
        <>
            <div className='bg-sky-100 p-5 flex justify-between'>

                <NavLink to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "text-gray-700" : isActive ? "text-blue-500" : "" 
                    }
                >home</NavLink>
                <NavLink to='products'
                    className={({ isActive, isPending }) =>
                        isPending ? "text-gray-700" : isActive ? "text-blue-500" : ""
                    }
                >product</NavLink>
                <NavLink to='/basket'
                    className={({ isActive, isPending }) =>
                        isPending ? "text-gray-700" : isActive ? "text-blue-500" : ""
                    }
                >basket {totalItems}</NavLink>
            </div>
        </>
    )
}

export default MenuComponent