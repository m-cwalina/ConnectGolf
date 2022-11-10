import React from "react";
import { Outlet, Link } from "react-router-dom";
import Image from 'images/navbar-logo.png'
import { IoGolfOutline, IoPeopleOutline, IoReaderOutline, IoHomeOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";

export default function App3() {
  return (
    <>
      <div id="navigation">
        <div>
          <img className="logo" src={Image}></img>
        </div>
        <nav className="nav-links">
          <div className='nav-flex'>
            <div className="navbar-icon"><BsHouse /></div>
            <p className="nav-link"><a href={'/user'}>Home</a></p>
          </div>
          <div className='nav-flex'>
            <div className="navbar-icon"><IoGolfOutline /></div>
            <p className="nav-link"><Link to={`teesheet`}>TeeSheet</Link></p>
          </div>
          <div className='nav-flex'>
            <div className="navbar-icon"><IoPeopleOutline /></div>
            <p className="nav-link"><Link to={`members`}>Members</Link></p>
          </div>
          <div className='nav-flex'>
            <div className="navbar-icon"><IoReaderOutline /></div>
            <p className="nav-link"><Link to={`bookings`}>Bookings</Link></p>
          </div>
        </nav>
      </div>
      <div className='detail'>
        <Outlet />
      </div>
    </>
  )
}
