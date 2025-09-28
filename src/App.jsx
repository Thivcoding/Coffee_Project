import React from 'react'
import Navbar from './components/Navbar'
import Benner from './components/pages/Benner'
import Category from './components/pages/Category'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProdcutDrinks from './components/pages/ProdcutDrinks'
import ProductFoods from './components/pages/ProductFoods'
import ProductDesserts from './components/pages/ProductDesserts'
import ProductOthers from './components/pages/ProductOthers'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            {/* home page */}
            <Route path='/' element={
                    <div>
                      <Benner/>
                      <Category/>
                   </div>}/>
             {/* home page */}
            <Route path='/home' element={
                    <div>
                      <Benner/>
                      <Category/>
                   </div>} />
            
            {/* Product Drink */}
            <Route path='/prodcutDrink' element={<ProdcutDrinks/>}/>
            {/* Product Foods */}
            <Route path='/prodcutFoods' element={<ProductFoods/>}/>
            {/* Product Desserts */}
            <Route path='/ProductDesserts' element={<ProductDesserts/>}/>
            {/* Product Others */}
            <Route path='/ProductOthers' element={<ProductOthers/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App