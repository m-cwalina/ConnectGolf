import React from "react";
import { format, parseISO } from 'date-fns';
import { useLoaderData, Form, useNavigate, redirect } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5";
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

export async function action({ params, request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const URL = `/api/v1/tee_times/${params.teetimeId}/bookings/${params.bookingId}`;
  try {
    await fetch(URL, {
      method: 'DELETE',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return redirect(`/dashboard/teesheet`);
  } catch (error) {
    console.error(error)
  }
}

export default function AdminBookingDelete() {
  const teetime = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="checkin-popup">
      <div className='checkin-popup-time'>
        <div className='teesheet-icon'><IoTimerOutline /></div>
        <div className='teesheet-info'>{format(parseISO(teetime.time), 'h:mm a')}</div>
      </div>
      <div className='checkin-popup-button'>
        <Form method='delete'>
          <div className='select-input container'>
            <label for="user_id" style={{ margin: '8px' }}>Select a member</label>
            <Select
              label="Find a member"
              options={teetime.users}
              getOptionLabel={(teetime) => teetime.name}
              getOptionValue={(teetime) => teetime.id}
              name="user_id"
              value={teetime.users.id}
              className="basic-single"
              classNamePrefix="select"
            />
          </div>
          <input type="hidden" name='tee_time_id' value={teetime.id} />
          <div className='admin-booking-button'>
            <button type="submit" className="btn btn-outline-success btn-lg custom-size">Confirm</button>
          </div>
        </Form>
      </div>
      <div className='checkin-popup-button'>
        <button className="btn btn-outline-danger btn-lg custom-size" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
