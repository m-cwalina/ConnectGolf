import React, { useEffect } from "react";
import { useLoaderData, Link, Outlet, useSubmit } from "react-router-dom";
import { matchSorter } from "match-sorter";

const Api = async (query) => {
  const URL = "/api/v1/friendships/friends";
  try {
    let response = await fetch(URL);
    let data = await response.json();
    data = matchSorter(data, 'pending', { keys: ['status'] })
    console.log(data)
    if (!data) data = [];
    if (query) {
      data = matchSorter(data, query, { keys: ['friend.name'] });
    }
    return data
  } catch (error) {
    console.error(error);
  }
};

export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    let q = url.searchParams.get("q");
    const friends = await Api(q);
    return { friends, q };
  } catch (error) {
    console.error(error);
  }
}

export default function PenFriends() {
  const { friends, q } = useLoaderData();
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
          {friends.map((friend) => {
            return (
              <div key={friend.id} className="friend-tiles">
                <div className="friend-tile">
                  <img className='friend-tile-info-image' src={friend.friend.picture || null} />
                  <Link to={`${friend.id}`} className="friend-tile-info">{friend.friend.name}</Link>
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
