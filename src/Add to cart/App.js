import React, { useState } from 'react'
import Cartitems from './Cartitems'
import Header from './Header'
import './header.css'

function App() {
    const [cart,setCart] = useState([])
  return (
     <>
     <Header  cart={cart}/>
    <Cartitems  cart={cart} setCart={setCart} />
     </>
  )
}

export default App