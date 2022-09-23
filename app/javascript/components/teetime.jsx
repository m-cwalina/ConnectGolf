import React from 'react';
import { format, parseISO } from 'date-fns';

export default function TeeTime(props) {
  return (
    <div>
      <div className="tile">
        <p className="tile-info">{format(parseISO(props.teetime.time), 'h:mm a')}</p>
        <p className="tile-info">{format(parseISO(props.teetime.start_time), 'PP')}</p>
        <p className="tile-info">{props.teetime.players} players</p>
        <a className="tile-info" href={`/tee_times/${props.teetime.id}/bookings/new`}>
          <button className="btn btn-outline-success btn-lg">Book</button>
        </a>
      </div>
    </div>
  )
}
