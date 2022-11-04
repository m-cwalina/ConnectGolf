import React from 'react';
import BlankImage from 'images/blankpage-logo.png'

export default function NoTeeTime(props) {
  return (
    <div className='no-teetime-container'>
      <div><img className="blankpage-logo" src={BlankImage}></img></div>
      <div><h3 style={{color: '#818181'}} >There are no more tee times today.</h3></div>
    </div>
  )
}
