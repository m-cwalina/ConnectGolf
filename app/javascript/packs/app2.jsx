import React from 'react';
import {Form, Outlet, useNavigation, useLoaderData, NavLink } from "react-router-dom";

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
  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">
        <h1>Members</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true}/>
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          {users.length ? (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <NavLink
                    to={`/users/${user.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    {user.name || user.email ? (
                      <>
                        {user.name} {user.email}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {user.handicap && <span>★</span>}
                  </NavLink>
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
      <div id="detail" className={ navigation.state === "loading" ? "loading" : ""}>
        <Outlet />
      </div>
    </>
  );
}
