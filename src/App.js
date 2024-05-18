import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from './pages/Home.page'
import NotFound from './components/NotFound'
import ProductPage from './pages/Product.page'
import BasketPage from './pages/Basket.page'
//import ProductPage from './pages/Product.component'
const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <ProductPage />,
        },
        {
          path: '/basket',
          element: <BasketPage />,
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