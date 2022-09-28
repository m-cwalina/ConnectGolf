import React from "react";

export default function User(props) {
  return (
  <>
    <div>
      <p>{props.user.name}</p>
      <p>{props.user.age}</p>
      <p>{props.user.handicap} handicap</p>
    </div>
  </>
  )

}
