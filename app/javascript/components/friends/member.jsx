import React from "react";
import { Form, useLoaderData, redirect } from "react-router-dom";
import { MdSportsGolf, MdAccountBox, MdMoving } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


export async function loader({ params }) {
  const URL = `/api/v1/friendships/members/${params.memberId}`;
  try {
    let response = await fetch(URL);
    let member = await response.json();
    return member;
  } catch (error) {
    console.error(error);
  }
}

export async function action({ params }) {
  const URL = `/api/v1/friendships`;
  try {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ friend_id: params.memberId })
    })
    return redirect(`/friendships/members`);
  } catch (error) {
    console.error(error)
  }
}

export default function Member() {
  const member = useLoaderData();

  return (
    <div id='contact'>
      <div>
        <img key={member.picture} src={member.picture || null} />
      </div>
      <div>
        <h1><MdAccountBox style={{ color: "#0066CC", margin: '6px' }} /> {member.name}</h1>
        <h1><MdMoving style={{ color: "#0066CC", margin: '6px' }} /> {member.age}</h1>
        <h1><MdSportsGolf style={{ color: "#0066CC", margin: '6px' }} /> {member.handicap}</h1>
        {(Object.values(member.friends).includes(member.current_user))
          ? (<div className='friend-mark'><h1 style={{ color: "#1A8753", margin: '6px', 'align-items': 'center' }}><IoCheckmarkCircleOutline />Friend</h1></div>)
          : (<Form method='post'>
            <input type="hidden" name='friend_id' value={member.id} />
            <button type="submit" className="btn btn-outline-success btn-lg">Add Friend</button>
          </Form>)}
      </div>
    </div>
  )
}
