import React from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";
import { MdSportsGolf, MdMoving } from "react-icons/md";

  //This loader fetches data from the API
  export async function loader({ params }) {
    const URL = `/api/v1/friendships/pending_friends/${params.friendId}`;
  try {
    let response = await fetch(URL);
    let friend = await response.json();
      return friend;
    } catch (error) {
      console.error(error);
    }
  }

  //This action updates the friendship status by a 'PATCH' method to API
  export async function action({ params }) {
    const URL = `/api/v1/friendships/${params.friendId}`;
  try {
    await fetch(URL, {
      method: 'PATCH',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'accepted' })
    })
      return redirect(`/friendships/pending_friends`);
    } catch (error) {
      console.error(error)
    }
  }

export default function PenFriend() {
  const friend = useLoaderData();

  return (
    <div className="friend-info">
      <h1 className="friend-name">{friend.friend.name}</h1>
      <div className="friend-flex-container">
        <img className='friend-image' src={friend.friend.picture} />
        <div className="friend-flex-container-2">
          <h2 className="friend-age"><MdMoving /> {friend.friend.age}</h2>
          <h2 className="friend-handicap"><MdSportsGolf /> {friend.friend.handicap}</h2>
        </div>
      </div>
      <div className="accept-button">
        <Form method='patch'>
          <input type="hidden" name='friend_id' value={friend.id} />
          <button type='submit' className="btn btn-outline-success btn-lg" >Accept</button>
        </Form>
      </div>
    </div>
  )
}
