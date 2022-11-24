import React from 'react';
import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";

export async function loader({ params }) {
  const URL = `/api/v1/tee_times/${params.teetimeId}`;
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
  const data = Object.fromEntries(formData);
  const URL = `/api/v1/tee_times/${params.teetimeId}/bookings`
  try {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error(error)
  }
}

export default function UserBooking() {
  const navigate = useNavigate();
  const teetime = useLoaderData();

  return (
    <div className='admin-booking-popup'>
      <div className='admin-booking-form'>
        <Form method="post">
          <div className='size-input-container'>
            <input type="hidden" name='tee_time_id' value={teetime.id} />
            <label for="size" style={{ margin: '8px' }}>How many people in the group?</label>
            <input className='size-input' placeholder="1-5" type="number" name="size" />
          </div>
          <div className='admin-booking-button'>
            <button type="submit" className="btn btn-outline-success btn-lg custom-size" onClick={() => navigate(-2)}>Confirm</button>
          </div>
        </Form>
      </div>
      <div className='admin-booking-button'>
        <button className="btn btn-outline-danger btn-lg custom-size" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  );
}
