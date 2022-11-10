import React from 'react';
import {Outlet, NavLink} from "react-router-dom";
import { IoAnalyticsOutline, IoCellularOutline, IoOptionsOutline, IoCalendarOutline, IoChevronBackCircleOutline } from "react-icons/io5";


export default function Bookings() {
  return(
    <div className="total-container">
      <div className='sidebar'>
        <div className='sidebar-links'>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoChevronBackCircleOutline /></div>
              <div><NavLink to={`hourly`}>Hourly</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoAnalyticsOutline /></div>
              <div><NavLink to={`daily`}>Daily</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoCellularOutline /></div>
              <div><NavLink to={`weekly`}>Weekly</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoOptionsOutline /></div>
              <div><NavLink to={`monthly`}>Monthly</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoCalendarOutline /></div>
              <div><NavLink to={`yearly`}>Yearly</NavLink></div>
            </div>
          </div>
        </div>
      </div>

      <div className='booking-details'>
        <Outlet />
      </div>
    </div>
  )
}
