import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { IoAnalyticsOutline, IoCellularOutline, IoOptionsOutline, IoCalendarOutline, IoPersonCircleOutline } from "react-icons/io5";

export default function App4() {
  return (
    <div className="total-posts-container">
      <div className='sidebar'>
        <div className='sidebar-links'>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoPersonCircleOutline /></div>
              <div><NavLink to={`profile`}>Profile</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoAnalyticsOutline /></div>
              <div><NavLink to={`news`}>News</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoCellularOutline /></div>
              <div><NavLink to={`weekly`}>Booked</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoOptionsOutline /></div>
              <div><NavLink to={`monthly`}>Stats</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoCalendarOutline /></div>
              <div><NavLink to={`yearly`}>Merch</NavLink></div>
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
