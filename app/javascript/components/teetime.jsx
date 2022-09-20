import React from 'react';

export default function TeeTime(props) {
  return (
    <div>
      <div className="tile">
        <p className="teetime-name">{props.teetime.time}</p>
        <p className="players">{props.teetime.players}</p>
      </div>
    </div>
  )
}
