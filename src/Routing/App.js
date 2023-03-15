import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Error from './Error'
import "./Routing.css"
function App() {
  return (
    <>


    <BrowserRouter>

   
    <Header/>

    <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/Contact" element={<Contact/>}></Route>
        <Route  path="/Services" element={<Services/>}></Route>
        <Route  path="/Header" element={<Header/>}></Route>
        <Route  path="/Blog" element={<Blog/>}></Route>
        <Route  path="/About" element={<About/>}></Route>
        <Route  path="*" element={"Error.js"}></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App