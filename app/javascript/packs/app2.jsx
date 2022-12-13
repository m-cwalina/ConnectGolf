import React from "react";
import { Outlet, Link } from "react-router-dom";
import Image from 'images/navbar-logo.png'
import { IoSearchCircleOutline, IoPersonCircleOutline, IoPeopleCircleOutline, IoTrendingUpSharp } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";

export default function App2() {
  return(
    <>
      <div id="navigation">
        <div>
          <img className="logo" src={Image}></img>
        </div>
        <nav className="nav-links">
          <div className='nav-flex'>
            <div className="navbar-icon" style={{'font-size': '2rem'}}><BsHouse /></div>
            <p className="nav-link"><a href={'/user'}>Home</a></p>
          </div>
          <div className='nav-flex'>
            <div className="navbar-icon"><IoSearchCircleOutline /></div>
            <p className="nav-link"><Link to={`members`}>Members</Link></p>
          </div>
          <div className='nav-flex'>
            <div className="navbar-icon"><IoPeopleCircleOutline /></div>
            <p className="nav-link"><Link to={`friends`}>Friends</Link></p>
          </div>
          <div className='nav-flex'>
            <div className="navbar-icon"><IoTrendingUpSharp /></div>
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
