import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    
        <section className='Section-Navbar'>

        <Link className='Navbar-Links' to={"/Home"}>Home Page</Link>
        <Link className='Navbar-Links' to={"/ClassComponent"}>Class Page</Link>
        <Link className='Navbar-Links' to={"/About"}>About</Link>
        <Link className='Navbar-Links' to={"/Service"}>Service</Link>
        <Link className='Navbar-Links' to={"/classLifeCycle"}>classLifeCycle</Link>

        </section>

    </>
  )
}

export default Navbar