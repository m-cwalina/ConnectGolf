import React from "react";
import { Form, useLoaderData } from "react-router-dom";

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

export async function action() {
  await createContact();
}

export default function User(props) {
  const user = useLoaderData();

  return (
  <div id='contact'>
    <div>
      <img key={user.picture} src={user.picture || null} />
    </div>
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Handicap: {user.handicap}</h1>
      <Form action='/friendships' method='post'>
        <button type="submit">Add Friend</button>
      </Form>
    </div>
  </div>
  )
}
