import React from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";
import { MdSportsGolf, MdMoving, MdAccountBox } from "react-icons/md";

  //This loader fetches data from the API
  export async function loader({ params }) {
    const URL = `/api/v1/friendships/friends/${params.friendId}`;
  try {
    let response = await fetch(URL);
    let friend = await response.json();
      return friend;
    } catch (error) {
      console.error(error);
    }
  }

  //This action updates the friendship status by a 'PATCH' method to API
  export async function action({ params, request, friendship }) {
    const URL = `/api/v1/friendships/${params.friendId}`;
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data)
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
    <div id='contact'>
      <div>
        <img key={friendship.friend.picture} src={friendship.friend.picture || null} />
      </div>
      <div>
        <h1><MdAccountBox style={{ color: "#0066CC", margin: '6px' }} /> {friendship.friend.name}</h1>
        <h1><MdMoving style={{ color: "#0066CC", margin: '6px' }} /> {friendship.friend.age}</h1>
        <h1><MdSportsGolf style={{ color: "#0066CC", margin: '6px' }} /> {friendship.friend.handicap}</h1>
        <div>
          <Form method='patch'>
            <input type="hidden" name='friend_id' value={friendship.friend_id} />
            <button type='submit' className="btn btn-outline-success btn-lg" >Accept</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

{/* <input type="hidden" name='user_id' value={friendship.user.id} /> */ }
    // const formData = await request.formData();
    // const data = Object.fromEntries(formData);
