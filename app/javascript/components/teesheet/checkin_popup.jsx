import React from "react";
import { format, parseISO } from 'date-fns';
import { useLoaderData, Form, redirect, useNavigate } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5";

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

export async function action({ params }) {
  const URL = `/api/v1/tee_times/${params.teetimeId}`;
  try {
    await fetch(URL, {
      method: 'PATCH',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ check_in: true })
    })
    return redirect(`/dashboard/teesheet`);
  } catch (error) {
    console.error(error)
  }
}

export default function CheckInPopUp() {
  const teetime = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="checkin-popup">
      <div className='checkin-popup-time'>
        <div className='teesheet-icon'><IoTimerOutline /></div>
        <div className='teesheet-info'>{format(parseISO(teetime.time), 'h:mm a')}</div>
      </div>
      <div>
        <Form method='post'>
          <input type="hidden" name='friend_id' value={teetime.id} />
          <button type="submit" className="btn btn-outline-success btn-lg">Confirm</button>
        </Form>
      </div>
      <div>
        <button className="btn btn-outline-danger btn-lg" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  );
}
