import React, {useEffect} from "react";
import {Form, useLoaderData, redirect} from "react-router-dom";
import Select from 'react-select'

export async function loader({ params }) {
  const URL = `/api/v1/tee_times/teesheet/${params.teetimeId}`;
  try {
    let response = await fetch(URL);
    let teetime = await response.json();
    return teetime;
  } catch (error) {
    console.error(error);
  }
}

export async function action({ request, params }) {
  const formData = await request.formData();
  console.log(formData)
  const data = Object.fromEntries(formData);
  console.log(data)
  const URL = `/api/v1/tee_times/teesheet/${params.teetimeId}/bookings/admin`
  try {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return redirect(`/dashboard/teesheet`);
  } catch (error) {
    console.error(error)
  }
}

export default function AdminBooking() {
  const teetime = useLoaderData()
  const [users, setUsers] = React.useState([])

  const Api = async () => {
    const URL = "/api/v1/users";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <div>
      <Form method="post">
        <Select
          options={users}
          getOptionLabel={(user) => user.name}
          getOptionValue={(user) => user.id}
          name="user_id"
          value={users.id}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <input type="hidden" name='tee_time_id' value={teetime.id} />
        <input placeholder="How many people?" type="text" name="size" />
        <button type="submit">submit</button>
      </Form>
    </div>
  );
}
