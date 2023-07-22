import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Productlist from '../Component/Productlist'
import ProductDetails from '../Component/ProductDetails'
import Cart from '../Component/Cart'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Productlist/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
    </div>
  )
}

export default MainRoute
