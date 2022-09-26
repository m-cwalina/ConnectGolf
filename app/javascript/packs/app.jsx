import React, { useEffect, useState } from 'react';
import TeeTimes from '../components/teetimes';
import Calendar from '../components/calendar';
import { format, parseISO } from 'date-fns';



export default function App() {
  const [teeTimes, setTeeTimes] = React.useState([])
  const [selected, setSelected] = React.useState(Date.now());

  /*A fetch call to return tee times from api*/
  const Api = async () => {
    const URL = "/api/v1/tee_times";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setTeeTimes(data);
    } catch (error) {
      console.error(error);
    }
  };

  /*I use this function to call the Api*/
  useEffect(() => {
    Api();
  }, []);

  const searchTeeTimes = teeTimes.filter(
    teetime => format(parseISO(teetime.time), 'MM/dd/yyyy').includes(format(selected, 'MM/dd/yyyy'))
  )

  return (
    <div className="App">
      <div className='calendar'>
        <Calendar selected={selected} setSelected={setSelected} />
      </div>
      <div className="teetime-list">
        <TeeTimes teetimes={searchTeeTimes} />
      </div>
    </div>
  )
}
