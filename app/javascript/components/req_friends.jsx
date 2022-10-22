import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from './friend';

export async function loader() {
  const URL = '/api/v1/friendships/requested_friends';
  try {
    let response = await fetch(URL);
    let friends = await response.json();
    console.log(friends)
    return friends;
  } catch (error) {
    console.error(error);
  }
}


export default function ReqFriends() {
  const friends = useLoaderData();

  return (
  <>
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
    <div className="friends-container">
      {friends.map((friend) => {
        return (
          <div key={friend.id} className="friend-tiles">
            <div><Friend friend={friend} /></div>
          </div>
        );
      })}
    </div>
  </>
  )
}
