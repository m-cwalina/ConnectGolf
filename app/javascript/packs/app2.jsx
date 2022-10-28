import React, { useEffect } from 'react';
import {Form, Outlet, useNavigation, useLoaderData, NavLink, useSubmit } from "react-router-dom";
import { matchSorter } from "match-sorter";

const Api = async (query) => {
  const URL = "/api/v1/users";
  try {
    let response = await fetch(URL);
    let results = await response.json();
    if (!results) results = [];
    if (query) {
      results = matchSorter(results, query, { keys: ['name'] });
    }
  return results
  } catch (error) {
    console.error(error);
  }
};

export async function loader( {request} ) {
  try {
    const url = new URL(request.url);
    let q = url.searchParams.get("q");
    const users = await Api(q);
    return {users, q};
  } catch (error) {
    console.error(error);
  }
}

export default function App2() {
  const {users, q} = useLoaderData();
  const navigation = useNavigation();
  /* Allows for each key stroke to filter users in search bar */
  const submit = useSubmit();
  /* Allows for a spinner to show up in search bar when filtering through users */
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>Members</h1>
        <div>
          <Form className="d-flex" role="search">
            <input className="form-control me-2"
                   id='q'
                   type="search"
                   placeholder="Search"
                   aria-label="Search"
                   name="q"
                   defaultValue={q}
                   onChange={(event) => {
                     const isFirstSearch = q == null;
                     submit(event.currentTarget.form, {
                     replace: !isFirstSearch,
                   });
                 }}
            />
            <div id="search-spinner" aria-hidden hidden={true} />
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
                    {user.name ? (
                      <>
                        {user.name}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {user.handicap && <span></span>}
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

/*
<Form id="search-form" role="search">
  <input
    id="q"
    aria-label="Search contacts"
    placeholder="Search"
    type="search"
    name="q"
    defaultValue={q}
    onChange={(event) => {
      const isFirstSearch = q == null;
      submit(event.currentTarget.form, {
        replace: !isFirstSearch,
      });
    }}
  />
  <div id="search-spinner" aria-hidden hidden={true} />
  <div className="sr-only" aria-live="polite"></div>
</Form>
*/
