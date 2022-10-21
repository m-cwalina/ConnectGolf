import React from "react";
import { Outlet, Link } from "react-router-dom";

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
          <p className="nav-link"><Link to={`friends`}>Friends</Link></p>
          <p className="nav-link"><Link to={`pending_friends`}>Pending Friends</Link></p>
          <p className="nav-link"><Link to={`requested_friends`}>Requested Friends</Link></p>
        </nav>
      </div>
      <div className='detail'>
        <Outlet/>
      </div>
    </>
  )
}
