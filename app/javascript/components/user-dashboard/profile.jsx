import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdSportsGolf, MdAccountBox, MdMoving,  } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export async function loader() {
  const URL = `/api/v1/users/user`;
  try {
    let response = await fetch(URL);
    let user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
}

export default function Profile() {
  const user = useLoaderData();

  return (
    <div id='contact'>
      <div>
        <img key={user.picture} src={user.picture || null} />
      </div>
      <div>
        <h1><MdAccountBox style={{ color: "#0066CC", margin: '6px' }} /> {user.name}</h1>
        <h1><MdMoving style={{ color: "#0066CC", margin: '6px' }} /> {user.age}</h1>
        <h1><MdSportsGolf style={{ color: "#0066CC", margin: '6px' }} /> {user.handicap}</h1>
        <h1><IoShieldCheckmarkOutline style={{ color: "#0066CC", margin: '6px' }} /> {user.club}</h1>
      </div>
    </div>
  );
}
