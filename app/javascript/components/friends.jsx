import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
  const URL = '/api/v1/friendships/friends';
  try {
    let response = await fetch(URL);
    let friends = await response.json();
    return friends;
  } catch (error) {
    console.error(error);
  }
}

export default function Friends() {
  const friends = useLoaderData();

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
    </div>
  </>
  )
}
