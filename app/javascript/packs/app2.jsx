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
            <a href={'/user'}>
              <div className="navbar-icon" style={{'font-size': '2rem'}}><BsHouse /></div>
              <p className="nav-link">Home</p>
            </a>
          </div>
          <div className='nav-flex'>
            <Link to={`members`}>
              <div className="navbar-icon"><IoSearchCircleOutline /></div>
              <p className="nav-link">Members</p>
            </Link>
          </div>
          <div className='nav-flex'>
            <Link to={`friends`}>
              <div className="navbar-icon"><IoPeopleCircleOutline /></div>
              <p className="nav-link">Friends</p>
            </Link>
          </div>
          <div className='nav-flex'>
            <Link to={`pending_friends`}>
              <div className="navbar-icon"><IoTrendingUpSharp /></div>
              <p className="nav-link">Requests</p>
            </Link>
          </div>
          <div className='nav-flex'>
            <Link to={`requested_friends`}>
              <div className="navbar-icon"><IoPersonCircleOutline /></div>
              <p className="nav-link">Sent</p>
            </Link>
          </div>
        </nav>
      </div>
      <div className='detail'>
        <Outlet/>
      </div>
    </>
  )
}
