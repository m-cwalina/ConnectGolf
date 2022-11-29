import React from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";
import { MdSportsGolf, MdMoving } from "react-icons/md";

  //This loader fetches data from the API
  export async function loader({ params }) {
    const URL = `/api/v1/friendships/pending_friends/${params.friendId}`;
  try {
    let response = await fetch(URL);
    let friendship = await response.json();
      return friendship;
    } catch (error) {
      console.error(error);
    }
  }

  //This action updates the friendship status by a 'PATCH' method to API
  export async function action({ params, request }) {
    const URL = `/api/v1/friendships/${params.friendId}`;
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
  try {
    await fetch(URL, {
      method: 'PATCH',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      return redirect(`/friendships/pending_friends`);
    } catch (error) {
      console.error(error)
    }
  }

export default function PenFriend() {
  const friendship = useLoaderData();

  return (
    <div className="friend-info">
      <h1 className="friend-name">{friendship.friend.name}</h1>
      <div className="friend-flex-container">
        <img className='friend-image' src={friendship.friend.picture} />
        <div className="friend-flex-container-2">
          <h2 className="friend-age"><MdMoving style={{ color: "#0066CC" }} /> {friendship.friend.age}</h2>
          <h2 className="friend-handicap"><MdSportsGolf style={{ color: "#0066CC" }} /> {friendship.friend.handicap}</h2>
        </div>
      </div>
      <div className="accept-button">
        <Form method='patch'>
          <input type="hidden" name='user_id' value={friendship.user.id} />
          <input type="hidden" name='friend_id' value={friendship.friend.id} />
          <button type='submit' className="btn btn-outline-success btn-lg" >Accept</button>
        </Form>
      </div>
    </div>
  )
}
