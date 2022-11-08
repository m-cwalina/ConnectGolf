import React from "react";
import { Outlet, Link } from "react-router-dom";
import Image from 'images/navbar-logo.png'
import { IoGolf, IoPeopleSharp, IoReaderOutline } from "react-icons/io5";

export default function App3() {
  return (
    <>
      <div id="navigation">
        <div>
          <img className="logo" src={Image}></img>
        </div>
        <nav className="nav-links">
          <div className='nav-flex'>
            <div className="navbar-icon"><IoGolf /></div>
            <p className="nav-link"><Link to={`friends`}>TeeTime</Link></p>
          </div>
          <div className='nav-flex'>
            <div className="navbar-icon"><IoPeopleSharp /></div>
            <p className="nav-link"><Link to={`pending_friends`}>Members</Link></p>
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
