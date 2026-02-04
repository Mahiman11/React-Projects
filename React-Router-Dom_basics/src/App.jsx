import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import AboutUs from './Pages/About'
import {Route, Routes} from 'react-router-dom'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div>
       
       <Nav />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Contact' element={<Contact />} />
       </Routes>

    </div>
  )
}

export default App

// yha toh hai tagda kaam -
// 1. Phle main.jsx pr BrowserRouter se wrap krdo App.jsx ko (after importing it from r-r-d)
// 2. Uske baad App.jsx par saare pages , navbar , route&routes import krlo
// 3. Path and element set krdena hai usme

       
       
