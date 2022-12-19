import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { IoAlbumsOutline, IoBagCheckOutline, IoOptionsOutline, IoCheckmarkCircleOutline, IoPersonCircleOutline } from "react-icons/io5";

export default function App4() {
  return (
    <div className="total-posts-container">
      <div className='sidebar'>
        <div className='sidebar-links'>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <NavLink to={`profile`}>
                <div className="navbar-icon"><IoPersonCircleOutline /></div>
                <div>Profile</div>
              </NavLink>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <NavLink to={`news`}>
                <div className="navbar-icon"><IoAlbumsOutline /></div>
                <div>News</div>
              </NavLink>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <NavLink to={`booked`}>
                <div className="navbar-icon"><IoCheckmarkCircleOutline /></div>
                <div>Booked</div>
              </NavLink>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <NavLink to={`stats`}>
                <div className="navbar-icon"><IoOptionsOutline /></div>
                <div>Stats</div>
              </NavLink>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <NavLink to={`merch`}>
                <div className="navbar-icon"><IoBagCheckOutline /></div>
                <div>Merch</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className='userdash-detail-container'>
        <Outlet />
      </div>
    </div>
  )
}
