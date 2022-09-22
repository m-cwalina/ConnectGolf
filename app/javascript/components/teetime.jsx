import React from 'react';

export default function TeeTime(props) {
  return (
    <div>
      <div className="tile">
        <p className="tile-info">{props.teetime.time}</p>
        <p className="tile-info">{props.teetime.start_time}</p>
        <p className="tile-info">{props.teetime.players}</p>
      </div>
    </div>
  )
}
