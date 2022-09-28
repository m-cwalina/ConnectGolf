import React from 'react';
import { Outlet, Link, useLoaderData, } from "react-router-dom";

export async function loader() {
  const URL = "/api/v1/users";
  try {
    let response = await fetch(URL);
    let users = await response.json();
    return { users };
  } catch (error) {
    console.error(error);
  }
}

export default function App2() {
  const {users} = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>Members</h1>
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
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          {users.length ? (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <Link to={`/users/${user.id}`} user={user}>
                    {user.name || user.email ? (
                      <>
                        {user.name} {user.email}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {user.handicap && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Members</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
