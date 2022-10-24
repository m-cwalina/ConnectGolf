import React from "react";

export default function Friend(props) {
  return (
    <div className="friend-tile">
      <img className='friend-tile-info-image' src={props.friend.friend.picture || null} />
      <p className="friend-tile-info">{props.friend.friend.name}</p>
    </div>
  )
}
