import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from './pages/Home.page'
import NotFound from './components/NotFound'
import Mobile from './pages/Mobile.page.jsx'
import BasketPage from './pages/Basket.page.jsx'
import Productspage from './pages/Products.page.jsx'
//import ProductPage from './pages/Product.component'
const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path : "product",
          element : <Productspage/>,
        },
        {
          path: 'basket',
          element: <BasketPage />,
        },
        {
          path: 'Mobiles',
          element: <Mobile />,
        },
      ]
    },
    
    {
      path: '*',
      element: <NotFound />,
    }
  ])
  return (
    <>
      {routes}
      {/* <Routes>
        <Route path='/' element={<HomePage />} >
           <Route path='categories' element={<CategoriesPage />} /> 
          <Route path='product' element={<ProductPage />} /> 

        </Route>

        <Route path='/post/:id' element={<PostPage />} />

        <Route path='*' element={<NotFound />} />
      </Routes> */}
    </>
  )
}

export default App