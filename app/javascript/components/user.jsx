import React, {useState} from "react";
import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const URL = `/api/v1/users/${params.userId}`;
  try {
    let response = await fetch(URL);
    let users = await response.json();
    console.log(users)
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
  } catch (error) {
    console.error(error)
  }
}

export default function User() {
  const [buttonText, setButtonText] = useState('Add Friend');
  const user = useLoaderData();

  const handleClick = () => {
    setButtonText('Request Sent');
  }
  return (
  <div id='contact'>
    <div>
      <img key={user.picture} src={user.picture || null} />
    </div>
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Handicap: {user.handicap}</h1>
      <div>
        <Form method='post'>
          <input type="hidden" name='friend_id' value= {user.id} />
            <button onClick={handleClick} type="submit">{buttonText}</button>
        </Form>
      </div>
    </div>
  </div>
  )
}
