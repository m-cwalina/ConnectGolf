import React from "react";
import Image from 'images/golf-logo.png'

export default function BlankPage() {
  return (
    <p id="zero-state">
      GolfConnect. Get out there and go low.
      <br />
      <img className="blankpage-logo" src={Image}></img>
    </p>
  );
}
