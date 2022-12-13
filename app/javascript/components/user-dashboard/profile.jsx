import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const URL = `/api/v1/user`;
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
    <p>
      I'm the profile bitch.
    </p>
  );
}
