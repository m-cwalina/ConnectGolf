import React from 'react';
import BlankImage from 'images/blankpage-logo.png'

export default function ComingSoon() {
  return (
    <div className='coming-soon-container'>
      <div><img className="blankpage-logo" src={BlankImage}></img></div>
      <div><h3 style={{ color: '#818181' }} >Coming Soon.</h3></div>
    </div>
  )
}
