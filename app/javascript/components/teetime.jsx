import React from 'react';
import { format, parseISO } from 'date-fns';
import { IoAlarm, IoFlagOutline, IoGolf } from "react-icons/io5";
export default function TeeTime(props) {
  return (
    <div>
      <div className="tile">
        <p className="tile-info"><IoAlarm className="icon" /> {format(parseISO(props.teetime.time), 'h:mm a')}</p>
        <p className="tile-info"><IoFlagOutline className="icon"/> {format(parseISO(props.teetime.time), 'PP')}</p>
        <p className="tile-info"><IoGolf className="icon"/> {props.teetime.players} players</p>
        <a className="tile-info-button" href={`/tee_times/${props.teetime.id}/bookings/new`}>
          <button className="btn btn-outline-success btn-lg">Book</button>
        </a>
      </div>
    </div>
  )
}
