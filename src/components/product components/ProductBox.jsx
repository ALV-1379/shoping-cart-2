import React from 'react'
import { Link } from 'react-router-dom'

const ProductBox = ({ name, imageSrc, price , id }) => {
    return (
        <Link to={`product/${id}`}>
        <div className='bg-zinc-200 p-2 m-2 rounded-md max-w-2xl'>
            <img src={imageSrc} alt={name} />
            <h2 className='text-xl text-slate-900 font-bold	'>{name}</h2>
            <div className='flex justify-between mb-3'>
                <p className='text-emerald-800 font-bold	'>price </p>
                <p className='font-bold	'>${price}</p>
            </div>
            
                  </div>
        </Link>
    )
}

export default ProductBox