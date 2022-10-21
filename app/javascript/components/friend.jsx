import React from "react";

export default function Friend(props) {
  return (
    <div className="friend-tile">
      <img className='friend-tile-info-image' src={props.friend.friend.picture || null} />
      <p className="friend-tile-info">Name: {props.friend.friend.name}</p>
      <p className="friend-tile-info">Age: {props.friend.friend.age}</p>
      <p className="friend-tile-info">Handicap: {props.friend.friend.handicap}</p>
    </div>
  )
}
