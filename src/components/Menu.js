import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/menu.css';


const Menu = () => {
  return (
    <nav>
      <div className="logo"/>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
    </nav>
  )
}

export default Menu
