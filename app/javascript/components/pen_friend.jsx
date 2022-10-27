import React from "react";
import { useLoaderData, Form, useNavigate, redirect } from "react-router-dom";

  export async function loader({ params }) {
    const URL = `/api/v1/friendships/pending_friends/${params.friendId}`;
  try {
    let response = await fetch(URL);
    let friend = await response.json();
    console.log(friend)
    return friend;
  } catch (error) {
    console.error(error);
  }
}

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
  const navigate = useNavigate();

  const routeChange = (evt) => {
    let path = `/friendships/pending_friends`;
    evt.preventDefault();
    navigate(path);
  }

  return (
    <div className="friend-info">
      <h1 className="friend-name">{friend.friend.name}</h1>
      <div className="friend-flex-container">
        <img className='friend-image' src={friend.friend.picture} />
        <div className="friend-flex-container-2">
          <h2 className="friend-age">Age: {friend.friend.age}</h2>
          <h2 className="friend-handicap">Handicap: {friend.friend.handicap}</h2>
        </div>
      </div>
      <div className="accept-button">
        <Form target="_blank" method='patch'>
          <input type="hidden" name='friend_id' value={friend.id} />
          <button type='submit' className="btn btn-outline-success btn-lg" >Accept</button>
        </Form>
      </div>
    </div>
  )
}
