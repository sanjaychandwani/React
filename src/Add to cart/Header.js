import React from 'react'

function Header({cart}) {
  return (
    <>
    <header>
        <h1>E-Commerce</h1>

        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Cart<span>{cart.length}</span></a></li>
        </ul>
    </header>
    </>
  )
}

export default Header