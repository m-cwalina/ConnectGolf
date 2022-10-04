import React from 'react';
import {Form, Outlet, useNavigation, useLoaderData, NavLink, searchParams } from "react-router-dom";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const Api = async (query) => {
  const URL = "/api/v1/users";
  try {
    let response = await fetch(URL);
    let results = await response.json();
    if (!results) results = [];
    if (query) {
      results = matchSorter(contacts, query, { keys: ["first", "last"] });
    }
  return results.sort(sortBy("last", "createdAt"));
  } catch (error) {
      console.error(error);
  }
};

export async function loader( {request} ) {
  try {
    const url = new URL(request.url);
    let q = url.searchParams.get("q");
    const users = await Api(q);
    console.log(users)
    return {users};
  } catch (error) {
    console.error(error);
  }
}

export default function App2() {
  const {users, q} = useLoaderData();
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
              defaultValue={q}
            />
            <div id="search-spinner" aria-hidden hidden={true}/>
            <div className="sr-only" aria-live="polite"></div>
          </Form>
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
