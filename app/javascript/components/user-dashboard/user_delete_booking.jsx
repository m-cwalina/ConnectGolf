import React from "react";
import { format, parseISO } from 'date-fns';
import { useLoaderData, Form, useNavigate, redirect } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5";

export async function loader({ params }) {
  const URL = `/api/v1/bookings/${params.bookingId}`;
  try {
    let response = await fetch(URL);
    let booking = await response.json();
    return booking;
  } catch (error) {
    console.error(error);
  }
}

export async function action({ params, request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const URL = `/api/v1/bookings/${params.bookingId}`;
  try {
    await fetch(URL, {
      method: 'DELETE',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return redirect(`/user/booked`);
  } catch (error) {
    console.error(error)
  }
}

export default function UserBookingDelete() {
  const booking = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="checkin-popup">
      <div className='checkin-popup-time'>
        <div className='teesheet-icon'><IoTimerOutline /></div>
        <div className='teesheet-info'>{format(parseISO(booking.teetime.time), 'h:mm a')}</div>
      </div>
      <div className='checkin-popup-button'>
        <Form method='delete'>
          <input type="hidden" name='booking_id' value={booking.id}  />
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
