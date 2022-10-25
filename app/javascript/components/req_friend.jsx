import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const URL = `/api/v1/friendships/requested_friends/${params.friendId}`;
  try {
    let response = await fetch(URL);
    let friend = await response.json();
    console.log(friend)
    return friend;
  } catch (error) {
    console.error(error);
  }
}

export default function ReqFriend() {
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
