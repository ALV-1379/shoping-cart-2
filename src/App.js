import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from './pages/Home.page'
import NotFound from './components/NotFound'
import Mobile from './pages/Mobile.page.jsx'
import BasketPage from './pages/Basket.page.jsx'
import Productspage from './pages/Products.page.jsx'
import Camera from './pages/Camera.page.jsx'
import Tv from './pages/Tv.page.jsx'
import Laptop from './pages/Laptop.page.jsx'
import MainProduct from './components/product components/MainProduct.jsx'
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path: "products",
          element: <Productspage />,
        },
        {
          path: 'basket',
          element: <BasketPage />,
        },
        {
          path: 'Mobiles',
          element: <Mobile />,
        },
        {
          path: "Camera",
          element: <Camera />
        },
        {
          path: "TV",
          element: <Tv />
        },
        {
          path: "Laptops",
          element: <Laptop />
        },
        {
          path: "Mobiles/product/:id",
          element: <MainProduct />
        },
        {
          path: "Camera/product/:id",
          element: <MainProduct />
        },
        {
          path: "Laptops/product/:id",
          element: <MainProduct />
        },
        {
          path: "TV/product/:id",
          element: <MainProduct />
        },
      ]
    },

    {
      path: '*',
      element: <NotFound />,
    }
  ])
  return (
    <div className='flex flex-col min-h-screen'>
      <div className=' flex-grow'>
        {routes}
      </div>
      <Footer />
    </div>
  )
}

export default App