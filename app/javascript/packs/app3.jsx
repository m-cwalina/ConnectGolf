import React from "react";
import { Outlet, Link } from "react-router-dom";
import Image from 'images/navbar-logo.png'
import { IoPeopleOutline, IoPersonAddOutline, IoPersonCircleOutline } from "react-icons/io5";

export default function App3() {
  return(
    <>
      <div id="navigation">
        <div>
          <img className="logo" src={Image}></img>
        </div>
        <nav className="nav-links">
          <div className='nav-flex'>
            <div className="navbar-icon"><IoPeopleOutline /></div>
            <p className="nav-link"><Link to={`friends`}>Friends</Link></p>
          </div>
          <div className='nav-flex'>
            <div className="navbar-icon"><IoPersonAddOutline /></div>
            <p className="nav-link"><Link to={`pending_friends`}>Requests</Link></p>
          </div>
          <div className='nav-flex'>
            <div className="navbar-icon"><IoPersonCircleOutline /></div>
            <p className="nav-link"><Link to={`requested_friends`}>Sent</Link></p>
          </div>
        </nav>
      </div>
      <div className='detail'>
        <Outlet/>
      </div>
    </>
  )
}
