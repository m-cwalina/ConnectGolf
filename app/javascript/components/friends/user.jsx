import React from "react";
import { Form, useLoaderData, redirect } from "react-router-dom";
import { MdSportsGolf, MdAccountBox, MdMoving } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


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

export async function action({params}) {
  const URL = `/api/v1/friendships`;
  try {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({friend_id: params.userId})
    })
    return redirect(`/users`);
  } catch (error) {
    console.error(error)
  }
}

export default function User() {
  const user = useLoaderData();

  return (
  <div id='contact'>
    <div>
      <img key={user.picture} src={user.picture || null} />
    </div>
    <div>
        <h1><MdAccountBox style={{color: "#0066CC", margin: '6px'}} /> {user.name}</h1>
        <h1><MdMoving style={{ color: "#0066CC", margin: '6px' }} /> {user.age}</h1>
        <h1><MdSportsGolf style={{ color: "#0066CC", margin: '6px' }} /> {user.handicap}</h1>
        {(user.friends.name.includes("Jared Kurich")) ? (<div className='friend-mark'><h1 style={{ color: "#1A8753", margin: '6px', 'align-items': 'center' }}><IoCheckmarkCircleOutline />Friend</h1></div>) : (<Form method='post'>
          <input type="hidden" name='friend_id' value={user.id} />
          <button type="submit" className="btn btn-outline-success btn-lg">Add Friend</button>
        </Form>)}
    </div>
  </div>
  )
}
