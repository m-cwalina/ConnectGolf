import React, { useState } from 'react';
import TeeTime from './teetime';

export default function TeeTimes(props) {

  const renderList = () => {
    return props.teetimes.map((teetime) => {
      return (
        <div key={teetime.id} className="tiles">
          <div><TeeTime teetime={teetime}/></div>
        </div>
      );
    });
  };

  return (
    <div className="teetime-container">{renderList()}</div>
  )
}
