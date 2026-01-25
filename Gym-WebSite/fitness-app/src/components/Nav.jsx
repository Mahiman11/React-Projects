import React from 'react'
import '../App.css'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">

        <div className="logo"><img src="Logo.png" alt="" /> MONTY GIM</div>
        
        <ul>
            <li>HOME</li>
            <li>PROGRAMS</li>
            <li>WHY US</li>
            <li>PLANS</li>
            <li>TESTIMONIALS</li>
        </ul>

    </div>
  )
}

export default Nav