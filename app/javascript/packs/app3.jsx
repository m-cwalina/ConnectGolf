import React from "react";
import { Outlet, Link } from "react-router-dom";
import Image from 'images/navbar-logo.png'

export default function App3() {
  return(
    <>
      <div id="navigation">
        <div>
          <img className="logo" src={Image}></img>
        </div>
        <nav className="nav-links">
          <p className="nav-link"><Link to={`friends`}>Friends</Link></p>
          <p className="nav-link"><Link to={`pending_friends`}>Friend Requests</Link></p>
          <p className="nav-link"><Link to={`requested_friends`}>Sent Requests</Link></p>
        </nav>
      </div>
      <div className='detail'>
        <Outlet/>
      </div>
    </>
  )
}
