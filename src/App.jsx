import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Orders from './pages/Orders'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </>
  )
}

export default App