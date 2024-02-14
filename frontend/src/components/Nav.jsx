import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  const navUl = useRef(null);
  const burgerItemOne = useRef(null);
  const burgerItemTwo = useRef(null);
  const burgerItemThree = useRef(null);

  const burgerClick = () => {
    navUl.current.classList.toggle("swipNavUl");
    burgerItemOne.current.classList.toggle("animateBIOne");
    burgerItemTwo.current.classList.toggle("animateBITwo");
    burgerItemThree.current.classList.toggle("animateBIThree");
  }

  return (
    <nav className='navBar'>
      <div className="navHalf">
        <div className="navLogoDiv">
          <h1 className="navLogo">logo</h1>
        </div>
      </div>
      <div className="navHalf navHalfRight">
        <ul className="navUl" ref={navUl}>
          <li className="navItems">
            <NavLink className="navLink" to="/">Home</NavLink>
          </li>
          <li className="navItems">
            <NavLink className="navLink" to="/products">Products</NavLink>
          </li>
          <li className="navItems">
            <NavLink className="navLink" to="/about">About</NavLink>
          </li>
        </ul>
        <div className="burger" onClick={burgerClick}>
          <span className="burgerItem" ref={burgerItemOne}></span>
          <span className="burgerItem" ref={burgerItemTwo}></span>
          <span className="burgerItem" ref={burgerItemThree}></span>
        </div>
      </div>
    </nav>
  )
}

export default Nav