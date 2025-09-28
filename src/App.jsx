import React from 'react'
import Navbar from './components/Navbar'
import Benner from './components/pages/Benner'
import Category from './components/pages/Category'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Benner/>
      <Category/>
    </div>
  )
}

export default App