import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"
import React from 'react'

const Header = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path="/" key="header" element={<Home/>} />
          <Route path="/about" key="about" element={<About/>} />  
          <Route path="/service" key="service" element={<Services/>}/> 
          <Route path="/contact" key="about" element={<Contact/>} /> 
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Header
