import React from 'react'
import { Link } from 'react-router-dom' 
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">My Website</div>
        <ul className="nav-links">
        <li><Link to="/todolist  "> TodoList </Link></li>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/about"> About </Link></li>
          <li><Link to="/product"> Product </Link></li>
          <li><Link to="/gallery"> Gallery </Link></li>
          <li><Link to="/contact  "> Contact </Link></li>
          <li><Link to="/RegistrationForm"> RegistrationForm </Link></li>
          <li><Link to="/Resume  "> Resume </Link></li>
          <li><Link to="/Users  "> Users </Link></li>
          <li><Link to="/BusinessCardCall  "> BusinessCards </Link></li>
          <li><Link to="/Firebase  "> Firebase </Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
