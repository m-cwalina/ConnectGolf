import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader( {params} ) {
  const URL = `/api/v1/friendships/friends/${params.friendId}`;
  try {
    let response = await fetch(URL);
    let friend = await response.json();
    return friend;
  } catch (error) {
    console.error(error);
  }
}

export default function Friend() {
  const friend = useLoaderData()

  return (
    <div className="friend-info">
      <h1 className="friend-name">{friend.friend.name}</h1>
      <img className='friend-image' src={friend.friend.picture} />
      <h2 className="friend-age">Age: {friend.friend.age}</h2>
      <h2 className="friend-handicap">Handicap: {friend.friend.handicap}</h2>
    </div>
  )
}
