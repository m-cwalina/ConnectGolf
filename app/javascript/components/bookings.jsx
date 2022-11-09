import React from 'react';
import {Outlet, NavLink} from "react-router-dom";
import { IoAnalyticsOutline, IoCellularOutline, IoOptionsOutline, IoCalendarOutline } from "react-icons/io5";


export default function Bookings() {
  return(
    <div className="total-container">
      <div className='sidebar'>
        <div className='sidebar-links'>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoAnalyticsOutline /></div>
              <div><NavLink to={`daily_bookings`}>Daily</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoCellularOutline /></div>
              <div><NavLink to={`daily_bookings`}>Weekly</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoOptionsOutline /></div>
              <div><NavLink to={`daily_bookings`}>Monthly</NavLink></div>
            </div>
          </div>
          <div className='sidebar-link'>
            <div className='nav-flex'>
              <div className="navbar-icon"><IoCalendarOutline /></div>
              <div><NavLink to={`daily_bookings`}>Yearly</NavLink></div>
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
