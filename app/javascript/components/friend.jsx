import React from "react";
import { useLoaderData } from "react-router-dom";

export async function Loader( {params} ) {
  const URL = `/api/v1/friendships/friends/${params.friendId}`;
  try {
    let response = await fetch(URL);
    let friend = await response.json();
    console.log(friend)
    return friend;
  } catch (error) {
    console.error(error);
  }
}

export default function Friend() {
  const friend = useLoaderData()

  return (
    <div className="friend-info">
      <img className='friend-tile-info-image' src={null} />
      <h1 className="friend-name">{friend.friend.name && null}</h1>
    </div>
  )
}
