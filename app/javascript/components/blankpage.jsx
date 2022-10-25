import React from "react";
import BlankImage from 'images/blankpage-logo.png'

export default function BlankPage() {
  return (
    <p id="zero-state">
      GolfConnect. Get out there and go low.
      <br />
      <img className="blankpage-logo" src={BlankImage}></img>
    </p>
  );
}
