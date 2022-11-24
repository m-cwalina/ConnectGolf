import React, {useEffect} from "react";
import {Form, useLoaderData, redirect, useNavigate} from "react-router-dom";
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
  const navigate = useNavigate();

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
    <div className='admin-booking-popup'>
      <div className='admin-booking-form'>
        <Form method="post">
          <div className='select-input container'>
            <label for="user_id" style={{ margin: '8px' }}>Select a member</label>
            <Select
              label="Find a member"
              options={users}
              getOptionLabel={(user) => user.name}
              getOptionValue={(user) => user.id}
              name="user_id"
              value={users.id}
              className="basic-single"
              classNamePrefix="select"
            />
          </div>
          <div className='size-input-container'>
            <input type="hidden" name='tee_time_id' value={teetime.id} />
            <label for="size" style={{margin: '8px'}}>How many people in the group?</label>
            <input className='size-input' placeholder="1-5" type="number" name="size" />
          </div>
          <div className='admin-booking-button'>
            <button type="submit" className="btn btn-outline-success btn-lg custom-size">Confirm</button>
          </div>
        </Form>
      </div>
      <div className='admin-booking-button'>
        <button className="btn btn-outline-danger btn-lg custom-size" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  );
}
