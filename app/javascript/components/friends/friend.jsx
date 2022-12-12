import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdSportsGolf, MdAccountBox, MdMoving } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

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
    <div id='contact'>
      <div>
        <img key={friend.friend.picture} src={friend.friend.picture || null} />
      </div>
      <div>
        <h1><MdAccountBox style={{ color: "#0066CC", margin: '6px' }} /> {friend.friend.name}</h1>
        <h1><MdMoving style={{ color: "#0066CC", margin: '6px' }} /> {friend.friend.age}</h1>
        <h1><MdSportsGolf style={{ color: "#0066CC", margin: '6px' }} /> {friend.friend.handicap}</h1>
        <h1 style={{ color: "#1a8753" }}><IoCheckmarkCircleOutline style={{ color: "#1a8753", margin: '6px' }} />FRIEND</h1>
      </div>
    </div>
  )
}
