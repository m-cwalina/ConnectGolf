import React from 'react';

export default function TeeTime(props) {
  return (
    <div>
      <div className="buddy-tile-info">
        <p className="buddy-name">{props.teetime.time}</p>
        <p className="buddy-name">{props.teetime.players}</p>
      </div>
    </div>
  )
}
