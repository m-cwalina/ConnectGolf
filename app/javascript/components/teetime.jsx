import React from 'react';
import { format, parseISO } from 'date-fns';

export default function TeeTime(props) {
  return (
    <div>
      <div className="tile">
        <p className="tile-info">{format(parseISO(props.teetime.time), 'h:mm a')}</p>
        <p className="tile-info">{props.teetime.players} players</p>
      </div>
    </div>
  )
}
