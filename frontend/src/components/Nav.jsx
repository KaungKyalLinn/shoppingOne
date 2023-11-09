import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navBar'>
      <div className="navHalf">
        <div className="navLogoDiv">
          <h1 className="navLogo">logo</h1>
        </div>
      </div>
      <div className="navHalf">
        <ul className="navUl">
          <li className="navItems">
            <Link className="navLink" to="/">Home</Link>
          </li>
          <li className="navItems">
            <Link className="navLink" to="/products">Products</Link>
          </li>
          <li className="navItems">
            <Link className="navLink" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav