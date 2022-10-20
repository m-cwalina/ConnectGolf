import React from "react";

export default function App3() {
  return(
    <div id="navigation">
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div
            id="search-spinner"
            aria-hidden
            hidden={true}
          />
          <div
            className="sr-only"
            aria-live="polite"
          ></div>
        </form>
      </div>
      <nav className="nav-links">
        <p className="nav-link"><a>Friends</a></p>
        <p className="nav-link"><a>Pending Friends</a></p>
        <p className="nav-link"><a>Friend Requests</a></p>
      </nav>
    </div>
  )
}
