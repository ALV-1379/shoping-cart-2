import React from 'react'
import { Outlet } from 'react-router-dom'
// import MenuComponent from '../components/MenuComponent'
import Home from '../components/Home'
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