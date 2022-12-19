import React from "react";
import { Outlet, Link, useNavigation } from "react-router-dom";
import Image from 'images/navbar-logo.png'
import { IoGolfOutline, IoPeopleOutline, IoReaderOutline, IoHomeOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";

export default function App3() {
  const navigation = useNavigation();

  return (
    <>
      <div id="navigation">
        <div>
          <img className="logo" src={Image}></img>
        </div>
        <nav className="nav-links">
          <div className='nav-flex'>
            <a href={'/user'}>
              <div className="navbar-icon"><BsHouse /></div>
              <p className="nav-link">Home</p>
            </a>
          </div>
          <div className='nav-flex'>
            <Link to={`teesheet`}>
              <div className="navbar-icon"><IoGolfOutline /></div>
              <p className="nav-link">TeeSheet</p>
            </Link>
          </div>
          <div className='nav-flex'>
            <Link to={`members`}>
              <div className="navbar-icon"><IoPeopleOutline /></div>
              <p className="nav-link">Members</p>
            </Link>
          </div>
          <div className='nav-flex'>
            <Link to={`bookings`}>
              <div className="navbar-icon"><IoReaderOutline /></div>
              <p className="nav-link">Analytics</p>
            </Link>
          </div>
        </nav>
      </div>
      <div className={navigation.state === "loading" ? "loading" : ""}>
        <Outlet />
      </div>
    </>
  )
}
