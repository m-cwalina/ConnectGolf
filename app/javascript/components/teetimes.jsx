import React from 'react';
import TeeTime from './teetime';
import NoTeeTime from '../components/no_teetime'

export default function TeeTimes(props) {

  const renderList = () => {
    if (props.teetimes.length >= 1) {
      return props.teetimes.map((teetime) => {
        return (
          <div key={teetime.id} className="tiles">
            <div><TeeTime teetime={teetime}/></div>
          </div>
        );
      });
    } else {
      return <NoTeeTime />
    }
  };

  return (
    <div>{renderList()}</div>
  )
}
