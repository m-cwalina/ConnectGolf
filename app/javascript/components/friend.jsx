import React from "react";
import { useLoaderData } from "react-router-dom";

export async function Loader( {params} ) {
  const URL = `/api/v1/friendships/friends/${params.friendId}`;
  try {
    let response = await fetch(URL);
    let friends = await response.json();
    console.log(friends)
    return friends;
  } catch (error) {
    console.error(error);
  }
}

export default function Friend() {
  const friends = useLoaderData()
  return (
    <div className="friend-tile">
      <img className='friend-tile-info-image' src={null} />
      <p className="friend-tile-info">Hello</p>
    </div>
  )
}
