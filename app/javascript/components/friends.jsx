import React, {useEffect} from "react";
import { useLoaderData, Link, Outlet, useSubmit } from "react-router-dom";
import { matchSorter } from "match-sorter";

const Api = async (query) => {
  const URL = "/api/v1/friendships/friends";
  try {
    let response = await fetch(URL);
    let results = await response.json();
    if (!results) results = [];
    if (query) {
      results = matchSorter(results, query, { keys: ['friend.name'] });
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
    const friends = await Api(q);
    return { friends, q };
  } catch (error) {
    console.error(error);
  }
}

export default function Friends() {
  const {friends, q} = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
  <>
    <div className="friends-container">
    <div id="searchbar">
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
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
        </form>
      </div>
    </div>
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
    <div className="friend-container">
      <Outlet/>
    </div>
  </>
  )
}
