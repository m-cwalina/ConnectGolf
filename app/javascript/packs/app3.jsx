import React from "react";
import { Outlet } from "react-router-dom";

export default function App3() {
  return(
    <>
      <div id="navigation">
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              type="search"
              name="q"
            />
          </form>
        </div>
        <nav className="nav-links">
          <p className="nav-link"><a>Friends</a></p>
          <p className="nav-link"><a>Pending Friends</a></p>
          <p className="nav-link"><a>Friend Requests</a></p>
        </nav>
      </div>
      <div className='detail'>
        <Outlet/>
      </div>
    </>
  )
}
