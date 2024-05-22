import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuComponent from '../components/MenuComponent'



const HomePage = () => {
    return (
        <>
            <MenuComponent />
            <Outlet />
            
            
        </>
    )
}

export default HomePage