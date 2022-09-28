import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const URL = `/api/v1/users/${params.userId}`;
  try {
    let response = await fetch(URL);
    let users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
}

export default function User(props) {
  const user = useLoaderData();

  return (
  <>
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.handicap} handicap</p>
    </div>
  </>
  )

}
