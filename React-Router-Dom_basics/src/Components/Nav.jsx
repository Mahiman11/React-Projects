import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
        <h3>Mahiman</h3>
        <div className="pages">
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav

// Yha par phle Link import kro uske baad anchr tag ki jagah Link use kro taki refresh na ho page baar baar, Phir isse parent page pr export kardo. 