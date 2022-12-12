import React, { useEffect } from "react";
import { useLoaderData, Link, Outlet, useSubmit } from "react-router-dom";
import { matchSorter } from "match-sorter";

const Api = async (query) => {
  const URL = "/api/v1/friendships/members";
  try {
    let response = await fetch(URL);
    let results = await response.json();
    if (!results) results = [];
    if (query) {
      results = matchSorter(results, query, { keys: ['member.name'] });
    }
    return results
  } catch (error) {
    console.error(error);
  }
};

export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    let q = url.searchParams.get("q");
    const members = await Api(q);
    return { members, q };
  } catch (error) {
    console.error(error);
  }
}

export default function Members() {
  const { members, q } = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <div className='navbar-search-container'>
        <div className="searchbar-container">
          <div id="searchbar">
            <form className="d-flex" role="search">
              <input className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="q"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });
                }}>
              </input>
            </form>
          </div>
        </div>

        <div className="friends-container">
          {members.map((member) => {
            return (
              <div key={member.id} className="friend-tiles">
                <div className="friend-tile">
                  <img className='friend-tile-info-image' src={member.picture || null} />
                  <Link to={`${member.id}`} className="friend-tile-info">{member.name}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="friend-container">
        <Outlet />
      </div>
    </>
  )
}
