import React from "react";
import { useLoaderData } from "react-router-dom";
import { format, parseISO } from 'date-fns';
import { IoTimerOutline, IoPeopleOutline, IoCheckmarkCircleOutline, IoCheckmarkDoneCircleOutline } from "react-icons/io5";

export async function loader() {
  const URL = `/api/v1/bookings/booked_times`;
  try {
    let response = await fetch(URL);
    let bookings = await response.json();
    return bookings;
  } catch (error) {
    console.error(error);
  }
}

export default function Booked() {
  const bookings = useLoaderData();

  const renderList = () => {
    return bookings.map((booking) => {
      return (
        <ul className='teesheet' key={booking.id}>
          <div className='teesheet-time-total'>
            <div className='teesheet-icon'><IoTimerOutline /></div>
            <div className='teesheet-info'> {format(parseISO(booking.teetime.time), 'LLL do, h:mm a')}</div>
          </div>
          <div className='teesheet-player-total'>
            <div className='teesheet-icon'><IoPeopleOutline /></div>
            <div className='teesheet-info'> {booking.size} players</div>
          </div>
          <div className='teesheet-user-total'>
            <div className='teesheet-icon'><IoCheckmarkDoneCircleOutline /></div>
            <div className='teesheet-info'>{(booking.teetime.check_in == true) ? (<div className='checkin-button-green'>Checked In</div>) : (<div className='checkin-button-red'>Check In</div>)}</div>
          </div>
        </ul>
      );
    });
  };

  return (
      <div className='booked-times-container'>{renderList()}</div>
  );
}
