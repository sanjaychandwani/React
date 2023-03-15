import { BrowserRouter , Routes, Route } from 'react-router-dom'
import React, { createContext, useState } from 'react'
import Header from "./Header"
import Blog from './Blog'
import Login from './Login'
import About from './About'
import Register from './Register'
import './context.css'
export const blogContext = createContext(null)

function App() {
    let [form,setFormDetails] = useState({})
    return (
        
        <>
        <blogContext.Provider value={{form ,setFormDetails}}>

            <BrowserRouter>

                <Header />

                <Routes>
                    <Route path="/" element={<Blog />}></Route>
                    <Route path="/Blog" element={<Blog />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/Register" element={<Register />}></Route>
                    <Route path="*" element={"Error.js"}></Route>
                </Routes>

            </BrowserRouter>
        </blogContext.Provider>

        </>
    )
}

export default App