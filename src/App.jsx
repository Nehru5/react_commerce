import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Orders from './pages/Orders'
import ProductDetails from './pages/ProductDetails'

import Billing from './pages/Billing'
import Success from './pages/Success'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/product_details/:id' element={<ProductDetails/>}/>
        <Route path='/billing/:id' element={<Billing/>}/>
        <Route path='/success' element = {<Success/>}/>
      </Routes>
    </>
  )
}

export default App
